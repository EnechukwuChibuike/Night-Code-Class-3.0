// Rest Parameter

function log(...params) {
  for (let param of params) {
    console.log(param);
  }
}

log("hi", "hello", "bye", "kjdj");

// Spread Operator

const arr = [1, 2, 3];
const arr2 = arr;

console.log(arr === arr2);

let name = "John";
let anotherName = "John";

console.log(name === anotherName);

let arr3 = [];
let arr4 = [];

console.log(arr3 === arr4);

console.log(arr, arr2);

// const newArr = arr.map((item) => {
//   return item;
// });

// newArr.push(4);

const newArr = [...arr];

newArr.push(4);

console.log(newArr);
