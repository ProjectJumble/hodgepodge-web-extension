import React from "react";
import withQuestion from "./withQuestion";

const Question = ({ input }) => {
  return (
    <React.Fragment>
      <label htmlFor="reviewIdeologicalConsistency">
        {window.browser.i18n.getMessage(
          "inputReviewQuestionIdeologicalConsistency"
        )}
      </label>
      <select
        id="reviewIdeologicalConsistency"
        name="reviewIdeologicalConsistency"
        className="form-control"
        value={input.reviewIdeologicalConsistency}
        onChange={e =>
          input.handleStateUpdate({ [e.target.name]: e.target.value })
        }
      >
        <option value="1">
          {window.browser.i18n.getMessage(
            "inputReviewAnswerIdeologicalConsistencyWithheld"
          )}
        </option>
        <option value="2">
          {window.browser.i18n.getMessage(
            "inputReviewAnswerIdeologicalConsistencyConsistentlyConservative"
          )}
        </option>
        <option value="3">
          {window.browser.i18n.getMessage(
            "inputReviewAnswerIdeologicalConsistencyMostlyConservative"
          )}
        </option>
        <option value="4">
          {window.browser.i18n.getMessage(
            "inputReviewAnswerIdeologicalConsistencyMixed"
          )}
        </option>
        <option value="5">
          {window.browser.i18n.getMessage(
            "inputReviewAnswerIdeologicalConsistencyMostlyLiberal"
          )}
        </option>
        <option value="6">
          {window.browser.i18n.getMessage(
            "inputReviewAnswerIdeologicalConsistencyConsistentlyLiberal"
          )}
        </option>
      </select>
    </React.Fragment>
  );
};

export default withQuestion(Question);
