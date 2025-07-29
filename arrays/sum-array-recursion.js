const arr = [2, 3, 5, 7, 3];

function sum(n) {
  if (n == arr.length) return 0;
  const num = arr[n] % 2 == 0 ? 0 : arr[n];
  return num + sum(n + 1);
}
console.log(sum(0));
