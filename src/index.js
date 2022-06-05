import React from "react";
import ReactDOM from "react-dom";
import bridge from "@vkontakte/vk-bridge";
import App from "./App";
import { subscribeVKBridge } from "./utils";
import { Provider } from "react-redux";
import { store } from "./bll/store";

// Init VK  Mini App
bridge.send("VKWebAppInit");
subscribeVKBridge();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
if (process.env.NODE_ENV === "development") {
  import("./eruda").then(({ default: eruda }) => {}); //runtime download
}
