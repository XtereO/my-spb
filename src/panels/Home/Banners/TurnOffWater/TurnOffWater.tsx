import { memo, useContext } from "react";
import {
  RoundedCard,
  TextSFProRoundedRegular,
  ThemedButton,
} from "../../../../bricks";
import { WasherOutlineIcon } from "../../../../icons";
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
      <div
        style={{
          paddingRight: 16,
          paddingLeft: 16,
          paddingBottom: 9,
          paddingTop: 9,
        }}
      >
        <div>
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
          <div style={{ marginTop: "4%" }}>
            <ThemedButton
              fontSize={12}
              size="m"
              onClick={onClick}
              id="turn-off-water-btn"
            >
              Полный список
            </ThemedButton>
          </div>
        </div>
      </div>
    </RoundedCard>
  );
});
