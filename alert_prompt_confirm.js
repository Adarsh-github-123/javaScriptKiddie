alert("Enter the value of a: ")
let a = prompt('Enter a:', '65')
a = Number.parseInt(a)
let choice = confirm('Do you want to write the number?')
if(choice){
  document.write(choice)
}
else{
  document.write('Please allow me to write');
}