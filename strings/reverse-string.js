function ReverseString(s) {
  for (let i = 0; i < s.length / 2; i++) {
    swap(i, n - i - 1);
  }

  return s;
}

console.log(ReverseString("abcde"));
