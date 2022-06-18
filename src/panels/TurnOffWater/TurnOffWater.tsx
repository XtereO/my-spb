import { Group, Panel, Search } from "@vkontakte/vkui";
import {
  ChangeEvent,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useSelector } from "react-redux";
import { getPlannedWaterOffs } from "../../bll/turn-off-water";
import {
  MainHeader,
  PanelHeaderBack,
  TurnOffWaterListItem,
} from "../../bricks";
import { PANEL_ROUTES } from "../../consts";
import { PlannedWaterOff } from "../../types";
import { NotificationBanner } from "./NotificationBanner";
import { Subject, debounceTime, throttle, of } from "rxjs";

export const TurnOffWater = memo(() => {
  const plannedWaterOffs = useSelector(getPlannedWaterOffs);
  const [searchPlannedWaterOffs, setSearchPlannedWaterOffs] = useState(
    plannedWaterOffs.slice(0, 10)
  );
  const search = (text: string) => {
    let newPlannedWaterOffs: PlannedWaterOff[] = [];
    let i = 0;
    while (newPlannedWaterOffs.length < 10 && i < plannedWaterOffs.length) {
      if (plannedWaterOffs[i].address.match(new RegExp(text))) {
        newPlannedWaterOffs.push(plannedWaterOffs[i]);
      }
      i++
    }
    setSearchPlannedWaterOffs(newPlannedWaterOffs);
  };
  const searchSubj = useMemo(() => {
    const sub = new Subject<string>();

    sub
      .pipe(
        debounceTime(500),
        throttle((sm) => of(search(sm)), { leading: true, trailing: true })
      )
      .subscribe();

    return sub;
  }, []);

  const handleSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    searchSubj.next(e.currentTarget.value);
  }, []);
  return (
    <Panel id={PANEL_ROUTES.TURN_OFF_WATER}>
      <PanelHeaderBack id={`${PANEL_ROUTES.TURN_OFF_WATER}-back`} />
      <MainHeader id={`${PANEL_ROUTES.TURN_OFF_WATER}-header`}>
        Отключение воды
      </MainHeader>
      <div style={{ paddingRight: 16, paddingLeft: 16, marginTop: 12 }}>
        <NotificationBanner />
      </div>
      <div style={{ marginTop: 10, marginBottom: -10 }}>
        <Search onChange={handleSearch} />
      </div>
      <Group
        style={{ paddingRight: 16, paddingLeft: 16, paddingBottom: 12 }}
        id={`${PANEL_ROUTES.TURN_OFF_WATER}-list`}
      >
        {searchPlannedWaterOffs.map((p: PlannedWaterOff) => (
          <TurnOffWaterListItem id={p.address} timeIntervals={p.dates}>
            {p.address}
          </TurnOffWaterListItem>
        ))}
      </Group>
    </Panel>
  );
});
