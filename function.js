// normal function

function sum(x, y){
    console.log(x,y);
return x / y;
};
let a=5;
let b= 7;
let total = sum( a, b);
console.log(total);  

function fullName(firstName, lastName, age){
    return 'Your First Name' + ' ' + firstName+ ' '+ 'Last Name' + ' '  + lastName + '. Your age' +' '+ age;
}
const yourName= fullName('Ummay', "Jannat", 22)
console.log(yourName)

function gold(showedAna){
return 64 + ' ' + 'ana'+ ' ' +  '=' + ' ' + showedAna/16 + ' ' + 'vori';
}
let output= gold(64)
console.log(output)

function length(resultmeter){
return 10000 + ' ' + 'meter' + ' '+ '=' +' '+ resultmeter/1000 + ' '+'kilometer'
}
let equal= length (10000)
console.log(equal) 

// anonymous function 

let math = function(num1, num2){
    return num1 + num2;
};
console.log(math(10,20));