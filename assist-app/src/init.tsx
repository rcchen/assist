import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { assistApp } from "./reducers";
import { App } from "./views";

const store = createStore(
  assistApp,
  applyMiddleware(
    thunkMiddleware
  )
);

document.addEventListener("DOMContentLoaded", (e) => {
  const container = document.createElement("div");
  container.id = "app";
  document.body.appendChild(container);
  render(
    <Provider store={store}>
      <App />
    </Provider>, container);
});
