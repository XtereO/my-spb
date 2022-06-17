import { Cell, Group } from "@vkontakte/vkui";
import { useCallback, useEffect, useMemo } from "react";
import { useContext } from "react";
import { memo } from "react";
import { useDispatch } from "react-redux";
import {
  bridgeConstructionActions,
  useGetBridgeConstructionsQuery,
} from "../../../../bll/bridge-construction";
import { mainActions } from "../../../../bll/main";
import { RoundedCard, ThemedButton } from "../../../../bricks";
import { PANEL_ROUTES } from "../../../../consts";
import { CarOutlineIcon, ClockOutlineIcon } from "../../../../icons";
import { sortBridgeByTime, ThemeContext } from "../../../../utils";
import "./BridgeConstruction.css";

export const BridgeConstruction = memo(() => {
  const theme = useContext(ThemeContext);
  const dispatch = useDispatch();
  const handleClick = useCallback(() => {
    dispatch(mainActions.setActivePanel(PANEL_ROUTES.BRIDGE_CONSTRUCTION));
  }, []);
  const { data } = useGetBridgeConstructionsQuery("");
  const { bridges, time } = useMemo(() => {
    if (data) {
      return sortBridgeByTime(data);
    }
    return { bridges: [], time: "" };
  }, [data]);
  useEffect(() => {
    if (bridges) {
      dispatch(bridgeConstructionActions.setBridges(bridges));
    }
  }, [bridges]);
  return (
    <RoundedCard id="bridge-construction">
      <Group
        style={{
          paddingRight: 16,
          paddingLeft: 16,
          paddingBottom: 9,
          paddingTop: 9,
        }}
      >
        <div id="bridge-construction-icon">
          <CarOutlineIcon />
        </div>
        <div
          id="bridge-construction-title"
          className="heading"
          style={{ color: theme.heading }}
        >
          Развод мостов
        </div>
        <div
          id="bridge-construction-name"
          className="text"
          style={{ color: theme.text, marginTop: 4 }}
        >
          {bridges[0] ? bridges[0].name : ""}
        </div>
        <Cell
          style={{
            marginLeft: -16,
            marginRight: -16,
            marginTop: -14,
            marginBottom: -16,
          }}
          disabled
          before={<ClockOutlineIcon />}
        >
          <div
            id="bridge-construction-item"
            style={{ color: theme.text }}
            className="text"
          >
            {time}
          </div>
        </Cell>
        <div style={{ marginTop: 6 }}>
          <ThemedButton onClick={handleClick} id="bridge-construction-btn">
            Полный список
          </ThemedButton>
        </div>
      </Group>
    </RoundedCard>
  );
});
