let a = 0
let b = 1
let c;

function fibonacci(num) {
  for (let i = 0; i <= num; i++){
    console.log(a);
    c = a + b;
    a = b;
    b = c;
  }
  return c
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// starting at pair 0 and 1, add the previous number to the total
// a + b = c add the two values, return the new value
// adds the new value with the last value in the original equation

