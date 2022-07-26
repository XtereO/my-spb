import { Div } from "@vkontakte/vkui";
import { useCallback, useRef } from "react";
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
  onClickShare: (title: string, imgSrc: string) => void;
};

export const VerticalPlace = memo<Props>(
  ({ id, title, pathToPhoto, distance, coordinates, onClickShare }) => {
    const dispatch = useDispatch();
    const handleClick = useCallback(() => {
      if (coordinates) {
        dispatch(mapActions.setCenter(coordinates));
      }
    }, [coordinates]);
    const ref = useRef();
    const handleClickShare = useCallback(() => {
      //@ts-ignore
      if (ref.current && ref.current.src) {
        //@ts-ignore
        onClickShare(title, ref.current.src);
      }
    }, [ref, ref.current]);
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
              ref={ref}
              id={`vp-${id}-img`}
              imageUrl={pathToPhoto}
              style={{ borderRadius: 21, width: "100%", height: 186 }}
            />
          </Div>
          <Div className="center-x">
            {coordinates && (
              <ThemedButton onClick={handleClick} id={`vp-${id}-show-btn`}>
                Показать на карте
              </ThemedButton>
            )}
            {pathToPhoto && (
              <div style={coordinates ? { marginLeft: 6 } : {}}>
                <ThemedButton
                  onClick={handleClickShare}
                  id={`vp-${id}-share-btn`}
                >
                  Поделиться
                </ThemedButton>
              </div>
            )}
          </Div>
        </RoundedCard>
      </div>
    );
  }
);
