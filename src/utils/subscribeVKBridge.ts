import bridge from "@vkontakte/vk-bridge";
import { mainActions } from "../bll/main";
import { store } from "../bll/store";

const dispatch = store.dispatch;
export const subscribeVKBridge = async () => {
  bridge.subscribe(({ detail }) => {
    const { type, data } = detail;
    if (type === "VKWebAppUpdateConfig") {
      const schemeAttribute = document.createAttribute("scheme");
      //@ts-ignore
      schemeAttribute.value = data.scheme ? data.scheme : "client_light";
      const title = new RegExp("light");

      //@ts-ignore
      if (data.scheme.match(title)) {
        dispatch(mainActions.setTheme("light"));
        //@ts-ignore
        bridge.send("VKWebAppSetViewSettings", {
          status_bar_style: "dark",
          action_bar_color: "#F5F5F5",
        });
      } else {
        dispatch(mainActions.setTheme("dark"));
        bridge.send("VKWebAppSetViewSettings", {
          status_bar_style: "light",
          action_bar_color: "#343434",
        });
      }

      //@ts-ignore
      if (
        window.location.href.match(new RegExp("vk_platform=mobile_web")) ||
        data.scheme.match(new RegExp("vkcom"))
      ) {
        dispatch(mainActions.setPlatform("pc"));
      } else {
        dispatch(mainActions.setPlatform("mobile"));
      }

      document.body.attributes.setNamedItem(schemeAttribute);
    }
  });
};
