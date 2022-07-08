import { store } from "./store";

describe("Test store", () => {
  test("Is main reducer exist", () => {
    expect(!!store.getState()["main"]).toBe(true);
  });
  test("Is map reducer exist", () => {
    expect(!!store.getState()["map"]).toBe(true);
  });
  test("Is fact reducer exist", () => {
    expect(!!store.getState()["fact"]).toBe(true);
  });
  test("Is freeWifi reducer exist", () => {
    expect(!!store.getState()["freeWifi"]).toBe(true);
  });
  test("Is turnOffWater reducer exist", () => {
    expect(!!store.getState()["turnOffWater"]).toBe(true);
  });
  test("Is notifications reducer exist", () => {
    expect(!!store.getState()["notifications"]).toBe(true);
  });
  test("Is beautifulPlace reducer exist", () => {
    expect(!!store.getState()["beautifulPlace"]).toBe(true);
  });
  test("Is bridgeConstruction reducer exist", () => {
    expect(!!store.getState()["bridgeConstruction"]).toBe(true);
  });
  test("Is factApi reducer exist", () => {
    expect(!!store.getState()["factApi"]).toBe(true);
  });
  test("Is freeWifiApi reducer exist", () => {
    expect(!!store.getState()["freeWifiApi"]).toBe(true);
  });
  test("Is turnOffWaterApi reducer exist", () => {
    expect(!!store.getState()["turnOffWaterApi"]).toBe(true);
  });
  test("Is notificationsApi reducer exist", () => {
    expect(!!store.getState()["notificationsApi"]).toBe(true);
  });
  test("Is beautifulPlaceApi reducer exist", () => {
    expect(!!store.getState()["beautifulPlaceApi"]).toBe(true);
  });
  test("Is bridgeConstructionApi reducer exist", () => {
    expect(!!store.getState()["bridgeConstructionApi"]).toBe(true);
  });
});
