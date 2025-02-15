function foo(a, b) {
  // Handle null or undefined values for a and b
  a = a === null ? 0 : a;
  b = b === null ? 0 : b;
  return a + b;
}

console.log(foo(null, 5)); // Output: 5
console.log(foo(5, null)); // Output: 5
console.log(foo(5, 5)); // Output: 10