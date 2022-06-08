import { shallow } from "enzyme";
import { PANEL_ROUTES } from "../../consts";
import { Fact } from "./Fact";

describe("Test Fact component", () => {
  let wrapper = shallow(<Fact />);
  beforeEach(() => {
    wrapper = shallow(<Fact />);
  });
  test("should render Fact", () => {
    expect(!!wrapper.find(`#${PANEL_ROUTES.FACT}`)).toBe(true);
  });
  test("should render back", () => {
    expect(!!wrapper.find(`#${PANEL_ROUTES.FACT}-back`)).toBe(true);
  });
  test("should render header", () => {
    expect(!!wrapper.find(`#${PANEL_ROUTES.FACT}-header`)).toBe(true);
  });
  test("should render article-title", () => {
    expect(!!wrapper.find(`#${PANEL_ROUTES.FACT}-article-title`)).toBe(true);
  });
  test("should article-title's className equal to article-title", () => {
    expect(
      wrapper.find(`#${PANEL_ROUTES.FACT}-article-title`).props()
    ).toHaveProperty("className", "article-title");
  });
  test("should render date", () => {
    expect(!!wrapper.find(`#${PANEL_ROUTES.FACT}-date`)).toBe(true);
  });
  test("should article-date's className equal to date", () => {
    expect(
      wrapper.find(`#${PANEL_ROUTES.FACT}-article-date`).props()
    ).toHaveProperty("className", "date");
  });
  test("should render article",()=>{
    expect(!!wrapper.find(`#${PANEL_ROUTES.FACT}-article`)).toBe(true)
  })
});
