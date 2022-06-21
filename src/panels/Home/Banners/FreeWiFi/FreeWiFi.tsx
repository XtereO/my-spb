import { Group } from "@vkontakte/vkui";
import { useEffect } from "react";
import { memo } from "react";
import { useDispatch } from "react-redux";
import { freeWifiActions } from "../../../../bll/free-wifi";
import {
  CardHeader,
  FreeWiFiItem,
  RoundedCard,
  ThemedButton,
} from "../../../../bricks";
import { WiFiIcon } from "../../../../icons";
import { FreeWifi } from "../../../../types";

type Props = {
  data?: FreeWifi[];
  onClick: () => void;
};

export const FreeWiFi = memo<Props>(({ data, onClick }) => {
  const dispatch = useDispatch();
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
          <ThemedButton onClick={onClick} id="free-wifi-btn">
            Посмотреть все места
          </ThemedButton>
        </div>
      </Group>
    </RoundedCard>
  );
});
