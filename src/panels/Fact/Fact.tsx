import { Cell, Div, Group, Panel, PanelHeader } from "@vkontakte/vkui";
import { memo } from "react";
import parse from "html-react-parser";
import { MainHeader, PanelHeaderBack } from "../../bricks";
import { PANEL_ROUTES } from "../../consts";
import { ArticleOutlineIcon, CalendarOutlineIcon } from "../../icons";
import "./Fact.css";
import { useSelector } from "react-redux";
import { getFact } from "../../bll/fact";

export const Fact = memo(() => {
  const { title, date_txt, text } = useSelector(getFact);
  return (
    <Panel id={PANEL_ROUTES.FACT}>
      <PanelHeaderBack id={`${PANEL_ROUTES.FACT}-back`} />
      <MainHeader id={`${PANEL_ROUTES.FACT}-header`}>Факт</MainHeader>
      <Group>
        <Cell disabled before={<ArticleOutlineIcon />}>
          <div
            style={{ marginLeft: 9 }}
            id={`${PANEL_ROUTES.FACT}-article-title`}
            className="article-title"
          >
            {title}
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
          {parse(text)}
        </Div>
      </Group>
    </Panel>
  );
});
