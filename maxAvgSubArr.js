var findMaxAverage = function (nums, k) {
  let max = 0;
  let sum = 0;

  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }
  max = sum / k;

  for (let i = k; i < nums.length; i++) {
    sum += nums[i] - nums[i - k];

    if (sum / k > max) {
      max = sum / k;
    }
  }

  return max;
};

const k = 3;
const arr = [12, 2, -33, 44, 5, -5, 7, 20, 1, 4, -8, 3];
console.log(findMaxAverage(arr, k));
