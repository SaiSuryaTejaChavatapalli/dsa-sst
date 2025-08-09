function rev(s) {
  s = s.split("");
  let n = s.length;
  for (let i = 0; i < Math.floor(n / 2); i++) {
    let temp = s[i];
    s[i] = s[n - 1 - i];
    s[n - 1 - i] = temp;
  }
  return s.join("");
}

function ReverseString2(s, k) {
  s = s.split("");
  for (let x = 0; x < s.length; x = x + 2 * k) {
    console.log("x", x);
    let mid = Math.floor(k / 2);
    for (let i = 0; i < mid; i++) {
      let temp = s[i + x];
      s[i + x] = s[k - 1 - i + x];
      s[k - 1 - i + x] = temp;
    }
  }
  return s.join("");
}

console.log(ReverseString2("abcdefgijk", 2));
//console.log(rev("saisu"));
// TC: O(n)
// SC: O(n)  - beacuse you are creating an array,
// SC O(1) is some languages we don't to make array
