import { Div } from "@vkontakte/vkui";
import { useCallback } from "react";
import { memo } from "react";
import { useDispatch } from "react-redux";
import { mapActions } from "../bll/map";
import { CardHeader } from "./CardHeader";
import { DistanceCell } from "./DistanceCell";
import { RoundedCard } from "./RoundedCard";
import { ThemedButton } from "./ThemedButton";
import parse from "html-react-parser";
import { ImageFallback } from "./ImageFallback";
import { removeHrefs } from "../utils";

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
        <RoundedCard id={`vp-${id}`}>
          <div className="center-x" style={{ textAlign: "center" }}>
            <CardHeader id={`vp-${id}-header`} before={<></>}>
              {parse(removeHrefs(title))}
            </CardHeader>
          </div>
          {distance && (
            <div style={{ width: "100%", marginTop: -28 }} className="center-x">
              <DistanceCell id={`vp-${id}-distance`} distance={distance} />
            </div>
          )}
          <Div
            style={{ marginTop: -12 }}
            id={`vp-${id}-img`}
            className="center-x"
          >
            <ImageFallback
              id={`vp-{id}-img`}
              imageUrl={pathToPhoto}
              style={{ borderRadius: 21, width: "100%", height: 186 }}
            />
          </Div>
          {coordinates && (
            <Div className="center-x">
              <ThemedButton onClick={handleClick} id={`vp-${id}-btn`}>
                Показать на карте
              </ThemedButton>
            </Div>
          )}
        </RoundedCard>
      </div>
    );
  }
);
