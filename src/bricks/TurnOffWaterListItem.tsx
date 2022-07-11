import { Group, Header } from "@vkontakte/vkui";
import { useContext } from "react";
import { memo } from "react";
import { ThemeContext } from "../utils";
import { RoundedCard } from "./RoundedCard";

type Props = {
  id: string;
  timeIntervals: { date_off: string; date_on: string }[];
  children: React.ReactNode;
};

export const TurnOffWaterListItem = memo<Props>(
  ({ id, timeIntervals, children }) => {
    const theme = useContext(ThemeContext);
    const timeIntervalElements = timeIntervals.map((t, index) => {
      const monthOff = t.date_off.slice(5, 7);
      const dayOff = t.date_off.slice(8, 10);
      const timeOff = t.date_off.slice(11, 16);
      const monthOn = t.date_on.slice(5, 7);
      const dayOn = t.date_on.slice(8, 10);
      const timeOn = t.date_on.slice(11, 16);
      return (
        <div
          style={{
            marginTop: 4,
            color: theme.text,
            fontSize: 18,
          }}
          key={`towl-${id}-item-${index}`}
          id={`towl-${id}-item-${index}`}
          className="d-flex"
        >
          {dayOff}.{monthOff}, {timeOff} - {dayOn}.{monthOn}, {timeOn}
        </div>
      );
    });
    return (
      <div style={{ marginTop: 12 }}>
        <RoundedCard id={`turn-off-water-list-item-${id}`}>
          <Header id={`towl-${id}-header`}>
            <span
              id={`towl-${id}-header-title`}
              style={{
                fontSize: 18,
                color: theme.heading,
                whiteSpace: "normal",
              }}
            >
              {children}
            </span>
          </Header>
          <Group
            id={`towl-${id}-time-intervals`}
            style={{
              marginTop: -10,
              paddingRight: 16,
              paddingLeft: 16,
              paddingBottom: 12,
            }}
          >
            {timeIntervalElements}
          </Group>
        </RoundedCard>
      </div>
    );
  }
);
