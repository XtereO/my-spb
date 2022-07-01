import { Div, HorizontalCell } from "@vkontakte/vkui";
import { useContext, useEffect, useState } from "react";
import { memo } from "react";
import { getPhotoUrl } from "../dal/api";
import { ThemeContext } from "../utils";
import { ImageFallback } from "./ImageFallback";

type Props = {
  title: string;
  pathToPhoto: string;
};

export const HorizontalPlace = memo<Props>(({ title, pathToPhoto }) => {
  const theme = useContext(ThemeContext);
  return (
    <div
      style={{
        background: theme.horizontalPlaceBg,
        borderRadius: 21,
        marginRight: 5,
        marginLeft: 5,
      }}
      id="horizontal-place"
    >
      <Div className="center-x">
        <ImageFallback
          id="horizontal-place-img"
          style={{ borderRadius: 21, width: 107.77, height: 81 }}
          imageUrl={pathToPhoto}
        />
      </Div>
      <div
        id="horizontal-place-title"
        style={{
          fontSize: 12,
          marginTop: -10,
          fontWeight: 600,
          color: theme.heading,
          textAlign: "center",
        }}
        className="center-x"
      >
        {title}
      </div>
    </div>
  );
});
