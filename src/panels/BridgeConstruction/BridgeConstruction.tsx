import { Group, Panel } from "@vkontakte/vkui";
import { memo, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { getBridges } from "../../bll/bridge-construction";
import { getUserCoordinates } from "../../bll/main";
import { DistanceFilter, MainHeader, PanelHeaderBack } from "../../bricks";
import { BridgeListItem } from "../../bricks";
import { PANEL_ROUTES } from "../../consts";
import { Filter } from "../../types";
import { getDistance, sortByKey } from "../../utils";

export const BridgeConstruction = memo(() => {
  const [filter, setFilter] = useState<Filter>("default");
  const bridges = useSelector(getBridges);
  const userCoordinates = useSelector(getUserCoordinates);
  const sortedBridges = useMemo(() => {
    if (filter === "distance" && userCoordinates) {
      return bridges
        .map((s) => ({
          ...s,
          distance: Math.ceil(
            getDistance(userCoordinates, s.coordinates) * 1000
          ),
        }))
        .sort(sortByKey("distance"));
    }
    return [];
  }, [userCoordinates, filter]);
  return (
    <Panel id={PANEL_ROUTES.BRIDGE_CONSTRUCTION}>
      <PanelHeaderBack id={`${PANEL_ROUTES.BRIDGE_CONSTRUCTION}-back`} />
      <MainHeader id={`${PANEL_ROUTES.BRIDGE_CONSTRUCTION}-header`}>
        Развод мостов
      </MainHeader>
      <DistanceFilter
        id={`${PANEL_ROUTES.BRIDGE_CONSTRUCTION}-filter`}
        value={filter}
        onChange={setFilter}
        defaultLabel={"По времени"}
      />
      <Group
        id={`${PANEL_ROUTES.BRIDGE_CONSTRUCTION}-list`}
        style={{
          marginTop: -12,
          paddingBottom: 12,
          paddingRight: 16,
          paddingLeft: 16,
        }}
      >
        {filter === "distance"
          ? sortedBridges.map((s) => (
              <BridgeListItem key={s.numbe} id={`${s.numbe}`} {...s}>
                {s.name}
              </BridgeListItem>
            ))
          : bridges.map((b) => (
              <BridgeListItem key={b.numbe} id={`${b.numbe}`} {...b}>
                {b.name}
              </BridgeListItem>
            ))}
      </Group>
    </Panel>
  );
});
