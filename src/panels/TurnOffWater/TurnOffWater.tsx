import { Group, Panel } from "@vkontakte/vkui";
import { memo } from "react";
import {
  MainHeader,
  PanelHeaderBack,
  TurnOffWaterListItem,
} from "../../bricks";
import { PANEL_ROUTES } from "../../consts";
import { NotificationBanner } from "./NotificationBanner";

export const TurnOffWater = memo(() => {
  return (
    <Panel id={PANEL_ROUTES.TURN_OFF_WATER}>
      <PanelHeaderBack id={`${PANEL_ROUTES.TURN_OFF_WATER}-back`} />
      <MainHeader id={`${PANEL_ROUTES.TURN_OFF_WATER}-header`}>
        Отключение воды
      </MainHeader>
      <div style={{ paddingRight: 16, paddingLeft: 16, marginTop:12 }}>
        <NotificationBanner />
      </div>
      <Group
        style={{ paddingRight: 16, paddingLeft: 16, paddingBottom:12 }}
        id={`${PANEL_ROUTES.TURN_OFF_WATER}-list`}
      >
        <TurnOffWaterListItem
          id={"1"}
          timeIntervals={[
            { from: "22:00", to: "23:00" },
            { from: "22:00", to: "23:00" },
          ]}
        >
          First address
        </TurnOffWaterListItem>
        <TurnOffWaterListItem
          id={"1"}
          timeIntervals={[
            { from: "22:00", to: "23:00" },
            { from: "22:00", to: "23:00" },
          ]}
        >
          First address
        </TurnOffWaterListItem>
      </Group>
    </Panel>
  );
});
