import { Div } from "@vkontakte/vkui";
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

type Props = {
  id: number;
  title: string;
  pathToPhoto: string;
  distance?: number;
  coordinates?: [number, number];
};

export const VerticalPlace = memo<Props>(
  ({ id, title, pathToPhoto, distance, coordinates }) => {
    //@ts-ignore
    const { isView, ref } = useInView();
    const dispatch = useDispatch();
    const handleClick = useCallback(() => {
      if (coordinates) {
        dispatch(mapActions.setCenter(coordinates));
      }
    }, [coordinates]);
    const [photoSrc, setPhotoSrc] = useState("");
    useEffect(() => {
      let timerId = setTimeout(() => {
        if (isView && !photoSrc) {
          getPhotoUrl(pathToPhoto).then(res => setPhotoSrc(res.preview ?? "error"));
        }else{
          clearTimeout(timerId)
        }
      }, 1000);
    }, [isView,ref]);
    console.log(photoSrc);
    
    return (
      <div ref={ref} style={{ marginTop: 12 }}>
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
            <img
              alt={"Loading..."}
              id={`${id}-img`}
              style={{ borderRadius: 21, width: "100%", height: 186 }}
              src={photoSrc}
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
