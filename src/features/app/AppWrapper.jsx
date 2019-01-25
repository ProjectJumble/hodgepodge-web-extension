import React from "react";
import AppProvider, { AppContext } from "./AppProvider";
import App from "./App";

export default () => {
  return (
    <AppProvider>
      <AppContext.Consumer>{app => <App app={app} />}</AppContext.Consumer>
    </AppProvider>
  );
};
