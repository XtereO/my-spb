import { Group, Panel } from "@vkontakte/vkui";
import { memo, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { getBeautifulPlaces } from "../../bll/beautiful-place";
import { getUserCoordinates } from "../../bll/main";
import {
  DistanceFilter,
  MainHeader,
  PanelHeaderBack,
  VerticalPlace,
} from "../../bricks";
import { PANEL_ROUTES } from "../../consts";
import { Filter } from "../../types";
import { getDistance, sortByKey } from "../../utils";

export const BeautifulPlace = memo(() => {
  const [filter, setFilter] = useState<Filter>("default");
  const places = useSelector(getBeautifulPlaces);
  const userCoordinates = useSelector(getUserCoordinates);
  const sortedPlaces = useMemo(() => {
    if (filter === "distance" && userCoordinates) {
      return places
        .filter((p) => !!p.coordinates)
        .map((p) => ({
          ...p,
          distance: Math.ceil(
            getDistance(userCoordinates, [
              Number(p.coordinates.split(", ")[0]),
              Number(p.coordinates.split(", ")[1]),
            ]) * 1000
          ),
        }))
        .sort(sortByKey("distance"));
    }
    return [];
  }, [userCoordinates, filter]);
  return (
    <Panel id={PANEL_ROUTES.BEAUTIFUL_PLACE}>
      <PanelHeaderBack id={`${PANEL_ROUTES.BEAUTIFUL_PLACE}-back`} />
      <MainHeader id={`${PANEL_ROUTES.BEAUTIFUL_PLACE}-header`}>
        Красивые места
      </MainHeader>
      <DistanceFilter
        id={`${PANEL_ROUTES.BEAUTIFUL_PLACE}-filter`}
        value={filter}
        onChange={setFilter}
      />
      <Group
        id={`${PANEL_ROUTES.BEAUTIFUL_PLACE}-list`}
        style={{
          marginTop: -12,
          paddingBottom: 12,
          paddingRight: 16,
          paddingLeft: 16,
        }}
      >
        {filter === "distance"
          ? sortedPlaces.map((s) => (
              <VerticalPlace
                title={s.name ?? s.description}
                id={(s.id)}
                pathToPhoto={s.path_to_photo}
                distance={s.distance}
                coordinates={[
                  Number(s.coordinates.split(", ")[0]),
                  Number(s.coordinates.split(", ")[1]),
                ]}
              />
            ))
          : places.map((p) => (
              <VerticalPlace
                title={p.name ?? p.description}
                id={(p.id)}
                pathToPhoto={p.path_to_photo}
              />
            ))}
      </Group>
    </Panel>
  );
});
