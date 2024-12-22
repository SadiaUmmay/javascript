// normal function

function sum(x, y){
    // console.log(x,y);
return x / y;
};
let a=5;
let b= 7;
let total = sum( a, b);
// console.log(total);  

function fullName(firstName, lastName, age){
    return 'Your First Name' + ' ' + firstName+ ' '+ 'Last Name' + ' '  + lastName + '. Your age' +' '+ age;
}
const yourName= fullName('Ummay', "Jannat", 22)
// console.log(yourName)

function gold(ana){
return 64 + ' ' + 'ana'+ ' ' +  '=' + ' ' + ana/16 + ' ' + 'vori';
}
let output= gold(64)
// console.log(output)

function length(resultmeter){
return 10000 + ' ' + 'meter' + ' '+ '=' +' '+ resultmeter/1000 + ' '+'kilometer'
}
let equal= length (10000)
// console.log(equal) 

// anonymous function 

let math = function(num1, num2){
    return num1 + num2;
};
// console.log(math(10,20));

// arrow function 
 let number = (num1, num2) => {
    let total = num1 + num2
    return total * total;
 };
//  console.log(number(10, 20));

//  higher order function
function sub(num1, num2, add){
    return add(num1, num2)
};
let add = (number1, number2) => number1 + number2;
// console.log (sub(30, 20, add))

// IIFE
(function (name){
    // console.log(name)
})("alif");

// let x =5;
// let y = '5';
// let z = x+y;
// console.log(z);

let x = 5;
x= x + 10;
// console.log(x);  