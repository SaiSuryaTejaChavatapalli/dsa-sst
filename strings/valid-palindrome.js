function CheckAlphaNumeric(c) {
  let curr = c.charCodeAt(0);
  let cond1 = curr >= "a".charCodeAt(0) && curr <= "z".charCodeAt(0);
  let cond2 = curr >= "0".charCodeAt(0) && curr <= "9".charCodeAt(0);
  return cond1 || cond2;
}

function ValidPalindrome(s) {
  s = s.toLowerCase();
  let filteredString = "";
  let filteredString2 = "";
  for (let i = 0; i < s.length; i++) {
    if (CheckAlphaNumeric(s[i])) {
      filteredString = filteredString + s[i];
      filteredString2 = s[i] + filteredString2;
    }
  }
  return filteredString == filteredString2;
}

// TC: O(n)
// SC: O(n)+O(n) => O(2n) => O(n)
console.log(ValidPalindrome("A man, a plan, a canal: Panama"));
