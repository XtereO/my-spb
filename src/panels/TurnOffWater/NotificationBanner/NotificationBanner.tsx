import { Group } from "@vkontakte/vkui";
import { useCallback } from "react";
import { useContext } from "react";
import { memo } from "react";
import { useDispatch } from "react-redux";
import { mainActions } from "../../../bll/main";
import { CardHeader, RoundedCard, ThemedButton } from "../../../bricks";
import { PANEL_ROUTES } from "../../../consts";
import { NotificationOutlineIcon } from "../../../icons";
import { ThemeContext } from "../../../utils";
import "./NotificationBanner.css";

export const NotificationBanner = memo(() => {
  const theme = useContext(ThemeContext);
  const dispatch = useDispatch();
  const handleClick = useCallback(() => {
    dispatch(mainActions.setActivePanel(PANEL_ROUTES.NOTIFICATION));
  }, []);
  return (
    <RoundedCard id="notification-banner">
      <CardHeader
        id="notification-banner-header"
        before={<NotificationOutlineIcon />}
      >
        Уведомления
      </CardHeader>
      <Group
        style={{
          paddingRight: 16,
          paddingLeft: 16,
          marginTop: -16,
          paddingBottom: 4,
        }}
      >
        <div
          id="notification-banner-title"
          style={{ color: theme.heading }}
          className="heading"
        >
          Ваш адрес:
        </div>
        <div
          id="notification-banner-description"
          style={{ marginTop: 4, color: theme.text }}
          className="text"
        >
          Kamysh 21
        </div>
        <div style={{ marginTop: 10 }}>
          <ThemedButton
            onClick={handleClick}
            id={"notification-banner-btn-change"}
          >
            Изменить адрес
          </ThemedButton>
        </div>
        <div style={{ marginTop: 6 }}>
          <ThemedButton id={"notification-banner-btn-permission"}>
            Разрешить уведомления
          </ThemedButton>
        </div>
      </Group>
    </RoundedCard>
  );
});
