import { FixedLayout, Group, Panel } from "@vkontakte/vkui";
import { useCallback, useState } from "react";
import { MySnackbar } from "../../bricks";
import { toOnline } from "../../utils";
import { memo } from "react";
import { WiFiOutlineIcon } from "../../icons";
import { TextInterRegular, TextInterSemibold } from "../../bricks";
import { PANEL_ROUTES } from "../../consts";

export const Offline = memo(() => {
  const [snackbar, setSnackbar] = useState<any>(null);
  const handleClick = useCallback(() => {
    if (navigator.onLine) {
      toOnline();
    } else {
      setSnackbar(
        <MySnackbar
          text={"Не удалось подключиться"}
          resultOperation={false}
          closeHandler={() => setSnackbar(null)}
        />
      );
    }
  }, []);
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
            style={{ fontSize: 20 }}
          >
            <TextInterSemibold>Нет подключения</TextInterSemibold>
          </div>
          <div
            className="center-x"
            id={`${PANEL_ROUTES.OFFLINE}-advice`}
            style={{ color: "#898989", fontSize: 16, marginTop: 8 }}
          >
            <TextInterRegular>
              Проверьте соединение и повторите
            </TextInterRegular>
          </div>
          <div className="center-x" style={{ color: "#898989", fontSize: 16 }}>
            <TextInterRegular>попытку</TextInterRegular>
          </div>
          <div style={{ marginTop: 24 }} className="center-x">
            <button
              id={`${PANEL_ROUTES.OFFLINE}-btn`}
              style={{
                borderRadius: 10,
                color: "#4475F1",
                background: "rgba(68, 117, 241, 0.1)",
                height: 36,
                width: 176,
                border: "none",
                fontSize: 15,
                alignItems: "center",
              }}
              className="center-y"
              onClick={handleClick}
            >
              Повторить попытку
            </button>
          </div>
        </div>
        <FixedLayout id={`${PANEL_ROUTES.OFFLINE}-snacbar`}>
          {snackbar}
        </FixedLayout>
      </Group>
    </Panel>
  );
});
