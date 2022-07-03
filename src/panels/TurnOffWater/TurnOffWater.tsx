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
  const plannedWaterOffs = useSelector(getPlannedWaterOffs);
  const dispatch = useDispatch();
  const page = useSelector(getPlannedWaterOffPage);
  const { data, refetch } = useGetPlannedWaterOffQuery({ page });
  const [searchedItems, setSearchedItems] = useState(
    plannedWaterOffs.slice(0, 10)
  );
  const [isLoading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
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
  const search = useCallback(
    (text: string) => {
      setLoading(true);
      const newItems = plannedWaterOffs.filter((p) =>
        p.address.match(new RegExp(text))
      );
      if (newItems.length > 0 || page >= (data?.max_page ?? 3)) {
        setLoading(false);
        setSearchedItems(newItems.slice(0, 10));
      } else {
        dispatch(turnOffWaterActions.setPage(page + 1));
      }
    },
    [plannedWaterOffs, page, data]
  );
  const searchSubj = useMemo(() => {
    const sub = new Subject<string>();
    sub
      .pipe(
        debounceTime(400),
        throttle((sm) => of(search(sm)), { leading: true, trailing: true })
      )
      .subscribe();
    return sub;
  }, [search]);
  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchText(value);
  }, []);
  useEffect(() => {
    searchSubj.next(searchText);
  }, [plannedWaterOffs, searchText]);
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
      <Search onChange={handleSearch} value={searchText} />
      <Group
        style={{ paddingRight: 16, paddingLeft: 16, paddingBottom: 12 }}
        id={`${PANEL_ROUTES.TURN_OFF_WATER}-list`}
      >
        {isLoading ? (
          <Div>
            <Spinner size="large" />
          </Div>
        ) : searchedItems.length > 0 ? (
          searchedItems.map((p: PlannedWaterOff) => (
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
