export const getRandomElements = (arr: any[], n = arr.length) => {
  let resultArray = [];
  let array = [...arr];
  n = n > array.length ? array.length : n;

  for (let i = 0; i < n; i += 1) {
    resultArray.push(
      array.splice(Math.floor(Math.random() * array.length), 1)[0]
    );
  }

  return resultArray;
};
