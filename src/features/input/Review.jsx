import React from "react";
import Footer from "./components/Footer";
import Icon from "../../components/Icon";
import IdeologicalConsistency from "./review/IdeologicalConsistency";
import Outro from "./Outro";
import SourceRating from "./review/SourceRating";

export default ({ /*app, wizard,*/ input }) => {
  if (input.inConflict || input.isFetched) return <Outro />;

  return (
    <div className="animated fadeIn">
      <Icon />

      <form className="my-3" onSubmit={input.handleSubmit}>
        <fieldset disabled={input.isFetching}>
          <IdeologicalConsistency input={input} />

          <SourceRating input={input} />

          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input
                id="legalConsent"
                name="legalConsent"
                type="checkbox"
                className="custom-control-input"
                value={input.legalConsent}
                onChange={e =>
                  input.handleStateUpdate({
                    [e.target.name]: e.target.checked
                  })
                }
              />
              <label htmlFor="legalConsent" className="custom-control-label">
                {window.browser.i18n.getMessage("inputCheckBoxLegalConsent")}
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-100 btn btn-primary text-light"
            disabled={!!!input.legalConsent}
          >
            {!!!input.isFetching &&
              window.browser.i18n.getMessage("inputButtonSubmit")}
            {input.isFetching &&
              window.browser.i18n.getMessage("inputButtonSubmitting")}
          </button>
        </fieldset>
      </form>

      <Footer />
    </div>
  );
};
