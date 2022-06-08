import { Panel, PanelHeader } from "@vkontakte/vkui";
import { memo } from "react";
import { PANEL_ROUTES } from "../../consts";

export const Fact = memo(() => {
  return <Panel id={PANEL_ROUTES.FACT}>
      <PanelHeader 
      
      separator={false}>

      </PanelHeader>
  </Panel>;
});
