function longestSubString(string) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < string.length; i++) {
    let char = string[i];

    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    console.log(longest, i, start + 1);
    longest = Math.max(longest, i - start + 1);

    seen[char] = i + 1;
  }

  return longest;
}

const length = longestSubString("a");

console.log(length);
