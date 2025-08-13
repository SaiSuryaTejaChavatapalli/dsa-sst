function GroupAnagrams(arr) {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    // O(n)
    let innerMap = {};
    let currStr = arr[i];
    for (let j = 0; j < currStr.length; j++) {
      // O(m)
      if (!innerMap[currStr[j]]) {
        innerMap[currStr[j]] = 1;
      } else {
        innerMap[currStr[j]]++;
      }
    }

    let s = "";
    for (let k = "a".charCodeAt(0); k <= "z".charCodeAt(0); k++) {
      //O(1)
      if (innerMap[String.fromCharCode(k)]) {
        s = s + String.fromCharCode(k) + innerMap[String.fromCharCode(k)];
      } else {
        s = s + String.fromCharCode(k) + "0";
      }
    }
    if (!map[s]) {
      map[s] = [currStr];
    } else {
      map[s].push(currStr);
    }
  }

  return Object.values(map);
}

console.log(GroupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

// TC: O(n*m) :- m is max length of each string, n: no of strings
// SC: O(n*m)
