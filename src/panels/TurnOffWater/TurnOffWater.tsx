import { Group, Panel, Search } from "@vkontakte/vkui";
import { memo, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";
import {
  getPlannedWaterOffPage,
  getPlannedWaterOffs,
  turnOffWaterActions,
  useGetPlannedWaterOffQuery,
} from "../../bll/turn-off-water";
import {
  MainHeader,
  PanelHeaderBack,
  TurnOffWaterListItem,
} from "../../bricks";
import { PANEL_ROUTES } from "../../consts";
import { PlannedWaterOff } from "../../types";
import { NotificationBanner } from "./NotificationBanner";

export const TurnOffWater = memo(() => {
  const plannedWaterOffs = useSelector(getPlannedWaterOffs);
  const dispatch = useDispatch();
  const { inView, ref } = useInView();
  const page = useSelector(getPlannedWaterOffPage);
  const { data, refetch } = useGetPlannedWaterOffQuery({ page });
  useEffect(() => {
    if (inView) {
      dispatch(turnOffWaterActions.setPage(page + 1));
    }
  }, [inView]);
  useEffect(() => {
    refetch();
  }, [page]);
  useEffect(() => {
    if (page !== 1 && data) {
      dispatch(
        turnOffWaterActions.setPlannedWaterOffs([
          ...plannedWaterOffs,
          ...data.items,
        ])
      );
    }
  }, [data]);
  return (
    <Panel id={PANEL_ROUTES.TURN_OFF_WATER}>
      <PanelHeaderBack id={`${PANEL_ROUTES.TURN_OFF_WATER}-back`} />
      <MainHeader id={`${PANEL_ROUTES.TURN_OFF_WATER}-header`}>
        Отключение воды
      </MainHeader>
      <div style={{ paddingRight: 16, paddingLeft: 16, marginTop: 12 }}>
        <NotificationBanner />
      </div>
      <Group
        style={{ paddingRight: 16, paddingLeft: 16, paddingBottom: 12 }}
        id={`${PANEL_ROUTES.TURN_OFF_WATER}-list`}
      >
        {plannedWaterOffs.map((p: PlannedWaterOff) => (
          <TurnOffWaterListItem
            key={p.address}
            id={p.address}
            timeIntervals={p.dates}
          >
            {p.address}
          </TurnOffWaterListItem>
        ))}
        <div ref={ref} />
      </Group>
    </Panel>
  );
});
