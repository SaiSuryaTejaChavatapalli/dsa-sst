function IndexOfGivenLetterInWordArray(arr, letter) {
  const res = [];
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    const curr = arr[i];
    for (let j = 0; j < curr.length; j++) {
      if (curr[j] == letter) {
        res.push(i);
        break;
      }
    }
  }
  return res;
}
// m- no of words
// n - max length of each word
// TC : O (n*m)
// SC: O (1) or O(m) if you consider res also, but we are not using in our actual logic computation
console.log(IndexOfGivenLetterInWordArray(["leet", "code"], "e"));
console.log(IndexOfGivenLetterInWordArray(["abc", "bcd", "aaaa", "cbc"], "a"));
