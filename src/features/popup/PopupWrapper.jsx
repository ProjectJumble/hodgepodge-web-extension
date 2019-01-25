import React from "react";
import PopupProvider, { PopupContext } from "./PopupProvider";
import Popup from "./Popup";

export default ({ app }) => {
  return (
    <div className="popup-wrapper">
      <div className="w-100 h-100 d-flex justify-content-center align-items-center">
        <div className="popup">
          <PopupProvider>
            <PopupContext.Consumer>
              {popup => <Popup app={app} popup={popup} />}
            </PopupContext.Consumer>
          </PopupProvider>
        </div>
      </div>
    </div>
  );
};
