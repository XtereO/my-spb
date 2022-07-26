import { FixedLayout, Group, Panel } from "@vkontakte/vkui";
import React, {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useInView } from "react-intersection-observer";
import { Image, Layer, Stage, Rect, Text } from "react-konva";
import { useDispatch, useSelector } from "react-redux";
import useImage from "use-image";
import { getBeautifulPlaces } from "../../bll/beautiful-place";
import { getSnackbar, getUserCoordinates, mainActions } from "../../bll/main";
import {
  CustomizedSnackbar,
  DistanceFilter,
  MainHeader,
  PanelHeaderBack,
  VerticalPlace,
} from "../../bricks";
import { PANEL_ROUTES } from "../../consts";
import { getDistance, sortByKey } from "../../utils";
import bridge from "@vkontakte/vk-bridge";
import chevron_down from "../../images/chevron_down_white.png";
import defaultImage from "../../images/default-image.jpg";
import chirch from "../../images/chirch_white.png";
import Konva from "konva";

export const BeautifulPlace = memo(() => {
  const [filter, setFilter] = useState("default");
  const places = useSelector(getBeautifulPlaces);
  const userCoordinates = useSelector(getUserCoordinates);
  const sortedPlaces = useMemo(() => {
    if (filter === "distance" && userCoordinates) {
      return places
        .filter((p) => !!p.coordinates)
        .map((p) => ({
          ...p,
          distance: Math.ceil(
            getDistance(userCoordinates, [
              Number(p.coordinates.split(", ")[0]),
              Number(p.coordinates.split(", ")[1]),
            ]) * 1000
          ),
        }))
        .sort(sortByKey("distance"));
    }
    return [];
  }, [userCoordinates, filter]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    setPage(1);
  }, [filter]);
  const { inView, ref } = useInView();
  useEffect(() => {
    if (inView) {
      setPage((prev) => prev + 1);
    }
  }, [inView]);

  const dispatch = useDispatch();
  const refBg = useRef();
  const refSticker = useRef();
  const [placeStory, setPlaceStory] = useState(null);
  const handleClickShare = useCallback((title, imgSrc) => {
    setPlaceStory({ title, imgSrc });
  }, []);
  const snackbar = useSelector(getSnackbar);
  const closeSnackbarHandler = useCallback(() => {
    dispatch(mainActions.setSnackbar(null));
  }, []);
  const setErrorSnackbar = useCallback(() => {
    dispatch(
      mainActions.setSnackbar({
        text: "Опубликовать историю не удалось",
        isSuccess: false,
      })
    );
    setPlaceStory(null);
  }, []);
  const setSuccessSnackbar = useCallback(() => {
    dispatch(
      mainActions.setSnackbar({ text: "История опубликована", isSuccess: true })
    );
    setPlaceStory(null);
  }, []);
  const doStory = useCallback(async () => {
    try {
      await bridge
        .send("VKWebAppShowStoryBox", {
          background_type: "image",
          blob: refBg.current.toDataURL(),
          stickers: [
            {
              sticker_type: "renderable",
              sticker: {
                can_delete: false,
                content_type: "image",
                blob: refSticker.current.toDataURL(),
                clickable_zones: [
                  {
                    action_type: "link",
                    action: {
                      link: `https://vk.com/app8184487`,
                      tooltip_text_key: "tooltip_open_default",
                    },
                  },
                ],
                transform: {
                  translation_y: 0.36,
                  relation_width: 0.9,
                },
              },
            },
          ],
        })
        .catch((e) => {
          setErrorSnackbar();
        })
        .then((res) => {
          if (res && res.result) {
            setSuccessSnackbar();
          } else {
            setErrorSnackbar();
          }
        });
    } catch (e) {
      setErrorSnackbar();
    }
  }, [refBg, refSticker]);
  useEffect(() => {
    if (placeStory) {
      setTimeout(doStory, 2000);
    }
  }, [placeStory]);
  useEffect(() => {
    return closeSnackbarHandler;
  }, []);
  return (
    <Panel id={PANEL_ROUTES.BEAUTIFUL_PLACE}>
      <PanelHeaderBack id={`${PANEL_ROUTES.BEAUTIFUL_PLACE}-back`} />
      <MainHeader id={`${PANEL_ROUTES.BEAUTIFUL_PLACE}-header`}>
        Красивые места
      </MainHeader>
      <DistanceFilter
        id={`${PANEL_ROUTES.BEAUTIFUL_PLACE}-filter`}
        value={filter}
        onChange={setFilter}
      />
      <Group
        id={`${PANEL_ROUTES.BEAUTIFUL_PLACE}-list`}
        style={{
          marginTop: -12,
          paddingBottom: 12,
          paddingRight: 16,
          paddingLeft: 16,
        }}
      >
        {filter === "distance"
          ? sortedPlaces
              .slice(0, page * 5)
              .map((s) => (
                <VerticalPlace
                  onClickShare={handleClickShare}
                  key={s.id}
                  title={s.name ?? s.description}
                  id={s.id}
                  pathToPhoto={s.path_to_photo}
                  distance={s.distance}
                  coordinates={
                    p.coordinates
                      ? [
                          Number(s.coordinates.split(", ")[0]),
                          Number(s.coordinates.split(", ")[1]),
                        ]
                      : null
                  }
                />
              ))
          : places
              .slice(0, page * 5)
              .map((p) => (
                <VerticalPlace
                  onClickShare={handleClickShare}
                  coordinates={
                    p.coordinates
                      ? [
                          Number(p.coordinates.split(", ")[0]),
                          Number(p.coordinates.split(", ")[1]),
                        ]
                      : null
                  }
                  key={p.id}
                  title={p.name ?? p.description}
                  id={p.id}
                  pathToPhoto={p.path_to_photo}
                />
              ))}
        {places.length !== places.slice(0, page * 5).length && (
          <div ref={ref} />
        )}
        <FixedLayout vertical="bottom">
          {snackbar && <CustomizedSnackbar {...snackbar} />}
        </FixedLayout>
      </Group>
      <div
        id="canvas"
        style={{ width: 0, height: 0, opacity: 0, overflow: "hidden" }}
      >
        <Stage ref={refBg} width={1080} height={1920}>
          <Layer>
            <StoryBg src={placeStory ? placeStory.imgSrc : defaultImage} />
            <Rect
              width={1080}
              height={1174}
              y={746}
              x={0}
              fillLinearGradientStartPoint={{ x: 540, y: 0 }}
              fillLinearGradientEndPoint={{ x: 540, y: 1174 }}
              fillLinearGradientColorStops={[
                0,
                "rgba(73, 68, 69, 0)",
                0.3,
                "rgba(73, 68, 69, 0.85)",
                1,
                "rgba(73, 68, 69, 1)",
              ]}
            />
            <Text
              fontSize={51}
              opacity={0.75}
              lineHeight={1.16}
              width={744}
              height={122}
              letterSpacing={-0.25}
              fontFamily="NewYorkMedium-Medium"
              fill="rgba(255, 255, 255, 1)"
              x={68}
              y={1148}
              text={"Красивое место в Санкт-Петербурге:"}
            />
            <Text
              x={68}
              y={1286}
              letterSpacing={-1}
              fontSize={96}
              fontFamily="NewYorkLarge-Bold"
              lineHeight={1.16}
              fill="rgba(255, 255, 255, 1)"
              width={844.33}
              height={230}
              text={placeStory ? placeStory.title : ""}
              ellipsis={true}
            />
            <ChirchIcon />
          </Layer>
        </Stage>
        <Stage ref={refSticker} width={976} height={147}>
          <Layer>
            <Rect
              fill="rgba(255, 255, 255, 0.15)"
              width={976}
              height={147}
              cornerRadius={44}
            />
            <Text
              y={48}
              x={259.5}
              height={51}
              width={493}
              fontSize={42}
              fontFamily="Inter-Semibold"
              fill="rgba(255, 255, 255, 1)"
              text="Больше красивых мест"
            />
            <ChevronDownIcon />
          </Layer>
        </Stage>
      </div>
    </Panel>
  );
});

const ChevronDownIcon = memo(() => {
  const [image] = useImage(chevron_down);
  return <Image width={24} height={12} image={image} x={203.5} y={60} />;
});

const ChirchIcon = memo(() => {
  const [image] = useImage(chirch);
  return <Image width={53.67} height={90} image={image} x={922.33} y={1287} />;
});

const StoryBg = ({ src }) => {
  const [image] = useImage(src, "anonymous");
  console.log(src, image, "image get");
  return <Image width={1080} height={1576} image={image} />;
};
