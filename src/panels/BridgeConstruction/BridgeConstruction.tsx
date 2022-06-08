import { Panel } from "@vkontakte/vkui";
import { memo } from "react";
import { MainHeader, PanelHeaderBack } from "../../bricks";
import { PANEL_ROUTES } from "../../consts";

export const BridgeConstruction = memo(() => {
  return <Panel id={PANEL_ROUTES.BRIDGE_CONSTRUCTION}>
      <PanelHeaderBack id={`${PANEL_ROUTES.BRIDGE_CONSTRUCTION}-back`} />
      <MainHeader id={`${PANEL_ROUTES.BRIDGE_CONSTRUCTION}-header`}>
        Развод мостов
      </MainHeader>
  </Panel>;
});
