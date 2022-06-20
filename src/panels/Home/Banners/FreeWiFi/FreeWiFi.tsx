import { Group } from "@vkontakte/vkui";
import { useCallback, useEffect } from "react";
import { memo } from "react";
import { useDispatch } from "react-redux";
import {
  freeWifiActions,
  useGetFreeWifiQuery,
} from "../../../../bll/free-wifi";
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
  const { data } = useGetFreeWifiQuery({ page: 1 });
  useEffect(() => {
    if (data) {
      dispatch(freeWifiActions.setWifiSpots(data));
      dispatch(freeWifiActions.setPage(1));
    }
  }, [data]);
  return (
    <RoundedCard id="free-wifi">
      <CardHeader before={<WiFiIcon />} id="free-wifi-header">
        Бесплатный Wi-Fi
      </CardHeader>
      <Group style={{ paddingLeft: 16, paddingRight: 16, paddingBottom: 12 }}>
        <div id="free-wifi-items">
          {data?.slice(0, 3).map((d) => (
            <FreeWiFiItem key={d.number} {...d} id={d.number} />
          ))}
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
