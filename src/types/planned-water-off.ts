export type PlannedWaterOff = {
  address: string;
  dates: [Date, Date];
  city: string;
  house: string;
  korp: string;
  street: string;
};

type Date = { date_on: string; date_off: string };
