import bridge from "@vkontakte/vk-bridge";
import { FormItem, Group, Input } from "@vkontakte/vkui";
import { Formik } from "formik";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useContext } from "react";
import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getNotifications,
  notificationsActions,
  useEnableNotificationsMutation,
  useGetNotificationsQuery,
  useSetAddressMutation,
} from "../../../bll/notifications";
import { CardHeader, RoundedCard, ThemedButton } from "../../../bricks";
import { NotificationOutlineIcon } from "../../../icons";
import { Address, Notifications } from "../../../types";
import { ThemeContext } from "../../../utils";
import "./NotificationBanner.css";

export const NotificationBanner = memo(() => {
  const theme = useContext(ThemeContext);
  const [isEditMode, setEditMode] = useState(false);
  const { data, isLoading } = useGetNotificationsQuery({});
  const dispatch = useDispatch();
  useEffect(() => {
    if (data) {
      dispatch(notificationsActions.setNotification(data));
    }
  }, [data]);
  const notification = useSelector(getNotifications);
  const address: null | string[] = useMemo(() => {
    if (notification && notification.address.street) {
      return [
        notification.address.city,
        ...Object.keys(notification.address).map((key) => {
          //@ts-ignore
          const title: string = notification.address[key];
          if (key !== "city" && title) {
            return ", " + title;
          }
          return "";
        }),
      ];
    }
    return null;
  }, [notification.address]);
  const handleOpenEditMode = useCallback(() => {
    setEditMode(true);
  }, []);
  const handleCloseEditMode = useCallback(() => {
    setEditMode(false);
  }, []);
  const [enableNotifications] = useEnableNotificationsMutation();
  const subscribeNotifications = useCallback(async () => {
    const res = await bridge.send("VKWebAppAllowNotifications");
    if (res.result && address) {
      await enableNotifications({});
    }
  }, [address]);

  if (isLoading) {
    return <></>;
  }
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
});

type Props = {
  address: Address;
  closeEditMode: () => void;
};
export const AddressForm = memo<Props>(({ address, closeEditMode }) => {
  const [setAddress] = useSetAddressMutation();
  const dispatch = useDispatch();
  return (
    <Formik
      onSubmit={async (values, { setSubmitting }) => {
        //@ts-ignore
        const { data } = await setAddress(values);
        dispatch(notificationsActions.setNotification(data));
        setSubmitting(false);
        closeEditMode();
      }}
      enableReinitialize
      initialValues={address}
    >
      {({ values, handleChange, handleSubmit, isSubmitting }) => {
        return (
          <form onSubmit={handleSubmit}>
            <FormItem top="Город">
              <Input
                disabled={isSubmitting}
                required
                placeholder="Санкт-Петербург"
                name="city"
                type="text"
                value={values.city}
                onChange={handleChange}
              />
            </FormItem>
            <FormItem top="Район">
              <Input
                disabled={isSubmitting}
                required
                placeholder="Василеостровский"
                name="district"
                type="text"
                value={values.district}
                onChange={handleChange}
              />
            </FormItem>
            <FormItem top="Улица">
              <Input
                disabled={isSubmitting}
                required
                placeholder="Железноводская"
                name="street"
                type="text"
                value={values.street}
                onChange={handleChange}
              />
            </FormItem>
            <FormItem top="Дом">
              <Input
                disabled={isSubmitting}
                required
                placeholder="26"
                name="house"
                type="text"
                value={values.house}
                onChange={handleChange}
              />
            </FormItem>
            <FormItem top="Корпус">
              <Input
                disabled={isSubmitting}
                placeholder="2"
                name="korpus"
                type="text"
                value={values.korpus}
                onChange={handleChange}
              />
            </FormItem>
            <FormItem top="Литера">
              <Input
                disabled={isSubmitting}
                placeholder="A"
                name="liter"
                type="text"
                value={values.liter}
                onChange={handleChange}
              />
            </FormItem>
            <div
              style={{ paddingLeft: 16, paddingBottom: 12 }}
              className="d-flex"
            >
              <div style={{ marginRight: 6 }}>
                <ThemedButton type="submit" id={"save"}>
                  Сохранить
                </ThemedButton>
              </div>
              <div>
                <ThemedButton onClick={closeEditMode} id="cancel">
                  Отмена
                </ThemedButton>
              </div>
            </div>
          </form>
        );
      }}
    </Formik>
  );
});
