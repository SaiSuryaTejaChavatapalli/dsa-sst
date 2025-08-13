function IsomorphicString(a, b) {
  if (a.length !== b.length) return false;
  let cntr1 = {};
  for (let i = 0; i < a.length; i++) {
    if (!cntr1[a[i]]) {
      cntr1[a[i]] = 1;
    } else {
      cntr1[a[i]]++;
    }
  }
  let cntr2 = {};
  for (let i = 0; i < b.length; i++) {
    if (!cntr2[b[i]]) {
      cntr2[b[i]] = 1;
    } else {
      cntr2[b[i]]++;
    }
  }
  console.log(cntr1, cntr2);
}

console.log(IsomorphicString("egg", "add"));
console.log(IsomorphicString("foo", "bar"));
console.log(IsomorphicString("raj", "mbk"));
