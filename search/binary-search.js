function BinarySearch(arr, target) {
  let l = 0;
  let r = arr.length - 1;

  while (l <= r) {
    let m = Math.floor((l + r) / 2);
    if (arr[m] == target) {
      return m;
    } else if (target > m) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }

  return -1;
}

console.log(BinarySearch([-1, 0, 3, 5, 9, 12], 9));
