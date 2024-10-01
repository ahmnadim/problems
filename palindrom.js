function longestPalindromicSubstring(str) {
  let longest = "";

  for (let i = 0; i < str.length; i++) {
    // Check for odd length palindromes
    let left = i;
    let right = i;
    while (left >= 0 && right < str.length && str[left] === str[right]) {
      const current = str.substring(left, right + 1);
      if (current.length > longest.length) {
        longest = current;
      }
      left--;
      right++;
    }

    // Check for even length palindromes
    left = i;
    right = i + 1;
    while (left >= 0 && right < str.length && str[left] === str[right]) {
      const current = str.substring(left, right + 1);
      if (current.length > longest.length) {
        longest = current;
      }
      left--;
      right++;
    }
  }

  return longest;
}

const input = "baabaab";
const result = longestPalindromicSubstring(input);
console.log("result: ", result); // Output: 'bab'
