import { Cell, Group } from "@vkontakte/vkui";
import { useEffect, useMemo } from "react";
import { useContext } from "react";
import { memo } from "react";
import { useDispatch } from "react-redux";
import { bridgeConstructionActions } from "../../../../bll/bridge-construction";
import {
  RoundedCard,
  TextSFProRoundedRegular,
  TextSFProTextRegular,
  ThemedButton,
} from "../../../../bricks";
import { CarOutlineIcon, ClockOutlineIcon } from "../../../../icons";
import { BridgeConstruction as BridgeConstructionType } from "../../../../types";
import { sortBridgeByTime, ThemeContext } from "../../../../utils";
import "./BridgeConstruction.css";

type Props = {
  data?: BridgeConstructionType[];
  onClick: () => void;
};

export const BridgeConstruction = memo<Props>(({ data, onClick }) => {
  const theme = useContext(ThemeContext);
  const dispatch = useDispatch();
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
          <TextSFProTextRegular>
            {bridges[0] ? bridges[0].name : ""}
          </TextSFProTextRegular>
        </div>
        <div style={{  flexDirection:"row", marginTop:2 }} className="d-flex">
          <div className="center-y">
            <ClockOutlineIcon />
          </div>
          <div
            id="bridge-construction-item"
            style={{ color: theme.text, marginLeft: 4 }}
            className="text center-y"
          >
            <TextSFProRoundedRegular>{time}</TextSFProRoundedRegular>
          </div>
        </div>
        <div style={{ marginTop: 6 }}>
          <ThemedButton
            fontSize={12}
            size="m"
            onClick={onClick}
            id="bridge-construction-btn"
          >
            Полный список
          </ThemedButton>
        </div>
      </Group>
    </RoundedCard>
  );
});
