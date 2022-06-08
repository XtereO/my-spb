import { shallow } from "enzyme";
import { FreeWiFi } from "./FreeWiFi";

describe("Test FreeWiFiBanner component", () => {
  let wrapper = shallow(<FreeWiFi />);
  beforeEach(() => {
    wrapper = shallow(<FreeWiFi />);
  });
  test("should render FreeWiFi", () => {
    expect(!!wrapper.find("#free-wifi")).toBe(true);
  });
  test("should render free-wifi-header", () => {
    expect(!!wrapper.find("#free-wifi-header")).toBe(true);
  });
  test("should render free-wifi-items", () => {
    expect(!!wrapper.find("#free-wifi-items")).toBe(true);
  });
  test("should render free-wifi-btn", () => {
    expect(!!wrapper.find("#free-wifi-btn")).toBe(true);
  });
});
