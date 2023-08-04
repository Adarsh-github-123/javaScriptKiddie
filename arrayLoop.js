let num = [2,3,4,6,7];

// for(let i=0; i<num.length; i++){
//   console.log(num[i]);
// }

// for Each loop
num.forEach( (ele) => {
  console.log(ele * ele);
})

console.log('\n');

//Array.from : used to create an array from any other object
let a = "Adarsh";
let arr = Array.from(a);
console.log(arr);

console.log('\n');

// for of : gives the element of the array
for(let item of num){
  console.log(item);
}

console.log('\n');

// for in : gives the index of the array
for(let i in num){
  console.log(i);
}

