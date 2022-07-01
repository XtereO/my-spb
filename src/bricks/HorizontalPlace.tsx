import { Div, HorizontalCell } from "@vkontakte/vkui";
import { useCallback, useContext, useEffect, useState } from "react";
import { memo } from "react";
import { useDispatch } from "react-redux";
import { mapActions } from "../bll/map";
import { getPhotoUrl } from "../dal/api";
import { ThemeContext } from "../utils";
import { ImageFallback } from "./ImageFallback";

type Props = {
  title: string;
  coordinates: [number, number];
  pathToPhoto: string;
};

export const HorizontalPlace = memo<Props>(
  ({ title, pathToPhoto, coordinates }) => {
    const theme = useContext(ThemeContext);
    const dispatch = useDispatch();
    const handleClick = useCallback(() => {
      dispatch(mapActions.setCenter(coordinates));
    }, [coordinates]);
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
            onClick={handleClick}
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
  }
);
