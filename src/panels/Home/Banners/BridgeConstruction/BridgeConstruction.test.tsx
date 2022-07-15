import { mount } from "enzyme";
import { Provider } from "react-redux";
import { store } from "../../../../bll/store";
import { BridgeConstruction } from "./BridgeConstruction";

describe("Test BridgeConstructionBanner component", () => {
  let wrapper = mount(
    <Provider store={store}>
      <BridgeConstruction
        onClick={jest.fn}
        data={[
          {
            numbe: 1,
            name: "Dvorcovyi",
            time_first_wiring: "2.15",
            the_first_arch: "3.00",
            the_second_wiring: "-",
            the_second_arch: "-",
            coordinates: [60, 30],
          },
        ]}
      />
    </Provider>
  );
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <BridgeConstruction
          onClick={jest.fn}
          data={[
            {
              numbe: 1,
              name: "Dvorcovyi",
              time_first_wiring: "2.15",
              the_first_arch: "3.00",
              the_second_wiring: "-",
              the_second_arch: "-",
              coordinates: [60, 30],
            },
          ]}
        />
      </Provider>
    );
  });
  test("should render BrdigeConstruction", () => {
    expect(
      wrapper.find("#bridge-construction").first().isEmptyRender()
    ).toBeFalsy();
  });
  test("should render CarOutlineIcon", () => {
    expect(
      wrapper.find("#bridge-construction-icon").first().isEmptyRender()
    ).toBeFalsy();
  });
  test("should render bridge-construction-title", () => {
    expect(
      wrapper.find("#bridge-construction-title").first().isEmptyRender()
    ).toBeFalsy();
  });
  test("should bridge-construction-title's text equal to Развод мостов", () => {
    expect(wrapper.find("#bridge-construction-title").first().text()).toBe(
      "Развод мостов"
    );
  });
  test("should bridge-construction-title's className equal to heading", () => {
    expect(
      wrapper.find("#bridge-construction-title").first().props()
    ).toHaveProperty("className", "heading");
  });
  test("should bridge-construction-title's color equal to #000", () => {
    expect(
      wrapper.find("#bridge-construction-title").first().props().style
    ).toHaveProperty("color", "#000");
  });
  test("should render bridge-construction-name", () => {
    expect(
      wrapper.find("#bridge-construction-name").first().isEmptyRender()
    ).toBeFalsy();
  });
  test("should bridge-construction-name's className equal to text", () => {
    expect(
      wrapper.find("#bridge-construction-name").first().props()
    ).toHaveProperty("className", "text");
  });
  test("should bridge-construction-name's color equal to #A4A6AA", () => {
    expect(
      wrapper.find("#bridge-construction-name").first().props().style
    ).toHaveProperty("color", "#A4A6AA");
  });
  test("should render bridge-construction-time", () => {
    expect(
      wrapper.find("#bridge-construction-time").first().isEmptyRender()
    ).toBeFalsy();
  });
  test("should bridge-construction-time's className equal to 'text center-y'", () => {
    expect(
      wrapper.find("#bridge-construction-time").first().props()
    ).toHaveProperty("className", "text center-y");
  });
  test("should bridge-construction-time's color equal to #A4A6AA", () => {
    expect(
      wrapper.find("#bridge-construction-time").first().props().style
    ).toHaveProperty("color", "#A4A6AA");
  });
  test("should render bridge-construction-btn", () => {
    expect(
      wrapper.find("#bridge-construction-btn").first().isEmptyRender()
    ).toBeFalsy();
  });
});
