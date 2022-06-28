import { Notifications } from "../../types";
import { notificationsActions, notificationsReducer } from "./reducer";

describe("Test notifications reducer", () => {
  test("should handle a notification and set", () => {
    const notification: Notifications = {
      id: "123",
      address: {
        city: "SPb",
        district: "Sea",
        street: "Kamysh",
        house: "21",
        korpus: "2",
        liter: "A",
      },
      notifications: false,
    };
    expect(
      notificationsReducer(
        undefined,
        notificationsActions.setNotification(notification)
      )
    ).toStrictEqual(notification);
  });
});
