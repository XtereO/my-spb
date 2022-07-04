import { Div, Group, Panel, Search, Spinner } from "@vkontakte/vkui";
import React, {
  memo,
  useEffect,
  useMemo,
  useCallback,
  useState,
  useContext,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Subject, debounceTime, throttle, of } from "rxjs";
import {
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
import { ThemeContext } from "../../utils";
import { NotificationBanner } from "./NotificationBanner";

export const TurnOffWater = memo(() => {
  const theme = useContext(ThemeContext);
  const plannedWaterOffs = useSelector(getPlannedWaterOffs);
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const { data, refetch, isLoading } = useGetPlannedWaterOffQuery({
    street: searchText.replace(/[0-9/]+/g, "") ?? "",
    house: searchText.replace(/[A-zА-я,.]+/g, "").replaceAll(" ", "")
      ? parseInt(searchText.replace(/[A-zА-я,.]+/g, ""))
      : null,
  });
  console.log(data);

  useEffect(() => {
    if (data) {
      dispatch(turnOffWaterActions.setPlannedWaterOffs(data));
    }
  }, [data]);
  const search = useCallback(() => {
    refetch();
  }, []);
  const searchSubj = useMemo(() => {
    const sub = new Subject();
    sub
      .pipe(
        debounceTime(400),
        throttle(() => of(search()), { leading: true, trailing: true })
      )
      .subscribe();
    return sub;
  }, []);
  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.currentTarget.value);
    searchSubj.next("");
  }, []);
  return (
    <Panel id={PANEL_ROUTES.TURN_OFF_WATER}>
      <PanelHeaderBack id={`${PANEL_ROUTES.TURN_OFF_WATER}-back`} />
      <MainHeader id={`${PANEL_ROUTES.TURN_OFF_WATER}-header`}>
        Отключение воды
      </MainHeader>
      <div
        style={{
          paddingRight: 16,
          paddingLeft: 16,
          marginTop: 12,
          marginBottom: 22,
        }}
      >
        <NotificationBanner />
      </div>
      <Search
        width={window.innerWidth - 20}
        onChange={handleSearch}
        value={searchText}
      />
      <Group
        style={{ paddingRight: 16, paddingLeft: 16, paddingBottom: 12 }}
        id={`${PANEL_ROUTES.TURN_OFF_WATER}-list`}
      >
        {isLoading ? (
          <Div>
            <Spinner size="large" />
          </Div>
        ) : plannedWaterOffs.length > 0 ? (
          plannedWaterOffs.map((p: PlannedWaterOff) => (
            <TurnOffWaterListItem
              key={p.address}
              id={p.address}
              timeIntervals={p.dates}
            >
              {p.address}
            </TurnOffWaterListItem>
          ))
        ) : (
          <Div
            style={{ color: theme.text, wordSpacing: "normal" }}
            className="center-x"
          >
            Ваш запрос не дал результатов
          </Div>
        )}
      </Group>
    </Panel>
  );
});
