import { BridgeConstruction } from "../types";
import { sortByKey } from "./sortByKey";
import { toFullTime } from "./toFullTime";

export const sortBridgeByTime = (
  bridges: BridgeConstruction[]
): { bridges: BridgeConstruction[]; time: string } => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const startMinutes = hours * 60 + minutes;
  const sortedBridges = bridges
    .map((b) => ({
      ...b,
      difTime: getMinDifTimeBridge(startMinutes, b),
    }))
    .sort(sortByKey("difTime"));
  const firstBridge = sortedBridges[0];
  let time = `${toFullTime(firstBridge.time_first_wiring)}-${toFullTime(
    firstBridge.the_first_arch
  )}`;
  if (
    firstBridge.difTime ===
      difTimes(startMinutes, hmToMinutes(firstBridge.the_second_wiring)) ||
    firstBridge.difTime ===
      difTimes(startMinutes, hmToMinutes(firstBridge.the_second_arch))
  ) {
    time = `${toFullTime(firstBridge.the_second_wiring)}-${toFullTime(
      firstBridge.the_second_arch
    )}`;
  }
  return { time, bridges: sortedBridges };
};

const getMinDifTimeBridge = (startTime: number, bridge: BridgeConstruction) => {
  let difs: number[] = [];
  const times = [
    bridge.the_first_arch,
    bridge.the_second_arch,
    bridge.the_second_wiring,
    bridge.time_first_wiring,
  ];
  times.forEach((t) =>
    difs.push(isTime(t) ? difTimes(startTime, hmToMinutes(t)) : 48 * 60)
  );
  return Math.min(...difs);
};
const hmToMinutes = (date: string): number => {
  try {
    return tryHmToMinutes(date);
  } catch (e) {
    return Infinity;
  }
};
const tryHmToMinutes = (date: string): number => {
  const [hours, minutes] = date.split(".");
  return Number(hours) * 60 + Number(minutes);
};

const difTimes = (d1: number, d2: number) => {
  const dif = d2 - d1;
  if (dif < 0) {
    return dif + 24 * 60;
  }
  return dif;
};

const isTime = (time: string | null) => {
  return time && time !== "-" ? true : false;
};
