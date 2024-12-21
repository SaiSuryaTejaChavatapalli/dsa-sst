function swap(a, b, arr) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function selectionSort() {
  //   const arr = [13, 46, 24, 52, 20, 9];
  const arr = [5, 2, 3, 1];
  console.log("Before selection sort", arr);
  for (let i = 0; i <= arr.length - 2; i++) {
    let min = i;
    for (let j = i; j <= arr.length - 1; j++) {
      if (arr[j] < arr[min]) {
        swap(i, j, arr);
      }
    }
    console.log("i", arr);
  }
  console.log("After selection sort", arr);
}
selectionSort();
