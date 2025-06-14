// Call the function expression before declaration
try {
  console.log(multiplyNumbers(3, 4)); // Error: Cannot access before initialization
} catch (e) {
  console.log("Error:", e.message);
}

// Function expression (not hoisted like declarations)
const multiplyNumbers = function(a, b) {
  return a * b;
};
