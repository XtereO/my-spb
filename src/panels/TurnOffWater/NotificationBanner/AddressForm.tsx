import { FormItem, Input } from "@vkontakte/vkui";
import { Formik } from "formik";
import { memo } from "react";
import { useDispatch } from "react-redux";
import {
  notificationsActions,
  useSetAddressMutation,
} from "../../../bll/notifications";
import { TextSFProTextRegular, ThemedButton } from "../../../bricks";
import { Address } from "../../../types";

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
            <TextSFProTextRegular>
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
            </TextSFProTextRegular>
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
