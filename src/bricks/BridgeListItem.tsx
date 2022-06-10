import { Cell, Group, Header } from "@vkontakte/vkui";
import { useContext } from "react";
import { memo } from "react";
import {
  LockOpenOutlineIcon,
  LockOutlineIcon,
} from "../icons";
import { ThemeContext } from "../utils";
import { DistanceCell } from "./DistanceCell";
import { RoundedCard } from "./RoundedCard";

type Props = {
  id: string;
  timeIntervals: { timeOpen: string; timeClose: string }[];
  children: React.ReactNode;
  distance?: number;
};

export const BridgeListItem = memo<Props>(
  ({ id, timeIntervals, distance, children }) => {
    const theme = useContext(ThemeContext);
    const timeIntervalElements = timeIntervals.map((t, index) => (
      <div
        style={{ marginTop: -20 }}
        key={`${id}-item-${index}`}
        className="d-flex"
      >
        <Cell
          disabled
          id={`${id}-item-${index}-close`}
          before={<LockOutlineIcon />}
          style={{
            width: "50%",
            fontWeight: 500,
            fontSize: 14,
            color: theme.text,
          }}
        >
          <span style={{ marginLeft: 6 }}>{t.timeClose}</span>
        </Cell>
        <Cell
          disabled
          id={`${id}-item-${index}-open`}
          before={<LockOpenOutlineIcon />}
          style={{ fontWeight: 500, fontSize: 14, color: theme.text }}
        >
          <span style={{ marginLeft: 6 }}>{t.timeOpen}</span>
        </Cell>
      </div>
    ));
    return (
      <div style={{ marginTop: 12 }}>
        <RoundedCard id={`bridge-list-item-${id}`}>
          <Header style={{ color: theme.heading }} id={`${id}-header`}>
            <span style={{ fontSize: 18, fontWeight: 500 }}>{children}</span>
          </Header>
          <Group id={`${id}-time-intervals`} style={{ paddingTop: 10 }}>
            {timeIntervalElements}
            {distance && (
              <div style={{ marginTop: -20 }}>
                <DistanceCell id={`${id}-distance`} distance={distance} />
              </div>
            )}
          </Group>
        </RoundedCard>
      </div>
    );
  }
);
