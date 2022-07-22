import { Div, Group, Panel, Search, Spinner } from "@vkontakte/vkui";
import React, {
  memo,
  useEffect,
  useMemo,
  useCallback,
  useState,
  useContext,
} from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";
import { Subject, debounceTime, throttle, of } from "rxjs";
import { getNotifications } from "../../bll/notifications";
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
import { ThemeContext } from "../../utils";
import { NotificationBanner } from "./NotificationBanner";

export const TurnOffWater = memo(() => {
  const theme = useContext(ThemeContext);
  const page = useSelector(getPlannedWaterOffPage);
  const plannedWaterOffs = useSelector(getPlannedWaterOffs);
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const { data, refetch, isLoading } = useGetPlannedWaterOffQuery({
    street: searchText.replace(/[0-9/]+/g, "") ?? "",
    house: searchText.replace(/[A-zА-я,.]+/g, "").replaceAll(" ", "")
      ? parseInt(searchText.replace(/[A-zА-я,.]+/g, ""))
      : null,
    page,
  });

  useEffect(() => {
    return () => {
      dispatch(turnOffWaterActions.setPage(1));
    };
  }, []);
  useEffect(() => {
    if (data && page === 1) {
      dispatch(turnOffWaterActions.setPlannedWaterOffs(data.items));
    } else if (data && page > 1) {
      dispatch(
        turnOffWaterActions.setPlannedWaterOffs([
          ...plannedWaterOffs,
          ...data.items,
        ])
      );
    }
  }, [data]);
  const search = useCallback((text: string) => {
    setSearchText(text);
    dispatch(turnOffWaterActions.setPage(1));
  }, []);
  const searchSubj = useMemo(() => {
    const sub = new Subject<string>();
    sub
      .pipe(
        debounceTime(400),
        throttle((sm) => of(search(sm)), { leading: true, trailing: true })
      )
      .subscribe();
    return sub;
  }, []);
  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    searchSubj.next(e.currentTarget.value);
  }, []);

  const { inView, ref } = useInView();
  useEffect(() => {
    if (data?.total_items && data.total_items > page * 10 && inView) {
      dispatch(turnOffWaterActions.setPage(page + 1));
    }
  }, [inView]);
  useEffect(() => {
    refetch();
  }, [page, searchText]);

  const { address } = useSelector(getNotifications);
  useEffect(() => {
    if (address.street) {
      setSearchText(`${address.street} ${address.house}`);
    }
  }, [address.street, address.house]);
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
        defaultValue={searchText}
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
          <div>
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
          </div>
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
