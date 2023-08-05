//map : Creates a new array by performing some operations on each array element

let arr = [45, 23, 21];
let a = arr.map((element, index) => {
  // console.log(element, index);
  return element + index;
});

// console.log(a);

// ---------filter Array method--------------
let arr2 = [45, 23, 32, 1, 2, 3];
let a2 = arr2.filter((element) => {
  return element < 10;
});

// console.log(a2)

// ---------array reduce method-------------
// reduce : reduces an array to a single value

let arr3 = [4,5,6,2,7,8];
const reduce_func = (ele1, ele2) => {
  return ele1 + ele2;
}
let a3 = arr3.reduce(reduce_func);

console.log(a3);