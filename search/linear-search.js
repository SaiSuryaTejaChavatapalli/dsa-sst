function LinearSerch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      return i;
    }
  }
  return -1;
}

console.log(LinearSerch([4, 9, 1, 0, 2], 10));
