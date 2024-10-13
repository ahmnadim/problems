const twoSum = (nums, t) => {
  //   nums = nums.filter((n) => n < t);
  const hash = {};
  const res = [];
  console.log("nums: ", nums, t);

  for (let i = 0; i < nums.length; i++) {
    const complement = t - nums[i];
    console.log("comp, i, hash: ", complement);

    if (hash[complement] || hash[complement] === 0) {
      res.push(hash[complement]);
      res.push(i);
      console.log("if: ", res);
    } else {
      console.log("else: ", i, nums[i]);

      hash[nums[i]] = i;
    }
  }
  console.log("hash: ", hash);

  return res;
};

const arr = [0, 4, 3, 0];

const t = 0;

console.log(twoSum(arr, t));
