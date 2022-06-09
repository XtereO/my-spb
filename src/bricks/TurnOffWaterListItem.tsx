import { Group, Header } from "@vkontakte/vkui";
import { useContext } from "react";
import { memo } from "react";
import { ThemeContext } from "../utils";
import { RoundedCard } from "./RoundedCard";

type Props = {
  id: string;
  timeIntervals: { from: string; to: string }[];
  children: React.ReactNode;
};

export const TurnOffWaterListItem = memo<Props>(
  ({ id, timeIntervals, children }) => {
    const theme = useContext(ThemeContext);
    const timeIntervalElements = timeIntervals.map((t, index) => (
      <div
        style={{
          marginTop: 4,
          color: theme.text,
          fontWeight: 500,
          fontSize: 18,
        }}
        key={`${id}-item-${index}`}
        className="d-flex"
      >
        {t.from} - {t.to}
      </div>
    ));
    return (
      <div style={{ marginTop: 12 }}>
        <RoundedCard id={`turn-off-water-list-item-${id}`}>
          <Header style={{ color: theme.heading }} id={`${id}-header`}>
            <span style={{ fontSize: 18, fontWeight:500 }}>{children}</span>
          </Header>
          <Group
            id={`${id}-time-intervals`}
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
