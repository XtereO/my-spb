import { shallow } from "enzyme";
import { PANEL_ROUTES } from "../../consts";
import { Offline } from "./Offline";

describe("Test Offline component", () => {
  let wrapper = shallow(<Offline />);
  beforeEach(() => {
    wrapper = shallow(<Offline />);
  });
  test("should render Offline", () => {
    expect(!!wrapper.find(`#${PANEL_ROUTES.OFFLINE}`)).toBe(true);
  });
  test("should render title", () => {
    expect(!!wrapper.find(`#${PANEL_ROUTES.OFFLINE}-title`)).toBe(true);
  });
  test("should title's fontSize equal to 20", () => {
    expect(
      wrapper.find(`#${PANEL_ROUTES.OFFLINE}-title`).props().style
    ).toHaveProperty("fontSize", 20);
  });
  test("should title's text equal to 'Нет подключения'", () => {
    expect(wrapper.find(`#${PANEL_ROUTES.OFFLINE}-title`).text()).toContain(
      "Нет подключения"
    );
  });
  test("should render advice", () => {
    expect(!!wrapper.find(`#${PANEL_ROUTES.OFFLINE}-advice`)).toBe(true);
  });
  test("should advice's fontSize equal to 16", () => {
    expect(
      wrapper.find(`#${PANEL_ROUTES.OFFLINE}-advice`).props().style
    ).toHaveProperty("fontSize", 16);
  });
  test("should advice's color equal to #898989", () => {
    expect(
      wrapper.find(`#${PANEL_ROUTES.OFFLINE}-advice`).props().style
    ).toHaveProperty("color", "#898989");
  });
  test("should advice's text equal to 'Проверьте соединение'", () => {
    expect(wrapper.find(`#${PANEL_ROUTES.OFFLINE}-advice`).text()).toContain(
      "Проверьте соединение"
    );
  });
  test("should render button", () => {
    expect(!!wrapper.find(`#${PANEL_ROUTES.OFFLINE}-btn`)).toBe(true);
  });
  test("should button's style", () => {
    expect(
      wrapper.find(`#${PANEL_ROUTES.OFFLINE}-advice`).props()
    ).toHaveProperty("style", {
      borderRadius: 10,
      color: "#4475F1",
      background: "rgba(68, 117, 241, 0.1)",
      height: 36,
      width: 176,
      border: "none",
      fontSize: 15,
      alignItems: "center",
    });
  });
  test("should render snackbar", () => {
    expect(!!wrapper.find(`#${PANEL_ROUTES.OFFLINE}-snackbar`)).toBe(true);
  });
});
