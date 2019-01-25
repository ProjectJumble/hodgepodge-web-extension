import React from "react";
import request from "./request";

export const InputContext = React.createContext();

class InputProvider extends React.Component {
  constructor(props) {
    super(props);

    this.handleStateUpdate = state => {
      this.setState(state);
    };

    this.handleSubmit = e => {
      e.preventDefault();

      request(this.state);
    };

    this.state = {
      handleStateUpdate: this.handleStateUpdate,
      handleSubmit: this.handleSubmit,

      inConflict: false,
      isFetched: false,
      isFetching: false,

      legalConsent: false,

      reviewIdeologicalConsistency: 1,
      reviewSourceRating: 1
    };
  }

  render() {
    return (
      <InputContext.Provider value={this.state}>
        {this.props.children}
      </InputContext.Provider>
    );
  }
}

export default InputProvider;
