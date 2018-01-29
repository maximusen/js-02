const f = parseFloat(prompt('Enter Fibonachi number - II way:'));
function fib(f) {
  if (f <= 1) 
  return 1;
  return fib(f - 1) + fib(f - 2);
}
document.write (fib(f));