var productExceptSelf = function (arr) {
  const res = new Array(arr.length).fill(1);

  // Calculate left product and store in res
  let leftProduct = 1;
  for (let i = 0; i < arr.length; i++) {
    res[i] = leftProduct;
    leftProduct *= arr[i];
  }

  // Calculate right product and multiply it with the corresponding left product in res
  let rightProduct = 1;
  for (let i = arr.length - 1; i >= 0; i--) {
    res[i] *= rightProduct;
    rightProduct *= arr[i];
  }

  return res;
};
