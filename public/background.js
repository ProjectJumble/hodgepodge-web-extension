"use strict";

(window => {
  // Disable browser action on new tabs.
  window.browser.browserAction.disable();

  const throwNewNetworkResponseUnsuccessfulError = error => {
    throw new Error(
      `${window.browser.i18n.getMessage(
        "systemNetworkResponseUnsuccessful"
      )} (${error})`
    );
  };

  const createBrowserNotification = error => {
    window.browser.notifications.create({
      type: "basic",
      iconUrl: window.browser.extension.getURL("images/icon-48.png"),
      title: error.name, // window.browser.i18n.getMessage("systemError"),
      message: error.message
    });
  };

  const setToken = () => {
    fetch(`${window.API_URL}/api/v1/user/create`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throwNewNetworkResponseUnsuccessfulError("u73jMGPETn");
        }
      })
      .then(data => window.browser.storage.sync.set({ token: data.token }))
      .catch(error => createBrowserNotification(error));
  };

  const verifyOrResetToken = token => {
    fetch(`${window.API_URL}/api/v1/user/update`, {
      method: "POST",
      body: JSON.stringify({
        token: token
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else if (response.status === 403) {
          throw new Error(window.browser.i18n.getMessage("systemForbidden"));
        } else if (response.status === 404) {
          setToken();
        } else {
          throwNewNetworkResponseUnsuccessfulError("xvZhzmSdKE");
        }
      })
      .catch(error => createBrowserNotification(error));
  };

  const handleOnRuntimeInstalledEvent = details => {
    window.browser.storage.sync.get().then(storage => {
      if (typeof storage.token === "undefined") {
        setToken();
      } else {
        verifyOrResetToken(storage.token);
      }
    });
  };

  const handleOnTabsUpdatedEvent = (tabId, changeInfo, tab) => {
    // https://gist.github.com/dperini/729294
    const pattern = new RegExp(
      "^" +
        "(?:(?:(?:https?|ftp):)?\\/\\/)" +
        "(?:\\S+(?::\\S*)?@)?" +
        "(?:" +
        "(?!(?:10|127)(?:\\.\\d{1,3}){3})" +
        "(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})" +
        "(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})" +
        "(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])" +
        "(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}" +
        "(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))" +
        "|" +
        "(?:" +
        "(?:" +
        "[a-z0-9\\u00a1-\\uffff]" +
        "[a-z0-9\\u00a1-\\uffff_-]{0,62}" +
        ")?" +
        "[a-z0-9\\u00a1-\\uffff]\\." +
        ")+" +
        "(?:[a-z\\u00a1-\\uffff]{2,}\\.?)" +
        ")" +
        "(?::\\d{2,5})?" +
        "(?:[/?#]\\S*)?" +
        "$",
      "i"
    );

    const isChangeInfoStatusComplete =
      changeInfo.hasOwnProperty("status") &&
      // typeof changeInfo.status !== "undefined" &&
      changeInfo.status === "complete";

    const isTabStatusComplete =
      tab.hasOwnProperty("status") &&
      // typeof tab.status !== "undefined" &&
      tab.status === "complete";

    const enableBrowserAction =
      (isChangeInfoStatusComplete || isTabStatusComplete) &&
      tab.url.match(pattern);

    enableBrowserAction
      ? window.browser.browserAction.enable(tabId)
      : window.browser.browserAction.disable(tabId);
  };

  window.browser.runtime.onInstalled.addListener(handleOnRuntimeInstalledEvent);
  window.browser.tabs.onUpdated.addListener(handleOnTabsUpdatedEvent);
})(window);
