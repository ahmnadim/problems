const str1 = "abvabv";
const str2 = "sdf";

if (str1 + str2 != str2 + str1) {
  return "";
}
function gcd(a, b) {
  if (b == 0) {
    return a;
  }

  return gcd(b, a % b);
}

const divisor = gcd(str1.length, str2.length);

console.log("divisor: ", str1.substring(0, divisor));

return str1.substring(0, divisor);
