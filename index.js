console.log('Hello World'); 
let name = 'Patrik'; //string
console.log(name);
const interestRate = 0.3; //constanta
console.log(interestRate);
let isApproved = true; //boolean
let firstName; //nedefinit
let lastName = null; //variabila nula
let person = {
    name: 'Patrik',
    age: 18

};
let selection = 'name';
person.name = 'John';
person[selection] = 'John';
console.log(person.age);

let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';
console.log(selectedColors);

function greet(name)
{
    console.log('Hello ' + name);
}
greet('Patrik');

function square(number)
{
    return number*number;
}
let number = square(2);
console.log(number);

