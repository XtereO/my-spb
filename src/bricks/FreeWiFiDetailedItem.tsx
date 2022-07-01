import { Cell, Div, Group, Header } from "@vkontakte/vkui";
import { useCallback, useContext } from "react";
import { memo } from "react";
import { useDispatch } from "react-redux";
import { mapActions } from "../bll/map";
import {
  ArticleOutlineIcon,
  LockOpenOutlineIcon,
  PlaceOutlineIcon,
  RadioWawesAroundOutlineIcon,
  WarningTriangleOutlineIcon,
} from "../icons";
import { getEndingNumber, ThemeContext } from "../utils";
import { RoundedCard } from "./RoundedCard";
import { ThemedButton } from "./ThemedButton";

type Props = {
  id: number;
  address: string;
  status: "Работает" | "Не работает";
  name_wifi: string;
  coverage: number;
  coordinates?: [number, number];
  distance?: number;
};

export const FreeWiFiDetailedItem = memo<Props>(
  ({ id, address, status, name_wifi, coverage, distance, coordinates }) => {
    const dispatch = useDispatch();
    const handleClick = useCallback(() => {
      if (coordinates) {
        dispatch(mapActions.setCenter(coordinates));
      }
    }, [coordinates]);
    const theme = useContext(ThemeContext);
    return (
      <div style={{ marginTop: 12 }}>
        <RoundedCard id={String(id)}>
          <Header style={{ color: theme.heading }} id={`${id}-address`}>
            <span style={{ fontSize: 18, fontWeight: 500 }}>{address}</span>
          </Header>
          <Group style={{ marginTop: 6 }}>
            <GrayCell
              id={`${id}-status`}
              before={
                status === "Работает" ? (
                  <LockOpenOutlineIcon />
                ) : (
                  <WarningTriangleOutlineIcon />
                )
              }
            >
              Статус: {status.toLocaleLowerCase()}
            </GrayCell>
            <GrayCell
              id={`${id}-title`}
              before={
                <ArticleOutlineIcon width={24} height={24} color={theme.text} />
              }
            >
              Название: {name_wifi}
            </GrayCell>
            <GrayCell
              id={`${id}-area-fill`}
              before={<RadioWawesAroundOutlineIcon />}
            >
              Зона покрытия: {coverage} метр{getEndingNumber(coverage)}
            </GrayCell>
            {(distance) && (distance>10000 ? (
              <GrayCell id={`${id}-distance`} before={<PlaceOutlineIcon />}>
                Расстояние до Вас: {(distance/1000).toFixed(1)} километр{getEndingNumber(distance)}
              </GrayCell>
            ) : <GrayCell id={`${id}-distance`} before={<PlaceOutlineIcon />}>
            Расстояние до Вас: {distance} метр{getEndingNumber(distance)}
          </GrayCell>)}
            <Div style={{ marginTop: -6 }}>
              <ThemedButton onClick={handleClick} id={`${id}-btn`}>
                Показать на карте
              </ThemedButton>
            </Div>
          </Group>
        </RoundedCard>
      </div>
    );
  }
);

type GrayCellProps = {
  id: string;
  before: React.ReactNode;
  children: React.ReactNode;
};
const GrayCell = memo<GrayCellProps>(({ id, before, children }) => {
  const theme = useContext(ThemeContext);
  return (
    <Cell disabled style={{ marginTop: -20 }} id={id} before={before}>
      <span
        style={{
          fontWeight: 500,
          color: theme.text,
          fontSize: 14,
          marginLeft: 4,
        }}
      >
        {children}
      </span>
    </Cell>
  );
});
