import { shallow } from "enzyme";
import { FreeWiFiDetailedItem } from "./FreeWiFiDetailedItem";

describe("Test FreeWiFiDetailedItem component", () => {
  let wrapper = shallow(
    <FreeWiFiDetailedItem
      id={"wf"}
      address={"Kamysh"}
      isTurnedOn={false}
      title={"SPB-Free"}
      areaFill={150}
      distance={1231}
    />
  );
  beforeEach(() => {
    wrapper = shallow(
      <FreeWiFiDetailedItem
        id={"wf"}
        address={"Kamysh"}
        isTurnedOn={false}
        title={"SPB-Free"}
        areaFill={150}
        distance={1231}
      />
    );
  });
  test("should render FreeWiFiDetailedItem", () => {
    expect(!!wrapper.find("#wf")).toBe(true);
  });
  test("should render address", () => {
    expect(!!wrapper.find("#wf-address")).toBe(true);
  });
  test("should render status", () => {
    expect(!!wrapper.find("#wf-status")).toBe(true);
  });
  test("should status's text equal to 'Статус: не работает'", () => {
    expect(wrapper.find("#wf-status").text()).toContain("Статус: не работает");
  });
  test("should render title", () => {
    expect(!!wrapper.find("#wf-title")).toBe(true);
  });
  test("should title's text equal to 'Название: SPB-Free'", () => {
    expect(wrapper.find("#wf-title").text()).toContain("Название: SPB-Free");
  });
  test("should render area-fill", () => {
    expect(!!wrapper.find("#wf-area-fill")).toBe(true);
  });
  test("should area-fill's text equal to 'Зона покрытия: 150 метров'", () => {
    expect(wrapper.find("#wf-area-fill").text()).toContain(
      "Зона покрытия: 150 метров"
    );
  });
  test("should render distance", () => {
    expect(!!wrapper.find("#wf-distance")).toBe(true);
  });
  test("should distance's text equal to 'Расстояние от Вас: 1231 метр'", () => {
    expect(wrapper.find("#wf-distance").text()).toContain(
      "Расстояние от Вас: 1231 метр"
    );
  });
  test("should render btn", () => {
    expect(!!wrapper.find("#wf-btn")).toBe(true);
  });
});
