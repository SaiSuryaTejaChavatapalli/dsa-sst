function GroupAnagrams(arr) {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    let sortedStr = arr[i].split("").sort().join("");
    if (!map[sortedStr]) {
      map[sortedStr] = [arr[i]];
    } else {
      map[sortedStr].push(arr[i]);
    }
  }

  return Object.values(map);
}

console.log(GroupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

// TC: O(n * mlogm) :- m is max length of each string, n: no of strings
// SC: O(n*m)
