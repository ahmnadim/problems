var countPairs = function (deliciousness) {
  deliciousness = deliciousness.sort();
  let left = 0;
  let right = deliciousness.length - 1;
  let count = 0;

  while (left < right) {
    const sum = deliciousness[left] + deliciousness[right];

    if ((sum & (sum - 1)) > sum) {
      console.log(
        "(sum & (sum - 1)) > sum: ",
        deliciousness[right],
        deliciousness[left],
        sum,
        sum & (sum - 1)
      );
      left++;
      continue;
    }
    if ((sum & (sum - 1)) < sum) {
      console.log(
        "(sum & (sum - 1)) < sum: ",
        deliciousness[right],
        deliciousness[left],
        sum,
        sum & (sum - 1)
      );

      right--;
      continue;
    }
    if ((sum & (sum - 1)) === 0) {
      console.log(
        "(sum & (sum - 1)) === 0: ",
        deliciousness[right],
        deliciousness[left],
        sum,
        sum & (sum - 1)
      );
      count++;
      left++;
      right--;
      continue;
    }
    return count;
  }
};

const arr = [1, 3, 5, 7, 9];
console.log(countPairs(arr));
