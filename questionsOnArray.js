//Create an array of numbers and take input from the user to add numbers to this array

// let arr = [1,2,3,4,5,6,7,8];
// let a = prompt("Enter a number: ")
// a = Number.parseInt(a);

// arr.push(a);
// console.log(arr);

//Keep adding numbers to the array in 1 until 0 is added to the array

// let arr = [1,2,3,4,5,6,7,8];
// let a;
// do{
//   a = prompt("Enter a number: ")
//   a = Number.parseInt(a);
//   arr.push(a);
// }while(a!=0);

// console.log(arr);


//filter for numbers divisible by 10 from a given array
// let arr = [1,20,3,40,5,60,7,80];
// const filter_func = (element) => {
//   if(element % 10 === 0) return element
// }

// let a = arr.filter(filter_func);
// console.log(a);

//Create an array of square of given numbers
// let arr = [2,3,4,5,6,7];
// let a = arr.map(element => {
//   return element*element;
// });

// console.log(a);


// Use reduce to calculate the factorial of a given number from an array of first n natural numbers

let arr = [1,2,3,4,5];

let a = arr.reduce((num1, num2) => {
  return num1*num2;
});

console.log(a);
