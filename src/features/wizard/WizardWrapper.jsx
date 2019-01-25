import React from "react";
import InputProvider, { InputContext } from "../input/InputProvider";
import WizardProvider, { WizardContext } from "./WizardProvider";
import Wizard from "./Wizard";

export default ({ app }) => {
  return (
    <div className="wizard-wrapper my-5">
      <div className="w-100 h-100 d-flex justify-content-center align-items-center">
        <div className="card shadow-lg border-0">
          <div className="card-body">
            <div className="wizard">
              <WizardProvider>
                <InputProvider>
                  <WizardContext.Consumer>
                    {wizard => (
                      <InputContext.Consumer>
                        {input => (
                          <Wizard app={app} wizard={wizard} input={input} />
                        )}
                      </InputContext.Consumer>
                    )}
                  </WizardContext.Consumer>
                </InputProvider>
              </WizardProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
