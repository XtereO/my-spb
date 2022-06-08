import { Div, Group, Panel, PanelHeader } from "@vkontakte/vkui";
import { useContext } from "react";
import { Fragment } from "react";
import { memo } from "react";
import { MainHeader } from "../../bricks";
import { PANEL_ROUTES } from "../../consts";
import { ThemeContext } from "../../utils";
import { BridgeConstruction, Fact } from "./Banners";
import { BeautifulPlace } from "./Banners/BeautifulPlace";
import { FreeWiFi } from "./Banners/FreeWiFi";
import { TurnOffWater } from "./Banners/TurnOffWater";
import "./Home.css";

export const Home = memo(() => {
  const theme = useContext(ThemeContext);
  return (
    <Panel id={PANEL_ROUTES.HOME}>
      <Fragment>
        <MainHeader id={`${PANEL_ROUTES.HOME}-header`}>Главная</MainHeader>
        <Group>
          <Div>
            <Fact />
          </Div>
          <Div className="divided-block">
            <BridgeConstruction />
            <TurnOffWater />
          </Div>
          <Div>
            <BeautifulPlace />
          </Div>
          <Div>
            <FreeWiFi />
          </Div>
        </Group>
      </Fragment>
    </Panel>
  );
});
