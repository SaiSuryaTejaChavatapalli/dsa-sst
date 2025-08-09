// function LargestOddNumberInString(s) {
//   let num = BigInt(s);
//   while (num >= BigInt(1)) {
//     if (num % BigInt(2) == 1) {
//       return String(Number(num));
//     }
//     num = num / BigInt(10);
//   }
//   return "";
// }
function LargestOddNumberInString(s) {
  let k = s.length - 1;
  while (k >= 0) {
    if (Number(s[k]) % 2 == 1) {
      return s.substring(0, k + 1);
    }
    k--;
  }
  return "";
}
console.log(LargestOddNumberInString("239537672423884969653287101"));
console.log(LargestOddNumberInString("52"));
