import React from "react";
import Outro from "../Outro";
import withQuestion from "./withQuestion";

const Question = ({ input }) => {
  if (input.inConflict || input.isFetched) return <Outro />;

  return (
    <React.Fragment>
      <label htmlFor="reviewSourceRating">
        {window.browser.i18n.getMessage("inputReviewQuestionSourceRating")}
      </label>
      <select
        id="reviewSourceRating"
        name="reviewSourceRating"
        className="form-control"
        value={input.reviewSourceRating}
        onChange={e =>
          input.handleStateUpdate({ [e.target.name]: e.target.value })
        }
      >
        <option value="1">
          {window.browser.i18n.getMessage(
            "inputReviewAnswerSourceRatingNeitherAgreeNorDisagree"
          )}
        </option>
        <option value="2">
          {window.browser.i18n.getMessage(
            "inputReviewAnswerSourceRatingStronglyDisagree"
          )}
        </option>
        <option value="3">
          {window.browser.i18n.getMessage(
            "inputReviewAnswerSourceRatingModeratelyDisagree"
          )}
        </option>
        <option value="4">
          {window.browser.i18n.getMessage(
            "inputReviewAnswerSourceRatingSlightlyDisagree"
          )}
        </option>
        <option value="5">
          {window.browser.i18n.getMessage(
            "inputReviewAnswerSourceRatingSlightlyAgree"
          )}
        </option>
        <option value="6">
          {window.browser.i18n.getMessage(
            "inputReviewAnswerSourceRatingModeratelyAgree"
          )}
        </option>
        <option value="7">
          {window.browser.i18n.getMessage(
            "inputReviewAnswerSourceRatingStronglyAgree"
          )}
        </option>
        <option value="8">
          {window.browser.i18n.getMessage(
            "inputReviewAnswerSourceRatingSatirical"
          )}
        </option>
      </select>
    </React.Fragment>
  );
};

export default withQuestion(Question);
