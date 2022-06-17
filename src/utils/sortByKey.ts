export const sortByKey = (key: string) => (a1: any, a2: any) => {
  const d1 = a1[key];
  const d2 = a2[key];
  return d1 > d2 ? 1 : d2 > d1 ? -1 : 0;
};
