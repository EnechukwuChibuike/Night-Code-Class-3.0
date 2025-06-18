// Function Declaration

// function name(parameters){
// block of code
// }

function sumTwo(a, b) {
  return a + b;
}

console.log(sumTwo(2, 3));

// Function Expression

const sumThree = function (a, b) {
  return a + b;
};

// Arrow Function

const sumFour = (a, b) => {
  return a + b;
};

console.log(sumFour(2, 3));
