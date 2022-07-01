import { Div, ScreenSpinner, Spinner } from "@vkontakte/vkui";
import { useCallback, useEffect, useState } from "react";
import { memo } from "react";
import { useDispatch } from "react-redux";
import { mapActions } from "../bll/map";
import { CardHeader } from "./CardHeader";
import { DistanceCell } from "./DistanceCell";
import { RoundedCard } from "./RoundedCard";
import { ThemedButton } from "./ThemedButton";
import { useInView } from "react-intersection-observer";
import { getPhotoUrl } from "../dal/api";
import { ImageFallback } from "./ImageFallback";

type Props = {
  id: number;
  title: string;
  pathToPhoto: string;
  distance?: number;
  coordinates?: [number, number];
};

export const VerticalPlace = memo<Props>(
  ({ id, title, pathToPhoto, distance, coordinates }) => {
    const dispatch = useDispatch();
    const handleClick = useCallback(() => {
      if (coordinates) {
        dispatch(mapActions.setCenter(coordinates));
      }
    }, [coordinates]);

    return (
      <div style={{ marginTop: 12 }}>
        <RoundedCard id={String(id)}>
          <div className="center-x" style={{ textAlign: "center" }}>
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
            <ImageFallback
              id={`${id}-img`}
              imageUrl={pathToPhoto}
              style={{ borderRadius: 21, width: "100%", height: 186 }}
            />
          </Div>
          {coordinates && (
            <Div>
              <ThemedButton onClick={handleClick} id={`${id}-btn`}>
                Показать на карте
              </ThemedButton>
            </Div>
          )}
        </RoundedCard>
      </div>
    );
  }
);
