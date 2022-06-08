import { shallow } from "enzyme";
import { BeautifulPlace } from "./BeautifulPlace";

describe("Test BeautifulPlaceBanner component", () => {
  let wrapper = shallow(<BeautifulPlace />);
  beforeEach(() => {
    wrapper = shallow(<BeautifulPlace />);
  });
  test("should render beautiful-place", () => {
    expect(!!wrapper.find("#beautiful-place")).toBe(true);
  });
  test("should render beautiful-place-header", () => {
    expect(!!wrapper.find("#beautiful-place-header")).toBe(true);
  });
  test("should render hoizontal-scroll", () => {
    expect(!!wrapper.find("#horizontal-scroll")).toBe(true);
  });
  test("should render beautiful-place-btn", () => {
    expect(!!wrapper.find("#beautiful-place-btn")).toBe(true);
  });
});
