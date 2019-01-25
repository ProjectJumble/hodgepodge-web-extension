import React from "react";

export const WizardContext = React.createContext();

class WizardProvider extends React.Component {
  constructor(props) {
    super(props);

    this.handleStepUpdate = step => {
      this.setState({ step: step });
    };

    this.state = {
      handleStepUpdate: this.handleStepUpdate,

      step: 1
    };
  }

  render() {
    return (
      <WizardContext.Provider value={this.state}>
        {this.props.children}
      </WizardContext.Provider>
    );
  }
}

export default WizardProvider;
