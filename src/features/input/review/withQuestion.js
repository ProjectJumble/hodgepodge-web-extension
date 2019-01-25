import React from "react";

const withQuestion = Component => {
  class Question extends React.Component {
    render() {
      return (
        <div className="card my-2 border-0 bg-light">
          <div className="card-body">
            <Component {...this.props} />
          </div>
        </div>
      );
    }
  }

  return Question;
};

export default withQuestion;
