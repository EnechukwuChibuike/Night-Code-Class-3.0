const userDetails = {
  name: "John",
  age: 30,
  city: "New York",
  country: "USA",
  date_of_birth: "1993-05-15",
  profile_pics: "/user.png",
};

// function getUserProfile() {
//   const { name, profile_pics } = userDetails;

//   return { name, profile_pics };
// }

// console.log(getUserProfile());

// Array Destructuring
//
// const studentsName = ["John", "Jane", "Bob", "Alice"];

// const [firstStudent, , , FouthStudent] = studentsName;

// console.log(firstStudent, FouthStudent);

// Map & Set

const map = new Map();

map.set("name", "John");
map.set("age", 30);
map.set(true, false);

const name = map.get("name");
console.log(name);

console.log(map);

const set = new Set();

set.add(1);
set.add(2);
set.add(3);
set.add(4);
set.add(4);

console.log(set);
