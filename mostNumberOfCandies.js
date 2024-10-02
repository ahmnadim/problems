const candies = [2, 8, 7];
const extraCandies = 1;

let max = Math.max(...candies);
let res = [];

candies.map((can) => {
  if (can + extraCandies >= max) {
    res.push(true);
  } else {
    res.push(false);
  }
});

console.log("max: ", max, res);
