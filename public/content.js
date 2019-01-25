"use strict";

(window => {
  window.browser.runtime.onMessage.addListener(
    (message, sender, sendResponse) => {
      if (message.task && message.task == "getReadabilityTextContent") {
        // TODO: Consider using Mercury for parsing web content.
        // https://mercury.postlight.com/web-parser/

        const readability = new Readability(document.cloneNode(true)).parse();

        sendResponse(readability.textContent);
      }

      return;
    }
  );
})(window);
