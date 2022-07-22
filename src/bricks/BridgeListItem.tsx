import { Cell, Div, Group, Header } from "@vkontakte/vkui";
import { useCallback, useContext } from "react";
import { memo } from "react";
import { useDispatch } from "react-redux";
import { mapActions } from "../bll/map";
import { LockOpenOutlineIcon, LockOutlineIcon } from "../icons";
import { ThemeContext, toFullTime } from "../utils";
import { DistanceCell } from "./DistanceCell";
import { RoundedCard } from "./RoundedCard";
import { ThemedButton } from "./ThemedButton";

type Props = {
  id: string;
  time_first_wiring: string;
  the_first_arch: string;
  the_second_wiring: string;
  the_second_arch: string;
  coordinates: [number, number];
  children: React.ReactNode;
  distance?: number;
};

export const BridgeListItem = memo<Props>(
  ({
    id,
    time_first_wiring,
    the_first_arch,
    the_second_wiring,
    the_second_arch,
    coordinates,
    distance,
    children,
  }) => {
    const dispatch = useDispatch();
    const handleClick = useCallback(() => {
      dispatch(mapActions.setCenter(coordinates));
    }, []);
    const theme = useContext(ThemeContext);
    const timeIntervals = [
      [time_first_wiring, the_first_arch],
      [the_second_wiring, the_second_arch],
    ];
    const timeIntervalElements = timeIntervals.map((t, index) => {
      if (t[0] && t[1] && t[0] !== "-" && t[1] !== "-") {
        return (
          <div
            style={{ marginTop: -20 }}
            key={`${id}-item-${index}`}
            className="d-flex"
          >
            <Cell
              disabled
              id={`${id}-item-${index}-wiring`}
              before={<LockOutlineIcon />}
              style={{
                width: "50%",
                fontSize: 14,
                color: theme.text,
              }}
            >
              <span style={{ marginLeft: 6 }}>{toFullTime(t[0])}</span>
            </Cell>
            <Cell
              disabled
              id={`${id}-item-${index}-arch`}
              before={<LockOpenOutlineIcon />}
              style={{ fontSize: 14, color: theme.text }}
            >
              <span style={{ marginLeft: 6 }}>{toFullTime(t[1])}</span>
            </Cell>
          </div>
        );
      }
    });
    return (
      <div style={{ marginTop: 12 }}>
        <RoundedCard id={`bridge-list-item-${id}`}>
          <Header style={{ color: theme.heading }} id={`${id}-header`}>
            <span style={{ fontSize: 18, whiteSpace: "normal" }}>
              {children}
            </span>
          </Header>
          <Group
            id={`${id}-time-intervals`}
            style={
              !!timeIntervalElements[0]
                ? { paddingTop: 10 }
                : { paddingTop: -10 }
            }
          >
            {timeIntervalElements}
            {distance && (
              <div style={{ marginTop: -20 }}>
                <DistanceCell id={`${id}-distance`} distance={distance} />
              </div>
            )}
            <Div>
              <ThemedButton
                onClick={handleClick}
                id={`bridge-list-item-${id}-btn`}
              >
                Показать на карте
              </ThemedButton>
            </Div>
          </Group>
        </RoundedCard>
      </div>
    );
  }
);
