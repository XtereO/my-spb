import { Cell, Div, FixedLayout, Group, Panel, Spacing } from "@vkontakte/vkui";
import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import parse from "html-react-parser";
import {
  CustomizedSnackbar,
  MainHeader,
  PanelHeaderBack,
  TextSFProRoundedRegular,
  TextSFProRoundedSemibold,
  ThemedButton,
} from "../../bricks";
import { PANEL_ROUTES } from "../../consts";
import {
  ArticleOutlineIcon,
  CalendarOutlineIcon,
  ShareOutlineIcon,
} from "../../icons";
import "./Fact.css";
import { useDispatch, useSelector } from "react-redux";
import { getFact } from "../../bll/fact";
import { removeHrefs } from "../../utils";
import bridge from "@vkontakte/vk-bridge";
import { getSnackbar, mainActions } from "../../bll/main";
import { Layer, Rect, Stage, Text, Image } from "react-konva";
import storyBg from "../../images/fact-story-bg.jpg";
import chirch from "../../images/chirch.png";
import chevron_down from "../../images/chevron_down.png";
import useImage from "use-image";

export const Fact = memo(() => {
  const dispatch = useDispatch();
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
  }, []);
  const setSuccessSnackbar = useCallback(() => {
    dispatch(
      mainActions.setSnackbar({ text: "История опубликована", isSuccess: true })
    );
  }, []);
  const { title, date_txt, text } = useSelector(getFact);
  const ref = useRef();
  const refText = useRef();
  const refSticker = useRef();
  const [titleHeight, setTitleHeight] = useState(0);
  const maxTitleHeight = 645;
  useEffect(() => {
    if (refText.current) {
      setTitleHeight(
        refText.current.clientHeight < maxTitleHeight
          ? refText.current.clientHeight
          : maxTitleHeight
      );
    }
  }, [refText, refText?.current]);
  const doStory = useCallback(async () => {
    try {
      await bridge
        .send("VKWebAppShowStoryBox", {
          background_type: "image",
          //@ts-ignore
          blob: ref.current.toDataURL(),
          stickers: [
            {
              sticker_type: "renderable",
              sticker: {
                can_delete: false,
                content_type: "image",
                //@ts-ignore
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
                  translation_y: 0.34,
                  relation_width: 0.9,
                },
              },
            },
          ],
        })
        .catch(() => setErrorSnackbar())
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
  }, [ref, refSticker]);
  useEffect(() => {
    return closeSnackbarHandler;
  }, []);
  return (
    <Panel id={PANEL_ROUTES.FACT}>
      <PanelHeaderBack id={`${PANEL_ROUTES.FACT}-back`} />
      <MainHeader id={`${PANEL_ROUTES.FACT}-header`}>Факт</MainHeader>
      <Group>
        <Cell disabled before={<ArticleOutlineIcon />}>
          <div
            style={{ marginLeft: 9, whiteSpace: "normal" }}
            id={`${PANEL_ROUTES.FACT}-article-title`}
            className="article-title"
          >
            <TextSFProRoundedSemibold>{title}</TextSFProRoundedSemibold>
          </div>
        </Cell>
        <Cell
          style={{ marginTop: -10 }}
          disabled
          before={<CalendarOutlineIcon />}
        >
          <div
            style={{ marginLeft: 9 }}
            id={`${PANEL_ROUTES.FACT}-date`}
            className="date"
          >
            {date_txt}
          </div>
        </Cell>
        <Div style={{ marginTop: -10 }} id={`${PANEL_ROUTES.FACT}-article`}>
          <TextSFProRoundedRegular>
            {parse(removeHrefs(text))}
          </TextSFProRoundedRegular>
        </Div>
        <FixedLayout vertical="bottom">
          <div style={{ marginBottom: 55, width: "100%" }} className="center-x">
            <ThemedButton
              onClick={doStory}
              before={<ShareOutlineIcon />}
              id="fact-share"
            >
              Поделиться
            </ThemedButton>
          </div>
        </FixedLayout>
        <Spacing size={130} separator={false} />
        <FixedLayout vertical="bottom">
          {snackbar && <CustomizedSnackbar {...snackbar} />}
        </FixedLayout>
      </Group>
      <div
        id="canvas"
        style={{ width: 0, height: 0, opacity: 0, overflow: "hidden" }}
      >
        <div
          style={{
            fontSize: 96,
            letterSpacing: -1,
            lineHeight: "114px",
            width: 822,
          }}
          className="text__NewYorkLarge-Bold"
          ref={refText}
        >
          {title}
        </div>
        <Stage ref={ref} width={1080} height={1920}>
          <Layer>
            <StoryBg />
            <Rect
              width={976}
              height={1320}
              cornerRadius={44}
              fill="rgba(255, 255, 255, 0.9)"
              x={52}
              y={197}
            />
            <Text
              fontFamily="NewYorkMedium-Medium"
              text="Сегодня в Санкт-Петербурге:"
              x={120}
              y={723.5 - titleHeight / 2}
              letterSpacing={-0.25}
              fontSize={51}
              opacity={0.8}
              fill="rgba(88, 79, 73, 1)"
              width={744}
              height={61}
            />
            <Text
              fontFamily="NewYorkLarge-Bold"
              x={120}
              y={800.5 - titleHeight / 2}
              letterSpacing={-1}
              fontSize={96}
              fill="rgba(88, 79, 73, 1)"
              width={822}
              lineHeight={1.16}
              height={titleHeight}
              text={title}
              ellipsis={true}
            />
            <Rect
              x={120}
              y={848.5 + titleHeight / 2}
              height={4}
              width={840}
              cornerRadius={4}
              opacity={0.1}
              fill="rgba(88, 79, 73, 1)"
            />
            <Text
              x={120}
              y={916.5 + titleHeight / 2}
              height={58}
              width={774}
              letterSpacing={0.25}
              fontSize={48}
              fill="rgba(163, 148, 140, 1)"
              text={date_txt}
            />
            <ChirchIcon y={900 + titleHeight / 2} />
          </Layer>
        </Stage>
        <Stage ref={refSticker} width={976} height={147}>
          <Layer>
            <Rect
              fill="rgba(255, 255, 255, 0.9)"
              width={976}
              height={147}
              cornerRadius={44}
            />
            <Text
              y={48}
              x={223}
              fontSize={42}
              fontFamily="Inter-Semibold"
              fill="rgba(88, 79, 73, 1)"
              text="Заходи за новыми знаниями"
            />
            <ChevronDownIcon />
          </Layer>
        </Stage>
      </div>
    </Panel>
  );
});

const StoryBg = memo(() => {
  const [image] = useImage(storyBg);
  return <Image width={1080} height={1920} image={image} />;
});

const ChirchIcon = memo(({ y }) => {
  const [image] = useImage(chirch);
  return <Image width={53.67} height={90} image={image} x={906.33} y={y} />;
});

const ChevronDownIcon = memo(() => {
  const [image] = useImage(chevron_down);
  return <Image width={24} height={12} image={image} x={167} y={60} />;
});
