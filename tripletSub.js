var increasingTriplet = function (arr) {
  let min = Infinity;
  let mid = Infinity;

  for (let num of arr) {
    if (num <= min) {
      min = num;
    } else if (num <= mid) {
      mid = num;
    } else {
      return true;
    }
  }
  return false;
};
