import { Group, Panel } from "@vkontakte/vkui";
import { memo } from "react";
import {
  DistanceFilter,
  FreeWiFiDetailedItem,
  MainHeader,
  PanelHeaderBack,
} from "../../bricks";
import { PANEL_ROUTES } from "../../consts";

export const FreeWiFi = memo(() => {
  return (
    <Panel id={PANEL_ROUTES.FREE_WIFI}>
      <PanelHeaderBack id={`${PANEL_ROUTES.FREE_WIFI}-back`} />
      <MainHeader id={`${PANEL_ROUTES.FREE_WIFI}-header`}>
        Бесплатный WI-FI
      </MainHeader>
      <DistanceFilter id={`${PANEL_ROUTES.FREE_WIFI}`} value={"default"} />
      <Group
        style={{
          marginTop: -12,
          paddingBottom: 12,
          paddingRight: 16,
          paddingLeft: 16,
        }}
      >
        <FreeWiFiDetailedItem
          id={"1"}
          address={"Kamysh"}
          isTurnedOn={false}
          title={"SPb-free"}
          areaFill={150}
          distance={1231}
        />
        <FreeWiFiDetailedItem
          id={"2"}
          address={"Kamysh"}
          isTurnedOn={true}
          title={"SPb-free"}
          areaFill={172}
          distance={1237}
        />
        <FreeWiFiDetailedItem
          id={"3"}
          address={"Kamysh"}
          isTurnedOn={true}
          title={"SPb-free"}
          areaFill={114}
          distance={1231}
        />
      </Group>
    </Panel>
  );
});
