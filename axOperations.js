var maxOperations = function (nums, k) {
  nums = nums.filter((num) => num < k);
  console.log("if hash: ", nums);

  const hash = {};
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    const complement = k - nums[i];
    if (hash[complement]) {
      hash[complement]--;
      count++;
      // console.log("if hash: ", hash);
    } else {
      hash[nums[i]] = (hash[nums[i]] || 0) + 1;
      // console.log("hash: ", hash);
    }
  }
  return count;
};

const k = 5;
const arr = [1, 2, 3, 4, 5, 5, 6, 7, 89, 3, 5, 2, 3, 2, 1, 4];
console.log(maxOperations(arr, k));
