// FIFO LIFO

// pop()
// push()
// shift()
// unshift()

// splice(startIndex, deleteCount, ...add)

// toSpliced()

// const newStudentsName = studentsName.toSpliced(0, 0, "John", "Joe", "Jack");

// console.log(newStudentsName);

// for loop

// for (let i = 0; i < studentsName.length; i++) {
//   console.log(studentsName[i]);
// }

// for of loop

// for (let name of studentsName) {
//   console.log(name);
// }

// indexOf()
// concat()
// join()

// const arrToString = studentsName.join(" ");

// console.log(arrToString);
// console.log(studentsName.includes("John"));

// // reverse()
// const reversedStudentsName = studentsName.toReversed();

// console.log(reversedStudentsName);

// toReversed()

// sort()
// toSorted()

const studentsName = ["Victor", "Amanda", "Jennifer", "Antony", "Jennifer"];

// find()
const findFirstStudent = studentsName.find((name) => name === "Jennifer");
const findFirstStudentIndex = studentsName.findIndex(
  (name) => name === "Jennifer"
);

// console.log(findFirstStudent);
// console.log(findFirstStudentIndex);

// // findLast() // 2024

// const findLastStudent = studentsName.findLast((name) => name === "Jennifer");
// const findLastStudentIndex = studentsName.findLastIndex(
//   (name) => name === "Jennifer"
// );

// console.log(findLastStudent);
// console.log(findLastStudentIndex);

// findLastIndex() // 2024
// findIndex()

// map()

const num = [1, 2, 3, 4, 5];
const userDetails = [
  {
    name: "John",
    age: 20,
  },
  {
    name: "Jane",
    age: 22,
  },
  {
    name: "Jack",
    age: 24,
  },
];

const duplicatedNum = num.map((number) => number * 2);

const getNames = userDetails.map((user) => user.name);

console.log(getNames);

console.log(duplicatedNum);

// filter()

const filteredUserDetailsByAge = userDetails.filter((user) => user.age > 20);

console.log(filteredUserDetailsByAge);

// forEach()
num.forEach((number) => {
  if (number % 2 === 0) {
    console.log(number);
  }
});

// reduce()

// const sumUp = num.reduce((accumulator, currentValue) => {}, initialValue);

// const num = [1, 2, 3, 4, 5];

const sumUp = num.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sumUp);

// flat()
// flatMap()
// every()
// some()
