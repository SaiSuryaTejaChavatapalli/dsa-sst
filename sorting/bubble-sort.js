function swap(i, j, arr) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function bubbleSort() {
  let arr = [5, 2, 3, 1, 6];
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let didSwap = false;
    for (let j = 0; j <= n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(j, j + 1, arr);
        didSwap = 1;
      }
    }
    if (!didSwap) {
      break;
    }
  }
  console.log("After sorting", arr);
}
bubbleSort();

// Best : O(n) if Array is already sorted
// Worst : O(n**2)
