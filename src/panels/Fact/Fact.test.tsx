import { mount } from "enzyme";
import { Provider } from "react-redux";
import { store } from "../../bll/store";
import { PANEL_ROUTES } from "../../consts";
import { Fact } from "./Fact";

describe("Test Fact component", () => {
  let wrapper = mount(
    <Provider store={store}>
      <Fact />
    </Provider>
  );
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <Fact />
      </Provider>
    );
  });
  test("should render Fact", () => {
    expect(
      wrapper.find(`#${PANEL_ROUTES.FACT}`).first().isEmptyRender()
    ).toBeFalsy();
  });
  test("should render back", () => {
    expect(
      wrapper.find(`#${PANEL_ROUTES.FACT}-back`).first().isEmptyRender()
    ).toBeFalsy();
  });
  test("should render header", () => {
    expect(
      wrapper.find(`#${PANEL_ROUTES.FACT}-header`).first().isEmptyRender()
    ).toBeFalsy();
  });
  test("should render article-title", () => {
    expect(
      wrapper
        .find(`#${PANEL_ROUTES.FACT}-article-title`)
        .first()
        .isEmptyRender()
    ).toBeFalsy();
  });
  test("should article-title's className equal to article-title", () => {
    expect(
      wrapper.find(`#${PANEL_ROUTES.FACT}-article-title`).first().props()
    ).toHaveProperty("className", "article-title");
  });
  test("should render date", () => {
    expect(
      wrapper.find(`#${PANEL_ROUTES.FACT}-date`).first().isEmptyRender()
    ).toBeFalsy();
  });
  test("should article-date's className equal to date", () => {
    expect(
      wrapper.find(`#${PANEL_ROUTES.FACT}-date`).first().props()
    ).toHaveProperty("className", "date");
  });
  test("should render article", () => {
    expect(
      wrapper.find(`#${PANEL_ROUTES.FACT}-article`).first().isEmptyRender()
    ).toBeFalsy();
  });
});
