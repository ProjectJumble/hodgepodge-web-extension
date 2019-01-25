import {
  createBrowserNotification,
  throwNewNetworkResponseUnsuccessfulError
} from "../../helpers";

const request = async props => {
  // Show loader.
  props.handleStateUpdate({
    isFetched: false,
    isFetching: true
  });

  try {
    // TODO: Check for nulls.

    const storage = await window.browser.storage.sync.get();

    const tabs = await window.browser.tabs.query({
      active: true,
      lastFocusedWindow: true
    });

    const tab = {
      id: tabs[0].id,
      url: tabs[0].url,
      title: tabs[0].title
    };

    // const textContent = await window.browser.tabs.sendMessage(tab.id, {
    //   task: "getReadabilityTextContent"
    // });

    if (tab.url.startsWith("http")) {
      props.handleStateUpdate({ url: tab.url });

      const requestHeader = {
        method: "POST",
        body: JSON.stringify({
          token: storage.token,
          url: tab.url,
          title: tab.title
        }),
        headers: {
          "Content-Type": "application/json"
        }
      };

      let [fakeboxAuditResponse, reviewResponse] = await Promise.all([
        fetch(`${window.API_URL}/api/v1/audit/fakebox`, requestHeader),
        // fetch(`${window.API_URL}/api/v1/audit/fakebox`, {
        //   method: "POST",
        //   body: JSON.stringify({
        //     token: storage.token,
        //     url: tab.url,
        //     title: tab.title,
        //     content: textContent
        //   }),
        //   headers: {
        //     "Content-Type": "application/json"
        //   }
        // }),

        fetch(`${window.API_URL}/api/v1/review/get`, requestHeader)
      ]);

      if (fakeboxAuditResponse.ok) {
        const json = await fakeboxAuditResponse.json();

        props.handleStateUpdate({
          fakebox: Object.assign({}, props.fakebox, json)
        });
      } else {
        // props.handleStateUpdate({
        //   fakebox: Object.assign({}, props.fakebox, { success: false })
        // });
        props.handleStateUpdate({ isError: true });

        throwNewNetworkResponseUnsuccessfulError("6tDv0Tj2eD");
      }

      if (reviewResponse.ok) {
        // props.handleStateUpdate({ inConflict: false });
      } else if (reviewResponse.status === 409) {
        props.handleStateUpdate({ inConflict: true });
      } else {
        props.handleStateUpdate({ inConflict: true });

        throwNewNetworkResponseUnsuccessfulError("upTxVULrna");
      }
    } else {
      props.handleStateUpdate({ isLocalhost: true });
    }
  } catch (error) {
    createBrowserNotification(error);
  }

  // Hide loader.
  props.handleStateUpdate({
    isFetched: true,
    isFetching: false
  });
};

export default request;
