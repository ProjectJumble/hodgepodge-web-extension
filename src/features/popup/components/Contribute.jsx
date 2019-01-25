import React from "react";

import { shadeColor } from "../../../helpers";

export default ({ url, color }) => {
  return (
    <div className="animated fadeIn">
      <div className="text-center">
        <a
          style={{
            color: shadeColor(color.bottomColor, 0.5)
          }}
          href=""
          onClick={e => {
            e.preventDefault();

            window.browser.tabs.create({
              url: window.browser.extension.getURL(
                `index.html?input&url=${window.btoa(url)}`
              )
            });
          }}
        >
          {window.browser.i18n.getMessage("popupScoreContribute")}
        </a>
      </div>
    </div>
  );
};
