function swap(a, b, arr) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function selectionSort() {
  const arr = [5, 2, 3, 1];
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    // Assume element at i index is minimum
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !== i) {
      swap(i, min, arr);
    }
  }
  console.log("After selection sort", arr);
}
selectionSort();
