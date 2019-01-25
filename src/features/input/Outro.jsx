import React from "react";
import Footer from "./components/Footer";
import Icon from "../../components/Icon";

export default () => {
  return (
    <div className="animated fadeIn">
      <Icon />

      <div className="my-3 text-center">
        <h4 className="mb-3">
          {window.browser.i18n.getMessage("inputOutroHeading")}
        </h4>
        <p>{window.browser.i18n.getMessage("inputOutroDescription")}</p>
      </div>

      <form className="mb-3">
        <button
          type="button"
          className="w-100 btn btn-primary text-white"
          onClick={() => {
            window.browser.tabs
              .query({ active: true, lastFocusedWindow: true })
              .then(tabs => window.browser.tabs.remove(tabs[0].id));
          }}
        >
          {window.browser.i18n.getMessage("inputButtonClose")}
        </button>
      </form>

      <Footer />
    </div>
  );
};
