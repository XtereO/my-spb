import { Group, Panel } from "@vkontakte/vkui";
import { memo } from "react";
import { DistanceFilter, MainHeader, PanelHeaderBack } from "../../bricks";
import { BridgeListItem } from "../../bricks";
import { PANEL_ROUTES } from "../../consts";

export const BridgeConstruction = memo(() => {
  return (
    <Panel id={PANEL_ROUTES.BRIDGE_CONSTRUCTION}>
      <PanelHeaderBack id={`${PANEL_ROUTES.BRIDGE_CONSTRUCTION}-back`} />
      <MainHeader id={`${PANEL_ROUTES.BRIDGE_CONSTRUCTION}-header`}>
        Развод мостов
      </MainHeader>
      <DistanceFilter
        id={`${PANEL_ROUTES.BRIDGE_CONSTRUCTION}-filter`}
        value={"default"}
        defaultLabel={"По времени"}
      />
      <Group id={`${PANEL_ROUTES.BRIDGE_CONSTRUCTION}-list`} style={{marginTop:-12,paddingBottom:12,paddingRight:16,paddingLeft:16}}>
        <BridgeListItem
          id={"1"}
          timeIntervals={[
            { timeClose: "00:00", timeOpen: "7:00" },
            { timeClose: "01:00", timeOpen: "02:00" },
          ]}
          distance={1230}
        >
          Bridge yamaha
        </BridgeListItem>
        <BridgeListItem
          id={"1"}
          timeIntervals={[
            { timeClose: "00:00", timeOpen: "7:00" },
            { timeClose: "01:00", timeOpen: "02:00" },
          ]}
          distance={1231}
        >
          Bridge yamaha
        </BridgeListItem>
        <BridgeListItem
          id={"1"}
          timeIntervals={[
            { timeClose: "00:00", timeOpen: "7:00" },
            { timeClose: "01:00", timeOpen: "02:00" },
          ]}
          distance={1232}
        >
          Bridge yamaha
        </BridgeListItem>
        <BridgeListItem
          id={"1"}
          timeIntervals={[
            { timeClose: "00:00", timeOpen: "7:00" },
            { timeClose: "01:00", timeOpen: "02:00" },
          ]}
          distance={1234}
        >
          Bridge yamaha
        </BridgeListItem>
        <BridgeListItem
          id={"1"}
          timeIntervals={[
            { timeClose: "00:00", timeOpen: "7:00" },
            { timeClose: "01:00", timeOpen: "02:00" },
          ]}
        >
          Bridge yamaha
        </BridgeListItem>
      </Group>
    </Panel>
  );
});
