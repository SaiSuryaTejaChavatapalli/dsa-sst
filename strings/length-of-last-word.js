function lengthOfLastWord1(s) {
  s = s.trim();
  s = s.split(" ");
  return s[s.length - 1].length;

  // TC:
  // trim: Internally using loop O(n)
  // split: Internally using loop O(n)
  //  Final: O(n)

  // SC:
  // split: Create an array of individual words O(n)
  // Final: O(n)
}

console.log(lengthOfLastWord1("Hello World      "));

function lengthOfLastWord2(s) {
  let lastWordCount = 0;
  let fresh = true;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] == " " && fresh) continue;
    else if (s[i] == " " && !fresh) break;
    else {
      lastWordCount++;
      fresh = false;
    }
  }

  return lastWordCount;
  // TC: O(n);
  // SC: O(1);
}
console.log(lengthOfLastWord2("Hello World   "));

function lengthOfLastWord3(s) {
  let n = s.length - 1;

  while (n >= 0) {
    if (s[n] == " ") --n;
    else break;
  }

  let count = 0;
  while (n >= 0) {
    if (s[n] == " ") break;
    ++count;
    --n;
  }

  return count;

  // TC: O(n);
  // SC: O(1);
}
console.log(lengthOfLastWord3("Hello World   "));

function lengthOfLastWord4(s) {
  let n = s.length - 1;
  let count = 0;

  while (n >= 0) {
    if (s[n] != " ") {
      count++;
    } else if (count > 0) {
      break;
    }
    n--;
  }

  return count;

  // TC: O(n);
  // SC: O(1);
}
console.log(lengthOfLastWord4("Hello World   "));
