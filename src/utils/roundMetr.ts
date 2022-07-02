export const roundMetr = (m: number): string => {
  const km = m / 1000;
  if (km > 100) {
    return radixString(Math.round(km).toString());
  }
  if (m > 1000) {
    return `${km.toFixed(1)}`;
  }
  return `${m}`;
};

const radixString = (s: string): string => {
  let radixedString = "";
  for (let i = s.length; i > 0; i = i - 3) {
    if (!!radixedString) {
      radixedString = `${s.slice(i - 3 >= 0 ? i - 3 : 0, i)} ${radixedString}`;
    } else {
      radixedString = `${s.slice(i - 3, i)}`;
    }
  }
  return radixedString;
};
