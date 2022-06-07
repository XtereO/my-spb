import { Group } from "@vkontakte/vkui";
import { useContext } from "react";
import { memo } from "react";
import { RoundedCard } from "../../../../bricks";
import { CarOutlineIcon } from "../../../../icons";
import { ThemeContext } from "../../../../utils";

export const BridgeConstruction = memo(() => {
  const theme = useContext(ThemeContext);
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
        
        >

        </div>
      </Group>
    </RoundedCard>
  );
});
