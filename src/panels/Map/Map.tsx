import { Div, Panel } from "@vkontakte/vkui";
import { memo, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { YMaps, Map as YMap, Placemark } from "react-yandex-maps";
import { getCenter, getZoom, mapActions } from "../../bll/map";
import { MainHeader, PanelHeaderBack } from "../../bricks";
import { PANEL_ROUTES } from "../../consts";
import placemark from "../../icons/placemark.png";

export const Map = memo(() => {
  const center = useSelector(getCenter);
  const zoom = useSelector(getZoom);
  const dispatch = useDispatch();
  const handleClick = useCallback(() => {
    dispatch(mapActions.setCenter(null));
  }, []);
  const defaultCenter = [59.939095, 30.315868];
  useEffect(() => {
    return handleClick;
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
            state={{ center: center ?? defaultCenter, zoom }}
          >
            <Placemark
              geometry={center ?? defaultCenter}
              properties={{
                hintContent: "То самое место",
                balloonContent: "Это красивая метка",
              }}
              options={{
                iconLayout: "default#image",
                iconImageHref: placemark,
                iconImageSize: [30, 30],
                iconImageOffset: [-3, -20],
              }}
            />
          </YMap>
        </YMaps>
      </Div>
    </Panel>
  );
});
