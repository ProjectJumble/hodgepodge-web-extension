import React from "react";
import Intro from "../input/Intro";
import Review from "../input/Review";

export default ({ app, wizard, input }) => {
  if (wizard.step <= 1) {
    return <Intro /*app={app}*/ wizard={wizard} /*input={input}*/ />;
  } else if (wizard.step >= 2) {
    return <Review wizard={wizard} input={input} />;
  }
};
