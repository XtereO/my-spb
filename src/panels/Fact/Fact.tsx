import { Cell, Div, Group, Panel } from "@vkontakte/vkui";
import { memo } from "react";
import parse from "html-react-parser";
import {
  MainHeader,
  PanelHeaderBack,
  TextSFProRoundedRegular,
  TextSFProRoundedSemibold,
} from "../../bricks";
import { PANEL_ROUTES } from "../../consts";
import { ArticleOutlineIcon, CalendarOutlineIcon } from "../../icons";
import "./Fact.css";
import { useSelector } from "react-redux";
import { getFact } from "../../bll/fact";
import { removeHrefs } from "../../utils";

export const Fact = memo(() => {
  const { title, date_txt, text } = useSelector(getFact);
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
      </Group>
    </Panel>
  );
});
