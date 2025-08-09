function SplitBalancedString(s) {
  let noOfRs = 0;
  let noOfLs = 0;
  let output = 0;
  let n = 0;

  while (n < s.length) {
    if (s[n] == "R") noOfRs++;
    else noOfLs++;
    if (noOfLs == noOfRs) {
      output++;
      noOfLs = 0;
      noOfRs = 0;
    }
    n++;
  }

  return output;
}

// TC: O(n)
// SC: O(1)

// console.log(SplitBalancedString("RLRRLLRLRL"));
// console.log(SplitBalancedString("RLRRRLLRLL"));
console.log(SplitBalancedString("RLLR"));

function SplitBalancedString(s) {
  let temp = 0;
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] == "R") {
      temp++;
    } else {
      temp--;
    }
    if (temp == 0) {
      count++;
    }
  }
  return count;
}

console.log(SplitBalancedString("RLLR"));
