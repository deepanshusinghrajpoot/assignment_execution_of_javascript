{
  try {
    console.log(a); // undefined
    console.log(b); // Error: Cannot access 'b' before initialization
    console.log(c); // Error: Cannot access 'c' before initialization
  } catch (e) {
    console.log("Error:", e.message);
  }

  var a = 10;
  let b = 20;
  const c = 30;

  console.log("After declaration:", a, b, c); // 10 20 30
}
