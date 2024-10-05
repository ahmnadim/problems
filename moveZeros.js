var moveZeroes = function (arr) {
  if (arr.length < 2) return arr;
  let nonZeroIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
      arr[nonZeroIndex] = arr[i];
      nonZeroIndex++;
    }
  }

  for (let j = nonZeroIndex; j < arr.length; j++) {
    arr[j] = 0;
  }
  return arr;
};
