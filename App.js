import React, { Component } from "react";
import { Provider } from "react-redux";
import Navigator from "./src/navigators";
import store from "./src/stores";
import { ThemeProvider } from "styled-components";
import theme from "./src/constants/theme";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Navigator />
        </ThemeProvider>
      </Provider>
    );
  }
}
