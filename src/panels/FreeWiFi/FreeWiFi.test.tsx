import { shallow } from "enzyme";
import { PANEL_ROUTES } from "../../consts";
import { FreeWiFi } from "./FreeWiFi";

describe("Test FreeWiFi component", () => {
  let wrapper = shallow(<FreeWiFi />);
  beforeEach(() => {
    wrapper = shallow(<FreeWiFi />);
  });
  test("should render FreeWiFi", () => {
    expect(!!wrapper.find(`#${PANEL_ROUTES.FREE_WIFI}`)).toBe(true);
  });
  test("should render back", () => {
    expect(!!wrapper.find(`#${PANEL_ROUTES.FREE_WIFI}-back`)).toBe(true);
  });
  test("should render header", () => {
    expect(!!wrapper.find(`#${PANEL_ROUTES.FREE_WIFI}-header`)).toBe(
      true
    );
  });
  test("should render filter", () => {
    expect(!!wrapper.find(`#${PANEL_ROUTES.FREE_WIFI}-filter`)).toBe(
      true
    );
  });
  test("should render list", () => {
    expect(!!wrapper.find(`#${PANEL_ROUTES.FREE_WIFI}-list`)).toBe(true);
  });
});
