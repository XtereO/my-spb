import { Div } from "@vkontakte/vkui";
import { useCallback, useContext } from "react";
import { memo } from "react";
import { useDispatch } from "react-redux";
import { mapActions } from "../bll/map";
import { removeHrefs, ThemeContext } from "../utils";
import { TextSFProRoundedSemibold } from "./Fonts";
import { ImageFallback } from "./ImageFallback";
import parse from "html-react-parser";

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
            color: theme.heading,
            textAlign: "center",
          }}
          className="center-x"
        >
          <TextSFProRoundedSemibold>
            {parse(removeHrefs(title))}
          </TextSFProRoundedSemibold>
        </div>
      </div>
    );
  }
);
