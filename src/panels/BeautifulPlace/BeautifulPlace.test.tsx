import { shallow } from "enzyme";
import { PANEL_ROUTES } from "../../consts";
import { BeautifulPlace } from "./BeautifulPlace";

describe("Test BeautifulPlace component", () => {
  let wrapper = shallow(<BeautifulPlace />);
  beforeEach(() => {
    wrapper = shallow(<BeautifulPlace />);
  });
  test("should render BeautifulPlace", () => {
    expect(!!wrapper.find(`#${PANEL_ROUTES.BEAUTIFUL_PLACE}`)).toBe(true);
  });
  test("should render back", () => {
    expect(!!wrapper.find(`#${PANEL_ROUTES.BEAUTIFUL_PLACE}-back`)).toBe(true);
  });
  test("should render header", () => {
    expect(!!wrapper.find(`#${PANEL_ROUTES.BEAUTIFUL_PLACE}-header`)).toBe(
      true
    );
  });
  test("should render filter", () => {
    expect(!!wrapper.find(`#${PANEL_ROUTES.BEAUTIFUL_PLACE}-filter`)).toBe(
      true
    );
  });
  test("should render list", () => {
    expect(!!wrapper.find(`#${PANEL_ROUTES.BEAUTIFUL_PLACE}-list`)).toBe(true);
  });
});
