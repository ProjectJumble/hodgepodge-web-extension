import React from "react";
import Contribute from "./components/Contribute";
import DomainScore from "./components/DomainScore";
import Error from "./components/Error";
import Load from "./components/Load";
import TitleScore from "./components/TitleScore";

import { BACKGROUND_COLORS } from "./colors";

class Popup extends React.Component {
  render() {
    const { popup } = this.props;

    if (popup.isError) {
      return <Error />;
    }

    if (!!!popup.isFetched || popup.isFetching) {
      return <Load />;
    }

    const domain = popup.fakebox.domain;
    const color = BACKGROUND_COLORS[domain.category].color;

    return (
      <div
        style={{
          backgroundImage: `linear-gradient(150deg, ${color.topColor}, ${
            color.bottomColor
          })`
        }}
      >
        <div className="card-deck p-3">
          {popup.tab === 1 && <DomainScore popup={popup} />}

          {popup.tab === 2 && <TitleScore popup={popup} />}

          {!!!popup.isLocalhost && !!!popup.inConflict && (
            <Contribute url={popup.url} color={color} />
          )}
        </div>
      </div>
    );
  }
}

export default Popup;
