let isSubsequence = function (s, t) {
  if (s == t) return true;
  let _s = 0;
  for (let c = 0; c < t.length; c++) {
    if (s[_s] == t[c]) {
      _s++;
    }
    if (_s == s.length) {
      return true;
    }
  }

  return false;
};

const s = "abcd";
const t = "aerbioc";
console.log(isSubsequence(s, t));
