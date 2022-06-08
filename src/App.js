import React, { useState, useEffect } from "react";
import bridge from "@vkontakte/vk-bridge";
import { View, AdaptivityProvider, AppRoot } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { getActivePanel, getTheme, mainActions } from "./bll/main";
import { ThemeContext, themes } from "./utils";
import { PANEL_ROUTES, STORAGE_KEYS } from "./consts";
import { Welcome, Fact, Home, BridgeConstruction } from "./panels";

const App = () => {
  const dispatch = useDispatch();
  const theme = useSelector(getTheme);
  const activePanel = useSelector(getActivePanel);
  //@ts-ignore
  useEffect(async () => {
    async function fetchData() {
      const res = await bridge.send("VKWebAppStorageGet", {
        keys: Object.values(STORAGE_KEYS),
      });
      let data = res.keys;
      data.forEach((s) => {
        let value = s.value ? JSON.parse(s.value) : null;
        switch (s.key) {
          case STORAGE_KEYS.IS_CHECK_WELCOME:
            if (!value) {
              dispatch(mainActions.setActivePanel(PANEL_ROUTES.WELCOME));
            }
            break;
          default:
            break;
        }
      });
    }
    fetchData();
  }, []);

  useEffect(() => {
    window.addEventListener("hashchange", (e) => {
      if (!window.location.hash.slice(1)) {
        dispatch(mainActions.setActivePanel(PANEL_ROUTES.HOME));
      }
    });
  }, []);
  useEffect(() => {
    window.location.assign(
      "#" + (activePanel===PANEL_ROUTES.HOME ? "" : activePanel)
    );
  }, [activePanel]);

  return (
    <ThemeContext.Provider value={themes[theme]}>
      <AdaptivityProvider>
        <AppRoot>
          <View activePanel={activePanel}>
            <Welcome id={PANEL_ROUTES.WELCOME} />
            <Home id={PANEL_ROUTES.HOME} />
            <Fact id={PANEL_ROUTES.FACT} />
            <BridgeConstruction id={PANEL_ROUTES.BRIDGE_CONSTRUCTION} />
          </View>
        </AppRoot>
      </AdaptivityProvider>
    </ThemeContext.Provider>
  );
};

export default App;
