import { Div, Group, Panel, ScreenSpinner } from "@vkontakte/vkui";
import { useCallback } from "react";
import { Fragment } from "react";
import { memo } from "react";
import { useDispatch } from "react-redux";
import { useGetBeautifulPlacesQuery } from "../../bll/beautiful-place";
import { useGetBridgeConstructionsQuery } from "../../bll/bridge-construction";
import { useGetFactQuery } from "../../bll/fact";
import { useGetFreeWifiQuery } from "../../bll/free-wifi";
import { mainActions } from "../../bll/main";
import { useGetPlannedWaterOffCountQuery } from "../../bll/turn-off-water";
import { MainHeader } from "../../bricks";
import { PANEL_ROUTES } from "../../consts";
import {
  BridgeConstruction,
  Fact,
  BeautifulPlace,
  FreeWiFi,
  TurnOffWater,
} from "./Banners";
import "./Home.css";

export const Home = memo(() => {
  const dispatch = useDispatch();
  const handleClick = useCallback(
    (panel: PANEL_ROUTES) => () => {
      dispatch(mainActions.setActivePanel(panel));
    },
    []
  );
  const date = new Date();
  const plannedWaterOffCount = useGetPlannedWaterOffCountQuery({});
  const freeWifi = useGetFreeWifiQuery({ page: 1 });
  const fact = useGetFactQuery({
    day: date.getDate(),
    month: date.getMonth() + 1,
  });
  const bridges = useGetBridgeConstructionsQuery({});
  const places = useGetBeautifulPlacesQuery({});

  const isPanelLoading =
    plannedWaterOffCount.isLoading ||
    freeWifi.isLoading ||
    fact.isLoading ||
    bridges.isLoading ||
    places.isLoading;

  return (
    <Panel id={PANEL_ROUTES.HOME}>
      {isPanelLoading ? (
        <ScreenSpinner />
      ) : (
        <Fragment>
          <MainHeader id={`${PANEL_ROUTES.HOME}-header`}>Главная</MainHeader>
          <Group>
            <Div>
              <Fact data={fact.data} onClick={handleClick(PANEL_ROUTES.FACT)} />
            </Div>
            <Div className="divided-block">
              <div style={{ flex: "0 1 50%" }}>
                <BridgeConstruction
                  data={bridges.data}
                  onClick={handleClick(PANEL_ROUTES.BRIDGE_CONSTRUCTION)}
                />
              </div>
              <div style={{ flex: "1 1 50%", marginLeft: 21 }}>
                <TurnOffWater
                  data={plannedWaterOffCount.data}
                  onClick={handleClick(PANEL_ROUTES.TURN_OFF_WATER)}
                />
              </div>
            </Div>
            <Div>
              <BeautifulPlace
                data={places.data}
                onClick={handleClick(PANEL_ROUTES.BEAUTIFUL_PLACE)}
              />
            </Div>
            <Div>
              <FreeWiFi
                data={freeWifi.data}
                onClick={handleClick(PANEL_ROUTES.FREE_WIFI)}
              />
            </Div>
          </Group>
        </Fragment>
      )}
    </Panel>
  );
});
