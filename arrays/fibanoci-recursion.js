function fib(n) {
  if (n <= 1) return n;

  return fib(n - 1) + fib(n - 2);
}

console.log(fib(10));

//----Iterative Approach-------//
const n = 10;

let num = 0;
let num2 = 1;
for (let i = 2; i <= n; i++) {
  fib = num + num2;
  num = num2;
  num2 = fib;
}
console.log(num2);
