const checkAge = (age) => {
    return age>18?true:false
  }

let runAgain = true
while(runAgain){
  let age = prompt('Enter the age')
  age = Number.parseInt(age)

  if(age < 0){
    console.error('Please enter a valid age')
    break;
  }
  
  if(checkAge(age)){
    alert('Yes you can drive')
  }
  else{
    alert('You cannot drive')
  }
  
  runAgain = confirm('Do you want to play again?')
}