import React, { useEffect, useCallback, memo } from "react";
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
import { getActivePanel, getTheme, mainActions } from "./bll/main";
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

  useEffect(() => {
    const hash = [...new Set(window.location.hash.slice(1).split("/"))]
      .filter((h) => h !== PANEL_ROUTES.WELCOME)
      .join("/");
    window.location.assign(
      hash && !hash.includes(activePanel)
        ? `#${hash}/${activePanel}`
        : hash
        ? `#${hash}`
        : `#${activePanel}`
    );
  }, [activePanel]);
  const handleHashChange = useCallback(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) {
      dispatch(mainActions.setActivePanel(PANEL_ROUTES.HOME));
    } else {
      dispatch(
        mainActions.setActivePanel(hash.split("/")[hash.split("/").length - 1])
      );
    }
  }, []);
  useEffect(() => {
    window.addEventListener("hashchange", handleHashChange);
  }, []);

  const centerMap = useSelector(getCenter);
  useEffect(() => {
    if (centerMap) {
      dispatch(mainActions.setActivePanel(PANEL_ROUTES.MAP));
    }
  }, [centerMap]);

  return (
    <ThemeContext.Provider value={themes[theme]}>
      <ConfigProvider appearance={theme}>
        <AdaptivityProvider>
          <AppRoot>
            <LoadFonts />
            <View activePanel={activePanel}>
              <Welcome id={PANEL_ROUTES.WELCOME} />
              <Home id={PANEL_ROUTES.HOME} />
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

const LoadFonts = memo(() => {
  return (
    <div style={{ opacity: 0, width: 0, height: 0 }}>
      <div className="text__NewYorkLarge-Bold">1</div>
      <div className="text__NewYorkMedium-Medium">2</div>
      <div className="text__Inter-Semibold">3</div>
      <div className="text__Inter-Regular">4</div>
      <div className="text__SF-Pro-Rounded-Medium">5</div>
      <div className="text__SF-Pro-Rounded-Regular">6</div>
      <div className="text__SF-Pro-Text-Medium">7</div>
      <div className="text__SF-Pro-Rounded-Heavy">8</div>
      <div className="text__SF-Pro-Rounded-Semibold">9</div>
      <div className="text__SF-Pro-Rounded-Bold">10</div>
      <div className="text__SF-Pro-Rounded-Light">11</div>
      <div className="text__Inter-Bold">12</div>
      <div className="text__SF-Pro-Text-Regular">13</div>
      <div className="text__SF-Pro-Text-Semibold">14</div>
      <div className="text__Inter-Medium">15</div>
    </div>
  );
});
