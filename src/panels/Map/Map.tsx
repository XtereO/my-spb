import { Div, Panel } from "@vkontakte/vkui";
import { memo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { YMaps, Map as YMap } from "react-yandex-maps";
import { getCenter, getZoom, mapActions } from "../../bll/map";
import { MainHeader, PanelHeaderBack } from "../../bricks";
import { PANEL_ROUTES } from "../../consts";

export const Map = memo(() => {
  const center = useSelector(getCenter);
  const zoom = useSelector(getZoom);
  const dispatch = useDispatch();
  const handleClick = useCallback(() => {
    dispatch(mapActions.setCenter(null));
  }, []);
  return (
    <Panel id={PANEL_ROUTES.MAP}>
      <PanelHeaderBack onClick={handleClick} id={`${PANEL_ROUTES.MAP}-back`} />
      <MainHeader id={`${PANEL_ROUTES.MAP}-header`}>Карта</MainHeader>
      <Div>
        <YMaps>
          <YMap
            width={"100%"}
            height={350}
            state={{ center: center ?? [59.939095, 30.315868], zoom }}
          >
          </YMap>
        </YMaps>
      </Div>
    </Panel>
  );
});
