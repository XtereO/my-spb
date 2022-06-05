import React, { useState, useEffect } from "react";
import bridge from "@vkontakte/vk-bridge";
import {
  View,
  AdaptivityProvider,
  AppRoot,
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import "./App.css"

import Home from "./panels/Home";
import Persik from "./panels/Persik";
import { useDispatch, useSelector } from "react-redux";
import { getTheme, mainActions } from "./bll/main";
import { ThemeContext, themes } from "./utils";
import { PANEL_ROUTES, STORAGE_KEYS } from "./consts";

const App = () => {
  const [activePanel, setActivePanel] = useState("home");
  const [fetchedUser, setUser] = useState(null);
  const dispatch = useDispatch()
  const theme = useSelector(getTheme);

  const go = (e) => {
    setActivePanel(e.currentTarget.dataset.to);
  };

  //@ts-ignore
  useEffect(async () => {
	async function fetchData() {
		const res = (await bridge.send('VKWebAppStorageGet', { keys: Object.values(STORAGE_KEYS) }))
		let data = res.keys
		data.forEach((s) => {
			let value = s.value ? JSON.parse(s.value) : null
			switch (s.key) {
				case STORAGE_KEYS.IS_CHECK_WELCOME:
					if (!value) {
						dispatch(mainActions.setActivePanel(PANEL_ROUTES.WELCOME))
					} 
					break
				default:
					break;
			}
		})
	}
	fetchData()
}, []);

  return (
    <AdaptivityProvider>
      <AppRoot>
        <View activePanel={activePanel}>
          <ThemeContext.Provider value={themes[theme]}>
            <Home id="home" fetchedUser={fetchedUser} go={go} />
            <Persik id="persik" go={go} />
          </ThemeContext.Provider>
        </View>
      </AppRoot>
    </AdaptivityProvider>
  );
};

export default App;
