import { Cell, Div } from "@vkontakte/vkui";
import { useContext } from "react";
import { memo } from "react";
import { PlaceOutlineIcon } from "../icons";
import { getEndingNumber, ThemeContext } from "../utils";
import { CardHeader } from "./CardHeader";
import { DistanceCell } from "./DistanceCell";
import { RoundedCard } from "./RoundedCard";

type Props = {
  id: string;
  title: string;
  imgSrc: string;
  distance?: number;
};

export const VerticalPlace = memo<Props>(({ id, title, imgSrc, distance }) => {
  const theme = useContext(ThemeContext);
  return (
    <div style={{ marginTop: 12 }}>
      <RoundedCard id={id}>
        <div className="center-x">
          <CardHeader id={`${id}-header`} before={<></>}>
            {title}
          </CardHeader>
        </div>
        {distance && (
          <div style={{ width: "100%", marginTop: -28 }} className="center-x">
            <DistanceCell id={`${id}-distance`} distance={distance} />
          </div>
        )}
        <Div style={{ marginTop: -12 }} className="center-x">
          <img
            id={`${id}-img`}
            style={{ borderRadius: 21, width: "100%", height: 186 }}
            src={imgSrc}
          />
        </Div>
      </RoundedCard>
    </div>
  );
});
