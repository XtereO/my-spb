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
    ).toHaveProperty("marginTop", 172);
  });
  test("should render Heading", () => {
    expect(!!wrapper.find(`#${PANEL_ROUTES.WELCOME}-Heading`)).toBe(true);
  });
  test("should render Heading with name app", () => {
    expect(wrapper.find(`#${PANEL_ROUTES.WELCOME}-Heading`).text()).toBe(
      "Мой Петербург"
    );
  });
  test("should Heading has got marginTop 32px", () => {
    expect(
      wrapper.find(`#${PANEL_ROUTES.WELCOME}-Heading`).props().style
    ).toHaveProperty("marginTop", 32);
  });
  test("should Heading has got className 'heading center-x'", () => {
    expect(
      wrapper.find(`#${PANEL_ROUTES.WELCOME}-Heading`).props()
    ).toHaveProperty("className", "heading center-x");
  });
  test("should Heading has got color #000", () => {
    expect(
      wrapper.find(`#${PANEL_ROUTES.WELCOME}-Heading`).props().style
    ).toHaveProperty("color", "#000");
  });
});
