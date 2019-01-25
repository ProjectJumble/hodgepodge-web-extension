import React from "react";
import Loader from "../../../components/Loader";

class Load extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isNetworkResponseTimeout: false
    };
  }

  componentDidMount() {
    this.timeout = setTimeout(this.showNetworkResponseTimeout, 10000);
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  showNetworkResponseTimeout = () => {
    this.setState({ isNetworkResponseTimeout: true });
  };

  render() {
    const { isNetworkResponseTimeout } = this.state;

    return (
      <div className="my-5">
        <div className="animated fadeIn">
          <div className="m-3 text-center d-block">
            <Loader />
          </div>
        </div>

        {isNetworkResponseTimeout && (
          <div className="animated fadeIn">
            <div className="m-3 text-center d-block">
              <span className="text-primary">
                {window.browser.i18n.getMessage("systemNetworkResponseTimeout")}
              </span>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Load;
