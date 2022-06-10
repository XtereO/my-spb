import { Cell, Group, Header } from "@vkontakte/vkui";
import { useContext } from "react";
import { memo } from "react";
import {
  ArticleOutlineIcon,
  LockOpenOutlineIcon,
  PlaceOutlineIcon,
  RadioWawesAroundOutlineIcon,
  WarningTriangleOutlineIcon,
} from "../icons";
import { getEndingNumber, ThemeContext } from "../utils";
import { CardHeader } from "./CardHeader";
import { DistanceCell } from "./DistanceCell";
import { RoundedCard } from "./RoundedCard";

type Props = {
  id: string;
  address: string;
  isTurnedOn: boolean;
  title: string;
  areaFill: number;
  distance: number;
};

export const FreeWiFiDetailedItem = memo<Props>(
  ({ id, address, isTurnedOn, title, areaFill, distance }) => {
    const theme = useContext(ThemeContext);
    return (
      <div style={{ marginTop: 12 }}>
        <RoundedCard id={id}>
          <Header style={{ color: theme.heading }} id={`${id}-address`}>
            <span style={{ fontSize: 18, fontWeight: 500 }}>{address}</span>
          </Header>
          <Group style={{ marginTop: 6 }}>
            <GrayCell
              id={`${id}-status`}
              before={
                isTurnedOn ? (
                  <LockOpenOutlineIcon />
                ) : (
                  <WarningTriangleOutlineIcon />
                )
              }
            >
              Статус: {!isTurnedOn && "не"} работает
            </GrayCell>
            <GrayCell
              id={`${id}-title`}
              before={
                <ArticleOutlineIcon width={24} height={24} color={theme.text} />
              }
            >
              Название: {title}
            </GrayCell>
            <GrayCell
              id={`${id}-area-fill`}
              before={<RadioWawesAroundOutlineIcon />}
            >
              Зона покрытия: {areaFill} метр{getEndingNumber(areaFill)}
            </GrayCell>
            {distance && (
              <GrayCell id={`${id}-distance`} before={<PlaceOutlineIcon />}>
                Расстояние до Вас: {distance} метр{getEndingNumber(distance)}
              </GrayCell>
            )}
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
