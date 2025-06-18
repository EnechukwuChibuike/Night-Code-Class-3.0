// Basic Operators

console.log("An " + "amazing world"); // operand + // opeerator // operation

console.log(2 - 1);

console.log(3 * 3);

console.log(10 / 5);

console.log(10 % 3); // Remainder

// increment (++);
// decrement (--)

// Assignment Operator (=)

// Comparison Operators

console.log(2 < 1); // less than
console.log(2 > 1); // greater than
console.log(2 >= 2); // greater than or equal to
console.log(2 <= 1); // less than or equal to
console.log(2 == 1); // equal to
console.log(2 != 1); // not equal to
console.log("2" === 2); // equal type and value
console.log(2 !== 1); // not equal type and value

// Logical Operators

// AND &&
console.log(true && true); // true
console.log(true && false && true);
console.log(false && false);
console.log(false && true);

console.log(1 < 2 && 3 > 4); // true
console.log(1 < 2 && 2 < 3 && 3 < 4); // true

// OR ||
console.log(true || true); // true
console.log(true || false || true);
console.log(false || false);
console.log(false || true);

// NOT !

console.log(!true); // false
console.log(!false); // true

// Coalescing Operator ??

// undefined || null

let a = "hi";

let b = "hello";

// if(a == undefined || null) {
//     let c = b;
// } else {
//     let c = a;
// }

let c = a ?? b;
