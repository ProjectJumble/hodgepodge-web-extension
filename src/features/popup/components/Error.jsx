import React from "react";

export default () => {
  return (
    <div className="animated fadeIn">
      <div className="card border-0">
        <div className="card-body text-center">
          <p className="card-text text-primary">
            {window.browser.i18n.getMessage("systemInternalError")}
          </p>
        </div>
      </div>
    </div>
  );
};
