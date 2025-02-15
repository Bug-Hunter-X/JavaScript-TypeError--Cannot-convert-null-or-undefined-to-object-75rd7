function foo(a, b) {
  if (a === null || b === null) {
    return null; //This will cause a TypeError in the next line if a or b is null.
  }
  return a + b;
}

console.log(foo(null, 5)); //This will throw a TypeError
console.log(foo(5, null)); //This will throw a TypeError