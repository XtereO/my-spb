import { Group, Panel } from "@vkontakte/vkui";
import { memo, useContext } from "react";
import { WiFiOutlineIcon } from "../../icons";
import { PANEL_ROUTES } from "../../consts";
import { ThemeContext } from "../../utils";

export const Offline = memo(() => {
  const theme = useContext(ThemeContext);
  return (
    <Panel id={PANEL_ROUTES.OFFLINE}>
      <Group>
        <div style={{ height: window.innerHeight }} className="center-y">
          <div className="center-x">
            <WiFiOutlineIcon />
          </div>
          <div
            id={`${PANEL_ROUTES.OFFLINE}-title`}
            className="center-x"
            style={{ fontSize: 24, color: theme.heading, marginTop: 20 }}
          >
            Нет подключения
          </div>
          <div
            className="center-x"
            id={`${PANEL_ROUTES.OFFLINE}-advice`}
            style={{ color: theme.text, fontSize: 15, marginTop: 12 }}
          >
            Мы потеряли связь с сервером. Проверьте
          </div>
          <div className="center-x" style={{ color: theme.text, fontSize: 16 }}>
            состояние Вашего интернет-соединения.
          </div>
        </div>
      </Group>
    </Panel>
  );
});
