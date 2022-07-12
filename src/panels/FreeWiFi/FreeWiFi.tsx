import { Group, Panel } from "@vkontakte/vkui";
import { memo, useEffect, useMemo, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";
import {
  freeWifiActions,
  getWifiPage,
  getWifiSpots,
  useGetFreeWifiQuery,
} from "../../bll/free-wifi";
import { getUserCoordinates } from "../../bll/main";
import {
  DistanceFilter,
  FreeWiFiDetailedItem,
  MainHeader,
  PanelHeaderBack,
} from "../../bricks";
import { PANEL_ROUTES } from "../../consts";
import { Filter, FreeWifi } from "../../types";
import { getDistance, sortByKey } from "../../utils";

export const FreeWiFi = memo(() => {
  const [filter, setFilter] = useState<Filter>("default");
  const dispatch = useDispatch();
  const wifiSpots = useSelector(getWifiSpots);
  const userCoordinates = useSelector(getUserCoordinates);
  const sortedWifiSpots = useMemo(() => {
    if (filter === "distance" && userCoordinates) {
      return wifiSpots
        .map((w: FreeWifi) => ({
          ...w,
          distance: Math.ceil(
            getDistance(userCoordinates, w.coordinates) * 1000
          ),
        }))
        .sort(sortByKey("distance"));
    }
    return [];
  }, [userCoordinates, filter, wifiSpots]);
  const { inView, ref } = useInView();
  const page = useSelector(getWifiPage);
  const { data, refetch } = useGetFreeWifiQuery({ page });
  useEffect(() => {
    if (inView) {
      dispatch(freeWifiActions.setPage(page + 1));
    }
  }, [inView]);
  useEffect(() => {
    refetch();
  }, [page]);
  useEffect(() => {
    if (page !== 1 && data) {
      dispatch(freeWifiActions.setWifiSpots([...wifiSpots, ...data]));
    }
  }, [data]);
  return (
    <Panel id={PANEL_ROUTES.FREE_WIFI}>
      <PanelHeaderBack id={`${PANEL_ROUTES.FREE_WIFI}-back`} />
      <MainHeader id={`${PANEL_ROUTES.FREE_WIFI}-header`}>
        Бесплатный WI-FI
      </MainHeader>
      <DistanceFilter
        onChange={setFilter}
        id={`${PANEL_ROUTES.FREE_WIFI}-filter`}
        value={filter}
      />
      <Group
        id={`${PANEL_ROUTES.FREE_WIFI}-list`}
        style={{
          marginTop: -12,
          paddingBottom: 12,
          paddingRight: 16,
          paddingLeft: 16,
        }}
      >
        {filter === "distance"
          ? sortedWifiSpots.map((s) => (
              <FreeWiFiDetailedItem key={s.number} {...s} id={s.number} />
            ))
          : wifiSpots.map((w) => (
              <FreeWiFiDetailedItem key={w.number} {...w} id={w.number} />
            ))}
        <div ref={ref} />
      </Group>
    </Panel>
  );
});
