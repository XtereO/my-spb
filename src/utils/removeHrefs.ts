export const removeHrefs = (text: string) => {
  const hrefCount = (text.match(/href/g) || []).length;
  let reducedText = text;

  for (let i = 0; i < hrefCount; i++) {
    const startIndex = reducedText.indexOf(" href=");
    const endIndex =
      startIndex + reducedText.slice(startIndex).indexOf('">') + 1;
    reducedText = [
      reducedText.slice(0, startIndex),
      "",
      reducedText.slice(endIndex),
    ].join("");
  }
  reducedText = reducedText
    .replaceAll('target="_blank"', "")
    .replaceAll("\r", "")
    .replaceAll("\n", "");

  return reducedText;
};
