import { Button, Div, Group, Header, Panel } from "@vkontakte/vkui";
import { useContext } from "react";
import { memo } from "react";
import { PANEL_ROUTES, STORAGE_KEYS } from "../../consts";
import { setValueByKeyVKBridge, ThemeContext } from "../../utils";
import { Fragment } from "react";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { mainActions } from "../../bll/main";
import { AppIcon } from "../../icons";
import "./Welcome.css";
import {
  TextInterSemibold,
  TextSFProRoundedLight,
  TextSFProRoundedSemibold,
} from "../../bricks";

export const Welcome = memo(() => {
  const theme = useContext(ThemeContext);
  const dispatch = useDispatch();
  const handleClick = useCallback(async () => {
    const { result } = await setValueByKeyVKBridge(
      "true",
      STORAGE_KEYS.IS_CHECK_WELCOME
    );
    if (result) {
      dispatch(mainActions.setActivePanel(PANEL_ROUTES.HOME));
    }
  }, []);
  return (
    <Panel id={PANEL_ROUTES.WELCOME}>
      <Fragment>
        <Group>
          <Div
            className="center-x"
            id={`${PANEL_ROUTES.WELCOME}-AppIcon`}
            style={{ marginTop: 86 }}
          >
            <AppIcon />
          </Div>
          <Header
            id={`${PANEL_ROUTES.WELCOME}-heading`}
            className="heading center-x"
            style={{ color: theme.heading }}
          >
            <TextSFProRoundedSemibold>Мой Петербург</TextSFProRoundedSemibold>
          </Header>
          <Div
            id={`${PANEL_ROUTES.WELCOME}-description`}
            className="text center-x"
            style={{ color: theme.text, textAlign: "center", letterSpacing: -0.24 }}
          >
            <TextSFProRoundedLight>
              Расскажем где бесплатный Wi-Fi, куда можно сходить прогуляться.
              Подскажем когда выключат воду в твоём доме. И немного фактов и
              памятных дат в твоём любимом Санкт-Петербурге
            </TextSFProRoundedLight>
          </Div>
          <Div className="center-x">
            <Button
              id={`${PANEL_ROUTES.WELCOME}-btn`}
              onClick={handleClick}
              size="l"
              style={{
                background: theme.btnBgWelcome,
                color: theme.btnTextWelcome,
                width: 175,
                letterSpacing: -0.41,
              }}
            >
              <TextInterSemibold>Вперёд!</TextInterSemibold>
            </Button>
          </Div>
        </Group>
      </Fragment>
    </Panel>
  );
});
