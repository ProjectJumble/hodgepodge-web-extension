import React from "react";

import { BACKGROUND_COLORS } from "../colors";
import { TITLE_MESSAGES } from "../l10n";

import { shadeColor } from "../../../helpers";

export default ({ popup }) => {
  const domain = popup.fakebox.domain;
  const title = popup.fakebox.title;
  const color = BACKGROUND_COLORS[domain.category].color;

  return (
    <div className="animated fadeIn">
      <div
        className="card border-0"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          cursor: "pointer"
        }}
        onClick={() => popup.handleStateUpdate({ tab: 1 })}
      >
        <div className="card-body text-center">
          <p
            className="card-text"
            style={{
              color: shadeColor(color.bottomColor, 0.75)
            }}
          >
            <span className="float-left __font-weight-bold">〈</span>
            {window.browser.i18n.getMessage("popupDomain")}
          </p>
        </div>
      </div>

      <div className="card border-0 bg-transparent">
        <div className="card-body text-center">
          <small
            style={{
              color: shadeColor(color.bottomColor, 0.75)
            }}
          >
            {window.browser.i18n.getMessage("popupTitle")}:
          </small>
          <p
            className="card-text"
            style={{
              color: shadeColor(color.bottomColor, 0.75)
            }}
          >
            {window.browser.i18n.getMessage(
              TITLE_MESSAGES[title.decision].description,
              `${(title.score * 100).toFixed()}`
            )}
          </p>
        </div>
      </div>
    </div>
  );
};
