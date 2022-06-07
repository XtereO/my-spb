import {
  Div,
  Group,
  Panel,
  PanelHeader,
} from "@vkontakte/vkui";
import { useContext } from "react";
import { Fragment } from "react";
import { memo } from "react";
import { PANEL_ROUTES } from "../../consts";
import { ThemeContext } from "../../utils";
import { Fact } from "./Banners";
import "./Home.css";

export const Home = memo(() => {
  const theme = useContext(ThemeContext);
  return (
    <Panel id={PANEL_ROUTES.HOME}>
      <Fragment>
        <PanelHeader
          separator={false}
          id={`${PANEL_ROUTES.HOME}-panel-header`}
          style={{ color: theme.heading }}
        >
          Главная
        </PanelHeader>
        <Group>
          <Div>
            <Fact />
          </Div>
        </Group>
      </Fragment>
    </Panel>
  );
});
