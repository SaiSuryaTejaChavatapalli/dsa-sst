function JewelsAndStones(jewels, stones) {
  let count = 0;
  for (let i = 0; i < stones.length; i++) {
    if (jewels.includes(stones[i])) {
      count++;
    }
  }
  return count;
}

// console.log(JewelsAndStones("aA", "aAAbbbb"));
// console.log(JewelsAndStones("z", "ZZ"));
// Brute force
function JewelsAndStones2(jewels, stones) {
  let count = 0;
  for (let i = 0; i < stones.length; i++) {
    for (let j = 0; j < jewels.length; j++) {
      if (stones[i] === jewels[j]) {
        count++;
        break;
      }
    }
  }
  return count;
}

// console.log(JewelsAndStones2("aA", "aAAbbbb"));
// console.log(JewelsAndStones2("z", "ZZ"));

function JewelsAndStones3(jewels, stones) {
  let hash = {};
  let count = 0;

  for (let i = 0; i < stones.length; i++) {
    if (!hash[stones[i]]) {
      hash[stones[i]] = 1;
    } else {
      hash[stones[i]]++;
    }
  }

  for (let i = 0; i < jewels.length; i++) {
    count = count + (hash[jewels[i]] ? hash[jewels[i]] : 0);
  }

  return count;
}

// console.log(JewelsAndStones3("aA", "aAAbbbb"));
// console.log(JewelsAndStones3("z", "ZZ"));
// console.log(JewelsAndStones3("edb", "bbb"));
//console.log(JewelsAndStones3("edb", "bbb"));

function JewelsAndStones4(jewels, stones) {
  let jSet = new Set(jewels);
  let count = 0;

  for (let i = 0; i < stones.length; i++) {
    if (jSet.has(stones[i])) {
      // Finding elements in a set is O(1)
      count++;
    }
  }

  return count;

  // TC: O(n)

  // SC: O(26+26) -> O(52)-> O(1)
}
console.log(JewelsAndStones4("edb", "bbb"));
