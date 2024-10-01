var mergeAlternately = function (word1, word2) {
  let res = "";
  const maxLength = Math.max(word1.length, word2.length);

  for (let i = 0; i < maxLength; i++) {
    if (i < word1.length) {
      res += word1[i];
    }
    if (i < word2.length) {
      res += word2[i];
    }
  }

  return res;
};

// console.log("merged word: ", mergeAlternately("abc", "pqrsasd"));\\\\

var c = (function () {
  console.log("Hello World");
})();
