import { shallow } from "enzyme";
import { PANEL_ROUTES } from "../../consts";
import { Home } from "./Home";

describe("Test Home component", () => {
  let wrapper = shallow(<Home />);
  beforeEach(() => {
    wrapper = shallow(<Home />);
  });
  test("should render Home", () => {
    expect(!!wrapper.find(`#${PANEL_ROUTES.HOME}`)).toBe(true);
  });
  test("should render header", () => {
    expect(!!wrapper.find(`#${PANEL_ROUTES.HOME}-header`)).toBe(true);
  });
});
