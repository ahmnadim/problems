const flowerbed = [1, 0, 0, 0, 1];
const n = 1;
let count = 0;

let lastAssignIndex;

if (flowerbed.length <= 2) {
  return false;
}

for (let i = 0; i < flowerbed.length; i++) {
  console.log(i, flowerbed[i - 1], flowerbed.length);
  if (
    flowerbed[i] == 0 &&
    (i == 0 || flowerbed[i - 1] == 0) &&
    (flowerbed[flowerbed.length - 1] == 0 || flowerbed[i + 1] == 0)
  ) {
    flowerbed[i] = 1;
    count++;

    if (count >= n) {
      return true;
    }
  }
}
