const str = "Hello World";
console.log(str);

const fullName = "John Doe";

const anotherName = " John Doe ";

console.log(fullName.length);

console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(fullName.indexOf("o"));
console.log(fullName.lastIndexOf("o"));
console.log(fullName.includes("o"));
console.log(fullName.startsWith("J"));
console.log(fullName.endsWith("e"));
console.log(fullName.slice(0, 4));
console.log(fullName);
console.log(anotherName);

console.log(fullName === anotherName.trim());

const firstName = "John";
const lastName = "Doe";

const name = firstName.concat(" ", lastName);
console.log(name);

console.log(fullName.charAt(0));

console.log(fullName.split(" "));

// String are immutable
