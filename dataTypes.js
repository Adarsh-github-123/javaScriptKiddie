//Primitive Data Types

let a = 45;
let b = "String";
let c = undefined;
let d = Symbol("This is a symbol")
let e = BigInt("4567") + BigInt("5")

console.log(a, b, c, d, e);
console.log(typeof e);

//Object - Non Primitive Data Types
const hello = {
  "name": "Raghav",
  "age": 45,
  "gender": "Male",
  "occupation": undefined
}

console.log(hello["name"]);
console.log(hello["occupation"]);