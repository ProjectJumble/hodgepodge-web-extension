import React from "react";
import Footer from "./components/Footer";
import Icon from "../../components/Icon";

export default ({ /*app,*/ wizard /*, input*/ }) => {
  return (
    <div className="animated fadeIn">
      <Icon />

      <div className="my-3 text-center">
        <h4 className="mb-3">
          {window.browser.i18n.getMessage("inputIntroHeading")}
        </h4>
        <p>{window.browser.i18n.getMessage("inputIntroDescription")}</p>
      </div>

      <form className="mb-3">
        <button
          type="button"
          className="w-100 btn btn-primary text-white"
          onClick={() => wizard.handleStepUpdate(++wizard.step)}
        >
          {window.browser.i18n.getMessage("inputButtonNext")}
        </button>
      </form>

      <Footer />
    </div>
  );
};
