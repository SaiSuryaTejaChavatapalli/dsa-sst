// function LongestCommonPrefix(arr) {
//   let SmallItemLen = arr[0].length;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length < SmallItemLen) {
//       SmallItemLen = arr[i].length;
//     }
//   }

//   let res = "";
//   for (let i = 0; i < SmallItemLen; i++) {
//     let s = "";
//     for (let j = 0; j < arr.length; j++) {
//       s += arr[j][i];
//     }

//     let setStr = [...new Set(s)].join("");
//     if (setStr.length === 1) {
//       res += setStr;
//     } else {
//       break;
//     }
//   }
//   return res;
// }

// console.log(LongestCommonPrefix(["flower", "flight", "flow"]));

function LongestCommonPrefix2(arr) {
  let refString = arr[0];
  let x = 0;
  while (x < refString.length) {
    let curr = refString[x];
    for (let i = 1; i < arr.length; i++) {
      if (curr !== arr[i][x]) {
        return refString.substring(0, x);
      }
    }
    x++;
  }
  return refString;
}
console.log(LongestCommonPrefix2(["flower", "fl", "flow"]));

// TC: O(s) :- s is the length of all the items in the array
// SC: O(1)
