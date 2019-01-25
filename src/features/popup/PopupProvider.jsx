import React from "react";
import request from "./request";

export const PopupContext = React.createContext();

class PopupProvider extends React.Component {
  constructor(props) {
    super(props);

    this.handleStateUpdate = state => {
      this.setState(state);
    };

    this.state = {
      handleStateUpdate: this.handleStateUpdate,

      tab: 1,

      inConflict: false,
      isError: false,
      isFetched: false,
      isFetching: false,
      isLocalhost: false,

      url: undefined,

      // Using nested state properties is generally not recommended.
      fakebox: {
        success: undefined,
        title: {
          decision: undefined,
          score: undefined
        },
        content: {
          decision: undefined,
          score: undefined
        },
        domain: {
          category: undefined
        }
      }
    };
  }

  componentDidMount() {
    request(this.state);
  }

  render() {
    return (
      <PopupContext.Provider value={this.state}>
        {this.props.children}
      </PopupContext.Provider>
    );
  }
}

export default PopupProvider;
