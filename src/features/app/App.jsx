import React from "react";
import PopupWrapper from "../popup/PopupWrapper";
import WizardWrapper from "../wizard/WizardWrapper";

export default ({ app }) => {
  if (new URLSearchParams(window.location.search).has("input")) {
    return <WizardWrapper app={app} />;
  } else {
    return <PopupWrapper app={app} />;
  }
};
