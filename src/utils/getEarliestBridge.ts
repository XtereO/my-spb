import { BridgeConstruction } from "../types";
import { toFullTime } from "./toFullTime";

export const getEarlistBridge = (
  bridges: BridgeConstruction[]
): { bridge: BridgeConstruction; time: string } => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const totalMinutes = hours * 60 + minutes;
  let minDif = 24 * 60;
  let earlistBridge = { ...bridges[0] };
  let time = "";
  bridges.forEach((b) => {
    const dif1 = checkLessZero(totalMinutes - hmToMinutes(b.the_first_arch));
    const dif2 = checkLessZero(totalMinutes - hmToMinutes(b.the_second_arch));
    const dif3 = checkLessZero(totalMinutes - hmToMinutes(b.time_first_wiring));
    const dif4 = checkLessZero(totalMinutes - hmToMinutes(b.the_second_wiring));
    const dif = Math.min(dif1, dif2, dif3, dif4);
    if (minDif > dif) {
      minDif = dif;
      earlistBridge = { ...b };
      if (dif1 === dif || dif3 === dif) {
        time = `${toFullTime(b.time_first_wiring)}-${toFullTime(
          b.the_first_arch
        )}`;
      } else {
        time = `${toFullTime(b.the_second_wiring)}-${toFullTime(
          b.the_second_arch
        )}`;
      }
    }
  });

  return { bridge: earlistBridge, time };
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

const checkLessZero = (num: number) => {
  if (num < 0) {
    return Infinity;
  }
  return num;
};
