import { Group } from "@vkontakte/vkui";
import { memo, useCallback, useContext } from "react";
import { useDispatch } from "react-redux";
import { mainActions } from "../../../../bll/main";
import { RoundedCard, ThemedButton } from "../../../../bricks";
import { PANEL_ROUTES } from "../../../../consts";
import { WasherOutlineIcon } from "../../../../icons";
import { ThemeContext } from "../../../../utils";
import "./TurnOffWater.css";

export const TurnOffWater = memo(() => {
  const theme = useContext(ThemeContext);
  const dispatch = useDispatch();
  const handleClick = useCallback(() => {
    dispatch(mainActions.setActivePanel(PANEL_ROUTES.TURN_OFF_WATER));
  }, []);
  return (
    <RoundedCard id="turn-off-water">
      <Group
        style={{
          paddingRight: 16,
          paddingLeft: 16,
          paddingBottom: 9,
          paddingTop: 9,
          position: "relative"
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
          Сегодня воду отключать не будут
        </div>
        <div style={{ marginTop: 6, bottom: 0 }}>
          <ThemedButton onClick={handleClick} id="turn-off-water-btn">
            Полный список
          </ThemedButton>
        </div>
      </Group>
    </RoundedCard>
  );
});
