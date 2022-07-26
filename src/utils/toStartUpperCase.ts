export const toStartUpperCase = (str: string): string => {
  return str
    .split(" ")
    .map((w) => {
      return w[0].toUpperCase() + w.slice(1);
    })
    .join(" ");
};
