import { Group } from "@vkontakte/vkui";
import { useCallback } from "react";
import { memo } from "react";
import { useDispatch } from "react-redux";
import { mainActions } from "../../../../bll/main";
import {
  CardHeader,
  FreeWiFiItem,
  RoundedCard,
  ThemedButton,
} from "../../../../bricks";
import { PANEL_ROUTES } from "../../../../consts";
import { WiFiIcon } from "../../../../icons";

export const FreeWiFi = memo(() => {
  const dispatch = useDispatch();
  const handleClick = useCallback(() => {
    dispatch(mainActions.setActivePanel(PANEL_ROUTES.FREE_WIFI));
  }, []);
  return (
    <RoundedCard id="free-wifi">
      <CardHeader before={<WiFiIcon />} id="free-wifi-header">
        Бесплатный Wi-Fi
      </CardHeader>
      <Group style={{ paddingLeft: 16, paddingRight: 16, paddingBottom: 12 }}>
        <div id="free-wifi-items">
          <FreeWiFiItem id={1} isTurnedOn={false} title={"New spot 1"} />
          <FreeWiFiItem id={2} isTurnedOn={true} title={"New spot 2"} />
        </div>
        <div style={{ marginTop: 10 }}>
          <ThemedButton onClick={handleClick} id="free-wifi-btn">
            Посмотреть все места
          </ThemedButton>
        </div>
      </Group>
    </RoundedCard>
  );
});
