import { Div, Panel } from "@vkontakte/vkui";
import { LegacyRef, memo, useEffect, useRef, useState } from "react";
import "@tomtom-international/web-sdk-maps/dist/maps.css";
import tt from "@tomtom-international/web-sdk-maps";
import { MainHeader, PanelHeaderBack } from "../../bricks";
import { PANEL_ROUTES } from "../../consts";

export const Map = memo(() => {
  const mapElement = useRef();
  const [mapZoom, setMapZoom] = useState(20);
  const [map, setMap] = useState({});

  useEffect(() => {
    let map = tt.map({
      key: "8h504Wc4AXL6OPndqhrtKf70AovVBL3V",
      container: mapElement.current,
      center: [12.3, 32.992578],
      language: "ru-RU",
      zoom: mapZoom,
    });
    setMap(map);
    return () => map.remove();
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
