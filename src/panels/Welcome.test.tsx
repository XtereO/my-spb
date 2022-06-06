import { shallow } from "enzyme";
import { PANEL_ROUTES } from "../consts";
import { Welcome } from "./Welcome";

describe("Test Welcome Component", () => {
  let wrapper = shallow(<Welcome />);
  beforeEach(() => {
    wrapper = shallow(<Welcome />);
  });
  test("should render Welcome", () => {
    expect(!!wrapper.find(`#${PANEL_ROUTES.WELCOME}`)).toBe(true);
  });
  test("should render AppIcon", () => {
    expect(!!wrapper.find(`#${PANEL_ROUTES.WELCOME}-AppIcon`)).toBe(true);
  });
  test("should AppIcon has got marginTop 172px", () => {
    expect(
      wrapper.find(`#${PANEL_ROUTES.WELCOME}-AppIcon`).props().style
    ).toHaveProperty("marginTop", 86);
  });
  test("should render Heading", () => {
    expect(!!wrapper.find(`#${PANEL_ROUTES.WELCOME}-heading`)).toBe(true);
  });
  test("should render heading with name app", () => {
    expect(wrapper.find(`#${PANEL_ROUTES.WELCOME}-heading`).text()).toBe(
      "Мой Петербург"
    );
  });
  test("should heading has got className 'heading center-x'", () => {
    expect(
      wrapper.find(`#${PANEL_ROUTES.WELCOME}-heading`).props()
    ).toHaveProperty("className", "heading center-x");
  });
  test("should heading has got color #000", () => {
    expect(
      wrapper.find(`#${PANEL_ROUTES.WELCOME}-heading`).props().style
    ).toHaveProperty("color", "#000");
  });
  test("should render description", () => {
    expect(!!wrapper.find(`#${PANEL_ROUTES.WELCOME}-description`)).toBe(true);
  });
  test("should description has got className 'text center-x'", () => {
    expect(
      wrapper.find(`#${PANEL_ROUTES.WELCOME}-description`).props()
    ).toHaveProperty("className", "text center-x");
  });
  test("should description has got color #000", () => {
    expect(
      wrapper.find(`#${PANEL_ROUTES.WELCOME}-description`).props().style
    ).toHaveProperty("color", "#A4A6AA");
  });
  test("should render button", () => {
    expect(!!wrapper.find(`#${PANEL_ROUTES.WELCOME}-btn`)).toBe(true);
  });
  test("should render button's text", () => {
    expect(wrapper.find(`${PANEL_ROUTES.WELCOME}-btn`).text()).toBe("Вперёд!");
  });
  test("should button's width equal to 175px", () => {
    expect(
      wrapper.find(`${PANEL_ROUTES.WELCOME}-btn`).props().style
    ).toHaveProperty("width", 175);
  });
  test("should button's background equal to #C3CBD8", () => {
    expect(
      wrapper.find(`${PANEL_ROUTES.WELCOME}-btn`).props().style
    ).toHaveProperty("background", "#C3CBD8");
  });
  test("should button's text color equal to #fff", () => {
    expect(
      wrapper.find(`${PANEL_ROUTES.WELCOME}-btn`).props().style
    ).toHaveProperty("color", "#fff");
  });
});
