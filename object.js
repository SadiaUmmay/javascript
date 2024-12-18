// object declar

let person = {
 firstName : 'Jack',
    lastName : 'Pack' ,
    age : 29,
    isAdmin : true
};
// data add
person.nationality = "bangladeshi";
// data update
person.firstName = "Mack"
// data delete
delete person.lastName;
    
console.log(person)
// dot notation
// let userName = person.firstName
// console.log(userName);

// // bracket notation
// let userAge = person['age']
// console.log(userAge)



// let car = { 
//     name:'BMW',
//     color : 'Yellow', 
//     model : {
//         model1 :{
//             price: 8000000 ,
//             color: 'blue',
//         },
//         model2 :{
//             price: 4000000,
//             color: 'purple'
//         },
//         model3 :{
//             price: 7000000,
//             color: 'red',
//         }
//     }

// };
// // console.log(car.model.model2.color);
// console.log(car.model.model2['color']);

// // dot notation
// let carName = car.name;
// console.log(carName)

// // bracket notation
// let carModel = car['model'];
// console.log(carModel)

// let carColor= car.color;
// console.log(carColor)