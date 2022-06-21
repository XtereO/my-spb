import React, { useState, useEffect, useCallback } from "react";
import bridge from "@vkontakte/vk-bridge";
import {
  View,
  AdaptivityProvider,
  AppRoot,
  ConfigProvider,
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { getActivePanel, getScheme, getTheme, mainActions } from "./bll/main";
import { ThemeContext, themes } from "./utils";
import { PANEL_ROUTES, STORAGE_KEYS } from "./consts";
import {
  Welcome,
  Fact,
  Home,
  BridgeConstruction,
  TurnOffWater,
  BeautifulPlace,
  FreeWiFi,
  Offline,
  Map,
} from "./panels";
import { getCenter } from "./bll/map";

const App = () => {
  const dispatch = useDispatch();
  const theme = useSelector(getTheme);
  const activePanel = useSelector(getActivePanel);
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

  const handleHashChange = useCallback(() => {
    if (!window.location.hash.slice(1) && activePanel !== PANEL_ROUTES.MAP) {
      dispatch(mainActions.setActivePanel(PANEL_ROUTES.HOME));
    }
  }, [activePanel]);
  useEffect(() => {
    window.addEventListener("hashchange", handleHashChange);
  }, []);
  const [panelBeforeMap, setPanelBeforeMap] = useState(activePanel);
  useEffect(() => {
    window.location.assign(
      "#" + (activePanel === PANEL_ROUTES.HOME ? "" : activePanel)
    );
    if (activePanel !== PANEL_ROUTES.MAP) {
      setPanelBeforeMap(activePanel);
    }
  }, [activePanel]);
  const centerMap = useSelector(getCenter);
  useEffect(() => {
    if (centerMap) {
      dispatch(mainActions.setActivePanel(PANEL_ROUTES.MAP));
    } else {
      dispatch(mainActions.setActivePanel(panelBeforeMap ?? PANEL_ROUTES.HOME));
    }
  }, [centerMap]);



  return (
    <ThemeContext.Provider value={themes[theme]}>
      <ConfigProvider appearance={theme}>
        <AdaptivityProvider>
          <AppRoot>
            <View activePanel={activePanel}>
              <Welcome id={PANEL_ROUTES.WELCOME} />
              <Home id={PANEL_ROUTES.HOME}  />
              <Fact id={PANEL_ROUTES.FACT} />
              <BridgeConstruction id={PANEL_ROUTES.BRIDGE_CONSTRUCTION} />
              <TurnOffWater id={PANEL_ROUTES.TURN_OFF_WATER} />
              <BeautifulPlace id={PANEL_ROUTES.BEAUTIFUL_PLACE} />
              <FreeWiFi id={PANEL_ROUTES.FREE_WIFI} />
              <Offline id={PANEL_ROUTES.OFFLINE} />
              <Map id={PANEL_ROUTES.MAP} />
            </View>
          </AppRoot>
        </AdaptivityProvider>
      </ConfigProvider>
    </ThemeContext.Provider>
  );
};

export default App;
