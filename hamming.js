const totalHammingDistance = (nums) => {
  if (nums.length) {
    let dis = 0
    for (let i = 0; i < nums.length; i++) {
      let x = nums[i + 1] ? nums[i] ^ nums[i + 1] : nums[i] ^ nums[0]
      let setBits = 0

      while (x > 0) {
        setBits += x & 1
        x >>= 1
      }
      dis += setBits
    }
    return dis
  }
}

const hammingDistance = totalHammingDistance([2, 14, 4])
