import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import store from "./components/stores/store";
import MenuContextProvider from "./components/context/menudetails";

ReactDOM.render(
  <MenuContextProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </MenuContextProvider>,
  document.getElementById("root")
);
