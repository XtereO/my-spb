import { Cell, Div, Group, Panel, PanelHeader } from "@vkontakte/vkui";
import { memo } from "react";
import parse from "html-react-parser";
import { MainHeader, PanelHeaderBack } from "../../bricks";
import { PANEL_ROUTES } from "../../consts";
import { ArticleOutline, CalendarOutline } from "../../icons";
import "./Fact.css";

export const Fact = memo(() => {
  return (
    <Panel id={PANEL_ROUTES.FACT}>
      <PanelHeaderBack id={`${PANEL_ROUTES.FACT}-back`} />
      <MainHeader id={`${PANEL_ROUTES.FACT}-header`}>Факт</MainHeader>
      <Group>
        <Cell disabled before={<ArticleOutline />}>
          <div
            style={{ marginLeft: 9 }}
            id={`${PANEL_ROUTES.FACT}-article-title`}
            className="article-title"
          >
            Super puper fact!
          </div>
        </Cell>
        <Cell style={{ marginTop: -10 }} disabled before={<CalendarOutline />}>
          <div
            style={{ marginLeft: 9 }}
            id={`${PANEL_ROUTES.FACT}-date`}
            className="date"
          >
            03.02
          </div>
        </Cell>
        <Div style={{ marginTop: -10 }} id={`${PANEL_ROUTES.FACT}-article`}>
          {parse("<a>Blue text</a> other text")}
        </Div>
      </Group>
    </Panel>
  );
});
