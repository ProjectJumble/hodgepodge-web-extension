import React from "react";

export default () => {
  return (
    <div className="text-center">
      <a href="https://www.jumble.news/terms-of-use.html">
        {window.browser.i18n.getMessage("legalTermsOfUse")}
      </a>
      &nbsp;&middot;&nbsp;
      <a href="https://www.jumble.news/privacy-policy.html">
        {window.browser.i18n.getMessage("legalPrivacyPolicy")}
      </a>
    </div>
  );
};
