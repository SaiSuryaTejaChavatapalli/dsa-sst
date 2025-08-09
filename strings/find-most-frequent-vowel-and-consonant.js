function FrequentVowelConsonant(s) {
  let vowelsSet = new Set(["a", "e", "i", "o", "u"]);
  let hash = {};

  for (let i = 0; i < s.length; i++) {
    hash[s[i]] = !hash[s[i]] ? 1 : ++hash[s[i]];
  }

  let vowelsMax = 0;
  let consonantsMax = 0;
  let mapKeys = Object.keys(hash);

  for (let i = 0; i < mapKeys.length; i++) {
    const char = mapKeys[i];
    if (vowelsSet.has(char)) {
      vowelsMax = Math.max(hash[char], vowelsMax);
    } else {
      consonantsMax = Math.max(hash[char], consonantsMax);
    }
  }

  return vowelsMax + consonantsMax;

  //   TC: O(n) + O(1): second loop loops through max 26 iterations= O(n)
  //   SC: O(1) : Map can store only 26 characters
}
console.log(FrequentVowelConsonant("successes"));
