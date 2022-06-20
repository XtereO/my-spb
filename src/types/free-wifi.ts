export type FreeWifi = {
  number: number;
  address: string;
  district: string;
  name_wifi: string;
  coverage: number;
  status: "Работает" | "Не работает";
  coordinates: [number, number];
};
