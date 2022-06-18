import { PlannedWaterOff } from "../types";

export const getCountDays = (plannedWaterOffs: PlannedWaterOff[]) => {
  let count = 0;
  const nowString = `${new Date().getFullYear()}.${
    new Date().getMonth() + 1
  }.${new Date().getDate()}`;
  const now = new Date(nowString).getTime();
  plannedWaterOffs.forEach(({ dates }) => {
    const mapDates = dates.map(({ date_on, date_off }) => {
      const off = new Date(date_off.slice(0, 10)).getTime();
      const on = new Date(date_on.slice(0, 10)).getTime();
      return off <= now && now <= on;
    });
    if (mapDates.some((m) => m)) {
      count++;
    }
  });
  return count;
};
