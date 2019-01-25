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

    const requestHeader = {
      method: "POST",
      body: JSON.stringify({
        token: storage.token,
        url: window.atob(
          new URLSearchParams(window.location.search).get("url")
        ),
        ideologicalConsistency: props.reviewIdeologicalConsistency,
        rating: props.reviewSourceRating
      }),
      headers: {
        "Content-Type": "application/json"
      }
    };

    let response = await fetch(
      `${window.API_URL}/api/v1/review/post`,
      requestHeader
    );

    if (response.ok) {
      // props.handleStateUpdate({ inConflict: false });
    } else if (response.status === 409) {
      props.handleStateUpdate({ inConflict: true });
    } else {
      props.handleStateUpdate({ inConflict: true });

      throwNewNetworkResponseUnsuccessfulError("4bkhDJeSzM");
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
