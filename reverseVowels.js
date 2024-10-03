function reverseVowels(s) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let res = "";
  let v_stack = [];
  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      v_stack.push(s[i]);
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(str[i])) {
      res += v_stack.pop();
    } else {
      res += str[i];
    }
  }
  return res;
}

const str = "IceCreAm";
console.log(reverseVowels(str));
