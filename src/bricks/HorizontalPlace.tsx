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
  const [photoSrc, setPhotoSrc] = useState("");
  useEffect(() => {
    getPhotoUrl(pathToPhoto).then((res) => setPhotoSrc(res.preview ?? ""));
  }, [photoSrc]);
  const theme = useContext(ThemeContext);
  if (photoSrc) {
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
          <img
            id="horizontal-place-img"
            style={{ borderRadius: 21, width: 107.77, height: 81 }}
            src={photoSrc}
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
  return <></>;
});
