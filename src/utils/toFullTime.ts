export const toFullTime = (date: string): string => {
  let fullTime = date.length === 4 ? `0${date}` : date;
  return fullTime.replace(".", ":");
};
