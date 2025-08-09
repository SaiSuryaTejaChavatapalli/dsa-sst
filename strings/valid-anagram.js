function ValidAnagram(s, t) {
  if (s.length !== t.length) return false;

  let counter = {};
  for (let i = 0; i < s.length; i++) {
    if (!counter[s[i]]) {
      counter[s[i]] = 1;
    } else {
      counter[s[i]]++;
    }
  }
  console.log("cnter", counter);
  for (let j = 0; j < t.length; j++) {
    if (!counter[t[j]] || counter[t[j]] < 0) {
      return false;
    } else {
      counter[t[j]]--;
    }
  }

  return true;

  // TC: O(n)+O(n) = 2*O(n)= O(n)
  // SC: O(26)=O(1)
}

// console.log(ValidAnagram("anagram", "nagaram"));
// console.log(ValidAnagram("rat", "car"));
// console.log(ValidAnagram("a", "abb"));
console.log(ValidAnagram("abcd", "abbb"));
