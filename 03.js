function sum(a, b) {
  console.log(x); // undefined (hoisted but not initialized)
  var x = a + b;
  return x;
}

console.log(sum(5, 10)); // Output: undefined then 15
