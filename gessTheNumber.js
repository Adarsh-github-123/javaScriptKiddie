// Guess the number

let num = Math.floor(Math.random()*100+1);
console.log(num);

let num1;
let num2;

do{
  num1 = prompt("Enter a number between 1 and 100: ");
  num2 = parseInt(num1);
  if(num < num2){
    console.log('The guessed number is greater than original number');
  }
  if(num > num2){
    console.log('The guessed number is lesser than original number');
  }
}while(num2 != num);

console.log('Your guess is correct');