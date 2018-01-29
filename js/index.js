const n = parseFloat(prompt('Enter Fibonachi number - I way:'));
function fib(n) {
  let fibOne = 1,
    fibTwo = 1;
  for (let i = 2; i <= n; i++) {
    let fibNext = fibOne + fibTwo;
    fibOne = fibTwo;
    fibTwo = fibNext;
  }
  return fibTwo;
}

document.write (fib(n));


