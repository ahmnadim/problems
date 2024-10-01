var findMedianSortedArrays = function (nums1, nums2) {
  const mergedArray = nums1.concat(nums2).sort((a, b) => b - a);
  const arrayLength = mergedArray.length;
  if (arrayLength <= 0) {
    return false;
  }

  const middle = Math.floor(arrayLength / 2);

  if (arrayLength % 2) {
    console.log(mergedArray, middle);
    return mergedArray[middle];
  } else {
    const sub = mergedArray[middle - 1];
    const sup = mergedArray[middle];
    const sum = sub + sup;
    const res = sum / 2;

    console.log(arrayLength % 2, middle, mergedArray, sub, sup, sum, res);
    return res;
  }
};

console.log(findMedianSortedArrays([3], [-2, -1]));
