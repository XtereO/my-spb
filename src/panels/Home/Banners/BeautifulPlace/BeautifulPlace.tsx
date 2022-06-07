import { Cell, Div } from "@vkontakte/vkui";
import { memo, useContext } from "react";
import { CardHeader, RoundedCard } from "../../../../bricks";
import { LocationMapOutlineIcon } from "../../../../icons";
import { ThemeContext } from "../../../../utils";

export const BeautifulPlace = memo(() => {
  const theme = useContext(ThemeContext);
  return (
    <RoundedCard id="beautiful-place">
      <CardHeader
        id="beautiful-place-header"
        before={<LocationMapOutlineIcon />}
      >
        Красивые места
      </CardHeader>
    </RoundedCard>
  );
});
