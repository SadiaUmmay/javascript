function sum(x, y){
return x / y;
};
let a=5;
let b= 7;
let total = sum( a, b);
// console.log(total);

//  higher order function
// function sub(num1, num2, add){
//     return add(num1, num2)
// };
// let add = (number1, number2) => number1 + number2;
// // console.log (sub(30, 20, add))

// arrow function 
// let number = (num1, num2) => {
//     let total = num1 + num2
//     return total * total;
//  };
//  console.log(number(10, 20));

 
function div(x ,y){
    return (Math.ceil(x/y));
};
// let totalPage = 400;
// let pagePerDay = 7;
// let daysToComplete = div(totalPage,pagePerDay);
console.log(div(400, 7));
