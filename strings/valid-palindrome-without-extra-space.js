function CheckAlphaNumeric(c) {
  let curr = c.charCodeAt(0);
  let cond1 = curr >= "a".charCodeAt(0) && curr <= "z".charCodeAt(0);
  let cond2 = curr >= "0".charCodeAt(0) && curr <= "9".charCodeAt(0);
  return cond1 || cond2;
}

function ValidPalindrome(s) {
  s = s.toLowerCase();
  let i = 0;
  let j = s.length - 1;

  while (i < j) {
    if (!CheckAlphaNumeric(s[i])) i++;
    else if (!CheckAlphaNumeric(s[j])) j--;
    else if (s[i] == s[j]) {
      i++;
      j--;
    } else {
      return false;
    }
  }

  return true;
}

// TC: O(n)
// SC: O(1)

//console.log(ValidPalindrome("A man, a plan, a canal: Panama"));
console.log(ValidPalindrome("."));
