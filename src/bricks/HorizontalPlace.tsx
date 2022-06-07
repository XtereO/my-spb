import { Div } from "@vkontakte/vkui";
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
    <Div id="horizontal-place">
      <div className="center-x">
        <img
          id="horizontal-place-img"
          style={{ borderRadius: 21, width: 107.77, height: 81 }}
          src={imgSrc}
        />
      </div>
      <div
        id="horizontal-place-title"
        style={{
          fontSize: 12,
          fontWeight: 600,
          color: theme.heading,
          marginTop: 6,
        }}
        className="center-x"
      >
        {title}
      </div>
    </Div>
  );
});
