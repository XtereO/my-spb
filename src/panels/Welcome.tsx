import { Div, Panel } from "@vkontakte/vkui";
import { useContext } from "react";
import { memo } from "react";
import { PANEL_ROUTES } from "../consts";
import { ThemeContext } from "../utils";
import AppIcon from "../assets/AppIcon.svg";

export const Welcome = memo(() => {
  const theme = useContext(ThemeContext);
  return (
    <Panel id={PANEL_ROUTES.WELCOME}>
      <img
        src={AppIcon}
        id={`${PANEL_ROUTES.WELCOME}-AppIcon`}
        style={{ marginTop: 172 }}
      />
      <Div
        id={`${PANEL_ROUTES.WELCOME}-Heading`}
        className="heading center-x"
        style={{ color: theme.heading, marginTop: 32 }}
      >
        Мой Петербург
      </Div>
    </Panel>
  );
});
