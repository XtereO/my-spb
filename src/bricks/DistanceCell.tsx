import { Cell } from "@vkontakte/vkui";
import { useContext } from "react";
import { memo } from "react";
import { PlaceOutlineIcon } from "../icons";
import { getEndingNumber, ThemeContext } from "../utils";

type Props = {
  id: string;
  distance: number;
  children?: React.ReactNode;
};

export const DistanceCell = memo<Props>(({ distance, id, children }) => {
  const theme = useContext(ThemeContext);
  return (
    <Cell
      id={id}
      disabled
      before={<PlaceOutlineIcon />}
      style={{ fontWeight: 500, fontSize: 14, color: theme.text }}
    >
      <span style={{ marginLeft: 6 }}>
        {children} {distance} метр{getEndingNumber(distance)}
      </span>
    </Cell>
  );
});