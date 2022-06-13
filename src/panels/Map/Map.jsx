import { Div, Panel } from "@vkontakte/vkui";
import { memo, useEffect, useRef, useState, forwardRef } from "react";
import "@tomtom-international/web-sdk-maps/dist/maps.css";
import tt from "@tomtom-international/web-sdk-maps";
import { MainHeader, PanelHeaderBack } from "../../bricks";
import { PANEL_ROUTES } from "../../consts";
import { useDispatch, useSelector } from "react-redux";
import {
  getCenter,
  getKey,
  getLanguage,
  getMapZoom,
  mapActions,
} from "../../bll/map";

export const Map = memo(() => {
  const mapElement = forwardRef();
  const dispatch = useDispatch();
  const [map, setMap] = useState({});
  const key = useSelector(getKey);
  const center = useSelector(getCenter);
  const mapZoom = useSelector(getMapZoom);
  const language = useSelector(getLanguage);

  useEffect(() => {
    let map = tt.map({
      key,
      center: center ?? [30.3350986, 59.9342802],
      mapZoom,
      language,
      //@ts-ignore
      container: mapElement.current,
    });
    setMap(map);
    return () => {
      map.remove();
      dispatch(mapActions.setCenter([0, 0]));
    };
  }, []);
  return (
    <Panel id={PANEL_ROUTES.MAP}>
      <PanelHeaderBack id={`${PANEL_ROUTES.MAP}-back`} />
      <MainHeader id={`${PANEL_ROUTES.MAP}-header`}>Карта</MainHeader>
      {
        //@ts-ignore
        <Div ref={mapElement} className="map" />
      }
    </Panel>
  );
});
