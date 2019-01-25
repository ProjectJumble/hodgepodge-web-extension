import React from "react";
import Badge from "./Badge";

import { BACKGROUND_COLORS } from "../colors";
import { DOMAIN_MESSAGES } from "../l10n";

import { shadeColor } from "../../../helpers";

export default ({ popup }) => {
  const domain = popup.fakebox.domain;
  const color = BACKGROUND_COLORS[domain.category].color;
  const message = DOMAIN_MESSAGES[domain.category];

  return (
    <div className="animated fadeIn">
      <div className="card border-0 bg-transparent">
        <Badge color={color} />

        <div className="card-body text-center">
          <small
            style={{
              color: shadeColor(color.bottomColor, 0.75)
            }}
          >
            {window.browser.i18n.getMessage("popupDomain")}:
          </small>
          <h4
            className="card-title"
            style={{
              color: shadeColor(color.bottomColor, 0.75)
            }}
          >
            {window.browser.i18n.getMessage(message.heading)}
          </h4>
        </div>
      </div>

      <div
        className="card border-0"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          cursor: "pointer"
        }}
        onClick={() => popup.handleStateUpdate({ tab: 2 })}
      >
        <div className="card-body text-center">
          <p
            className="card-text"
            style={{
              color: shadeColor(color.bottomColor, 0.75)
            }}
          >
            {window.browser.i18n.getMessage("popupTitle")}
            <span className="float-right __font-weight-bold">〉</span>
          </p>
        </div>
      </div>
    </div>
  );
};
