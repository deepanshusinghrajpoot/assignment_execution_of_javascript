{
  try {
    console.log(x); // Error: Cannot access 'x' before initialization
  } catch (e) {
    console.log("TDZ Error:", e.message);
  }

  let x = 100;
  console.log("After declaration:", x); // Output: 100
}
