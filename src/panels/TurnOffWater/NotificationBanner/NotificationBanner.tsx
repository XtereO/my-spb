import bridge from "@vkontakte/vk-bridge";
import { Group } from "@vkontakte/vkui";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useContext } from "react";
import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getNotifications,
  notificationsActions,
  useEnableNotificationsMutation,
  useGetNotificationsQuery,
} from "../../../bll/notifications";
import { CardHeader, RoundedCard, ThemedButton } from "../../../bricks";
import { NotificationOutlineIcon } from "../../../icons";
import { Notifications } from "../../../types";
import { ThemeContext } from "../../../utils";
import { AddressForm } from "./AddressForm";
import "./NotificationBanner.css";

export const NotificationBanner = memo(() => {
  const { data, isLoading } = useGetNotificationsQuery({});
  const dispatch = useDispatch();
  useEffect(() => {
    if (data) {
      dispatch(notificationsActions.setNotification(data));
    }
  }, [data]);
  if (isLoading) {
    return <></>;
  }
  return <NotificationBannerComponent data={data} />;
});

export const NotificationBannerComponent = memo<{ data?: Notifications }>(
  ({ data }) => {
    const theme = useContext(ThemeContext);
    const [isEditMode, setEditMode] = useState(false);
    const handleOpenEditMode = useCallback(() => {
      setEditMode(true);
    }, []);
    const handleCloseEditMode = useCallback(() => {
      setEditMode(false);
    }, []);
    const notification = useSelector(getNotifications);
    const address: null | string = useMemo(() => {
      if (notification && notification.address.street) {
        return [
          notification.address.city,
          notification.address.district,
          notification.address.street,
          notification.address.house,
          notification.address.korpus,
          notification.address.liter,
        ]
          .filter((n) => !!n)
          .join(", ");
      }
      return null;
    }, [notification.address]);
    const [enableNotifications] = useEnableNotificationsMutation();
    const subscribeNotifications = useCallback(async () => {
      const res = await bridge.send("VKWebAppAllowNotifications");
      if (res.result && address) {
        await enableNotifications({});
      }
    }, [address]);
    return (
      <RoundedCard id="notification-banner">
        <CardHeader
          id="notification-banner-header"
          before={<NotificationOutlineIcon />}
        >
          Уведомления
        </CardHeader>
        {isEditMode && data ? (
          <AddressForm
            closeEditMode={handleCloseEditMode}
            address={{
              ...notification.address,
              city: !!notification.address.city
                ? notification.address.city
                : "Санкт-Петербург",
            }}
          />
        ) : (
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
              {address
                ? "Ваш адрес"
                : "Разрешите нам уведомлять Вас об отключении воды в Вашем доме"}
            </div>
            {address && (
              <div
                id="notification-banner-description"
                style={{ marginTop: 4, color: theme.text }}
                className="text"
              >
                {address}
              </div>
            )}
            <div style={{ marginTop: 10 }}>
              <ThemedButton
                onClick={handleOpenEditMode}
                id={"notification-banner-btn-change"}
              >
                {address ? "Изменить адрес" : "Указать адрес"}
              </ThemedButton>
            </div>
            {address && notification?.address && !notification?.notifications && (
              <div style={{ marginTop: 6 }}>
                <ThemedButton
                  onClick={subscribeNotifications}
                  id={"notification-banner-btn-permission"}
                >
                  Разрешить уведомления
                </ThemedButton>
              </div>
            )}
          </Group>
        )}
      </RoundedCard>
    );
  }
);
