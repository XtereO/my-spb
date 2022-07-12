import { shallow } from "enzyme";
import { PANEL_ROUTES } from "../../consts";
import { Offline } from "./Offline";

describe("Test Offline component", () => {
  let wrapper = shallow(<Offline />);
  beforeEach(() => {
    wrapper = shallow(<Offline />);
  });
  test("should render Offline", () => {
    expect(
      wrapper.find(`#${PANEL_ROUTES.OFFLINE}`).isEmptyRender()
    ).toBeFalsy();
  });
  test("should render title", () => {
    expect(
      wrapper.find(`#${PANEL_ROUTES.OFFLINE}-title`).isEmptyRender()
    ).toBeFalsy();
  });
  test("should title's fontSize equal to 24", () => {
    expect(
      wrapper.find(`#${PANEL_ROUTES.OFFLINE}-title`).props().style
    ).toHaveProperty("fontSize", 24);
  });
  test("should title's text equal to 'Нет подключения'", () => {
    expect(wrapper.find(`#${PANEL_ROUTES.OFFLINE}-title`).text()).toContain(
      "Нет подключения"
    );
  });
  test("should render advice", () => {
    expect(
      wrapper.find(`#${PANEL_ROUTES.OFFLINE}-advice`).isEmptyRender()
    ).toBeFalsy();
  });
  test("should advice's fontSize equal to 15", () => {
    expect(
      wrapper.find(`#${PANEL_ROUTES.OFFLINE}-advice`).props().style
    ).toHaveProperty("fontSize", 15);
  });
  test("should advice's color equal to #A4A6AA", () => {
    expect(
      wrapper.find(`#${PANEL_ROUTES.OFFLINE}-advice`).props().style
    ).toHaveProperty("color", "#A4A6AA");
  });
  test("should advice's text equal to 'Мы потеряли'", () => {
    expect(wrapper.find(`#${PANEL_ROUTES.OFFLINE}-advice`).text()).toContain(
      "Мы потеряли"
    );
  });
});
