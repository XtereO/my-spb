import { Group } from "@vkontakte/vkui";
import { memo, useContext, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPlannedWaterOffs,
  turnOffWaterActions,
} from "../../../../bll/turn-off-water";
import {
  RoundedCard,
  TextSFProRoundedRegular,
  ThemedButton,
} from "../../../../bricks";
import { WasherOutlineIcon } from "../../../../icons";
import { PlannedWaterOff } from "../../../../types";
import { getEndingNumber, ThemeContext } from "../../../../utils";
import "./TurnOffWater.css";

type Props = {
  data?: number;
  onClick: () => void;
};

export const TurnOffWater = memo<Props>(({ data, onClick }) => {
  const theme = useContext(ThemeContext);
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
          <TextSFProRoundedRegular>
            {!!data
              ? `Сегодня без воды ${data} адрес${getEndingNumber(data)}`
              : "Сегодня воду отключать не будут"}
          </TextSFProRoundedRegular>
        </div>
        <div style={{ marginTop: 6, bottom: 0 }}>
          <ThemedButton
            fontSize={12}
            size="m"
            onClick={onClick}
            id="turn-off-water-btn"
          >
            Полный список
          </ThemedButton>
        </div>
      </Group>
    </RoundedCard>
  );
});
