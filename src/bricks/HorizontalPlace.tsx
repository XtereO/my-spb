import { Div, HorizontalCell } from "@vkontakte/vkui";
import { useContext } from "react";
import { memo } from "react";
import { ThemeContext } from "../utils";

type Props = {
  title: string;
  imgSrc: string;
};

export const HorizontalPlace = memo<Props>(({ title, imgSrc }) => {
  const theme = useContext(ThemeContext);
  return (
    <div
      style={{ background: theme.horizontalPlaceBg, borderRadius: 21, marginRight:5, marginLeft:5 }}
      id="horizontal-place"
    >
      <Div className="center-x">
        <img
          id="horizontal-place-img"
          style={{ borderRadius: 21, width: 107.77, height: 81 }}
          src={imgSrc}
        />
      </Div>
      <div
        id="horizontal-place-title"
        style={{
          fontSize: 12,
          marginTop: -10,
          fontWeight: 600,
          color: theme.heading,
        }}
        className="center-x"
      >
        {title}
      </div>
    </div>
  );
});
