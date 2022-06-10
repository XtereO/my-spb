import { FormItem, Group, Input } from "@vkontakte/vkui";
import { Formik } from "formik";
import { useCallback, useState } from "react";
import { useContext } from "react";
import { memo } from "react";
import { CardHeader, RoundedCard, ThemedButton } from "../../../bricks";
import { NotificationOutlineIcon } from "../../../icons";
import { ThemeContext } from "../../../utils";
import "./NotificationBanner.css";

export const NotificationBanner = memo(() => {
  const theme = useContext(ThemeContext);
  const [isEditMode, setEditMode] = useState(false);
  const handleOpenEditMode = useCallback(() => {
    setEditMode(true);
  }, []);
  const handleCloseEditMode = useCallback(() => {
    setEditMode(false);
  }, []);
  return (
    <RoundedCard id="notification-banner">
      <CardHeader
        id="notification-banner-header"
        before={<NotificationOutlineIcon />}
      >
        Уведомления
      </CardHeader>
      {isEditMode ? (
        <AddressForm closeEditMode={handleCloseEditMode} />
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
              onClick={handleOpenEditMode}
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
      )}
    </RoundedCard>
  );
});

type Props = {
  closeEditMode: () => void;
};
export const AddressForm = memo<Props>(({ closeEditMode }) => {
  return (
    <Formik
      onSubmit={(values) => {
        closeEditMode();
      }}
      initialValues={{
        city: "Санкт-Петербург",
        area: "",
        street: "",
        appt: "",
        building: "",
        litera: "",
      }}
    >
      {({ values, handleChange, handleSubmit }) => {
        return (
          <form onSubmit={handleSubmit}>
            <FormItem top="Город">
              <Input
                name="city"
                type="text"
                value={values.city}
                onChange={handleChange}
              />
            </FormItem>
            <FormItem top="Район">
              <Input
                name="area"
                type="text"
                value={values.area}
                onChange={handleChange}
              />
            </FormItem>
            <FormItem top="Улица">
              <Input
                name="street"
                type="text"
                value={values.street}
                onChange={handleChange}
              />
            </FormItem>
            <FormItem top="Дом">
              <Input
                name="appt"
                type="text"
                value={values.appt}
                onChange={handleChange}
              />
            </FormItem>
            <FormItem top="Корпус">
              <Input
                name="building"
                type="text"
                value={values.building}
                onChange={handleChange}
              />
            </FormItem>
            <FormItem top="Литера">
              <Input
                name="litera"
                type="text"
                value={values.litera}
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
                <ThemedButton id="cancel">Отмена</ThemedButton>
              </div>
            </div>
          </form>
        );
      }}
    </Formik>
  );
});
