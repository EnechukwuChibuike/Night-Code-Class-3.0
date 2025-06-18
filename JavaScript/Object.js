const name = "John";

const obj = {
  name,
  age: 30,
  city: "New York",
  1: 1,
  "favorite color": "blue",
  wife: {
    name: "Jane",
    age: 25,
    city: "London",
    log: function () {
      console.log("Hello World");
    },
  },
};
// obj.wife.log();
// console.log(obj.name);
// console.log(obj.age);
// console.log(obj.city);
// console.log(obj["1"]);
// console.log(obj["favorite color"]);
// console.log(obj.wife.name);
// console.log(obj.wife.age);
// console.log(obj.wife.city);

const user = {
  name: "John",
  age: 30,
  city: "New York",
};

// user?.name;

console.log(Object.values(user));
console.log(Object.keys(user));
console.log(Object.entries(user));

console.log(Object.fromEntries(Object.entries(user)));
