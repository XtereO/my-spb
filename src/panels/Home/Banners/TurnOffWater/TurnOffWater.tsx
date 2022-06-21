import { Group } from "@vkontakte/vkui";
import { memo, useContext, useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import { turnOffWaterActions } from "../../../../bll/turn-off-water";
import { RoundedCard, ThemedButton } from "../../../../bricks";
import { WasherOutlineIcon } from "../../../../icons";
import { PlannedWaterOff } from "../../../../types";
import { getCountDays, getEndingNumber, ThemeContext } from "../../../../utils";
import "./TurnOffWater.css";

type Props = {
  data?: PlannedWaterOff[];
  onClick: () => void;
};

export const TurnOffWater = memo<Props>(({ data, onClick }) => {
  const theme = useContext(ThemeContext);
  const dispatch = useDispatch();
  const countPlannedWaterOff = useMemo(
    () => (data ? getCountDays(data) : 0),
    [data]
  );
  useEffect(() => {
    if (data) {
      dispatch(turnOffWaterActions.setPlannedWaterOffs(data));
    }
  }, [data]);
  return (
    <RoundedCard id="turn-off-water">
      <Group
        style={{
          paddingRight: 16,
          paddingLeft: 16,
          paddingBottom: 9,
          paddingTop: 9,
          position: "relative",
        }}
      >
        <div id="turn-off-water-icon">
          <WasherOutlineIcon />
        </div>
        <div
          id="turn-off-water-title"
          className="heading"
          style={{ color: theme.heading }}
        >
          Без воды
        </div>
        <div
          id="turn-off-water-description"
          className="text"
          style={{ color: theme.text, marginTop: 4 }}
        >
          {countPlannedWaterOff > 0
            ? `Сегодня без воды ${countPlannedWaterOff} адрес${getEndingNumber(
                countPlannedWaterOff
              )}`
            : "Сегодня воду отключать не будут"}
        </div>
        <div style={{ marginTop: 6, bottom: 0 }}>
          <ThemedButton onClick={onClick} id="turn-off-water-btn">
            Полный список
          </ThemedButton>
        </div>
      </Group>
    </RoundedCard>
  );
});
