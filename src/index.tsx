import React from "react";
import ReactDOM from "react-dom";
import bridge from "@vkontakte/vk-bridge";
import App from "./App";
import { subscribeVKBridge, toOffline, toOnline } from "./utils";
import { Provider } from "react-redux";
import { store } from "./bll/store";

// Init VK  Mini App
subscribeVKBridge();
bridge.send("VKWebAppInit");

//Check internet connection
window.addEventListener("offline", toOffline);
window.addEventListener("online", toOnline);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
if (process.env.NODE_ENV === "development") {
  import("./eruda").then(({ default: eruda }) => {}); //runtime download
}
