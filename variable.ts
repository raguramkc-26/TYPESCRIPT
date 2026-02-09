// create a variable and assign a value 25
// JavaScript
// let age = 25;

// TypeScript
//let age: number = 25;
//console.log(age);

//let age: number = 25;
//age = 'apple';
//console.log(age);

//Primitive data type
//let score: number = 96; //number
//let username: string = 'sathish'; //string
//let isActive: boolean = true;  //boolean
//console.log(score, username, isActive);

//Type Inference
//let age = 10; // the typescript automatically detects the data type of the variable
// as soon as the value is assigned.
// age = 'ten';

//Arrays in typeScript
//let numbers: number[] = [1, 2, 3, 4, 5];
//let names: string[] = ['Apple', 'Orange'];
//console.log(numbers);

// any type
//let data:any =  10; // type inference: the number type would be assinged to the variable will make the data type of the variable as such.

//data = 'ten'; // this will throw an error, because the type of data is trying to chgance

//data = true;

//console.log(data);

// Tuple: Fixed Structure
// let fruits: [string, number] = ['apple', 25];

// console.log(fruits);
// Enums: Enumeration Constants
//enum Direction {
//    Up, 
//    Down,
//    Left,
//    Right
//}
//let move: Direction = Direction.Right;
//console.log(move);

//enum example 2
//enum Rating {
  //  poor = 1,
  //  good,
  //  better,
  //  average,
  //  excellent,
//}
//let rating: Rating = Rating.excellent;
//console.log(rating);

// let student: {
//     name: string,
//     age: number,
//     isPassed: boolean,
//     [key: string]: any,
// } = {
//     name: 'krish',
//     age: 25,
//     isPassed: true
// }

// // console.log(student['name']);
// student.location = 'coimbatore';

// console.log(student);

// function add(a: number, b: number): number {
//     return a + b;
// }

// console.log(add(5, 6));

// arrow functions
// const add =  (a: number, b: number): number => {
//     return a + b;
// }

// console.log(add(5, 6));

// optional arguments
// const add =  (a: number, b?: number): number => {
//     return a + b;
// }

// console.log(add(5)); // b = undefined undefined + 5 = NaN (Not A Number)
// console.log(add(5, 6));

// default parameters
//const add =  (a: number, b: number = 0): number => {
  //  return a + b;
//}

//console.log(add(5)); // b = undefined undefined + 5 = NaN (Not A Number)
//console.log(add(5, 6));

// union types
//let id: number | string;
//id = 101;
//id = 'a101';
//console.log(id);

// Union types
//let id: number | string;
//id = 101;
//function getId(id: number | string) {
  //   console.log(id);
 //}
//getId(112);
// type User = {
//     name: string,
//     age: number,
// };


// Type Aliases
// let u1:User  = {
//     name: 'krish',
//     age: 25
// }

// console.log(u1);

//interface User {
  //  readonly name: string,
  //  age?: number
//}

//let u1: User = {
  //  name: "sathish"
//}

//u1.name = 'krish';

//console.log(u1);

//Optional Parameters
//function greeting(name: string, age?: number): string {
 // if(age) {
   // return "Hi," + name + ".you're " + age + "years old";
 // } else {
   // return "Hi," + name
  //}
//}
//console.log(greeting("krish", 25));
//optional parameters
//function calculateTotalPrice(price:number, quantity:number, taxRate:number):number | string  {
//if(price < 0 || quantity < 0 || taxRate < 0) {
//return "Invalid Input";
//}
//let totalPrice = (price * quantity) + (price*taxRate/100); 
//return totalPrice;
//}
//console.log(calculateTotalPrice(100, 2, 5));

// Date of Birth: 6 Feb 2026
// custom data types -> classes
// class -> custom data type or a template or a blueprint
class DOB { 
// declaration
// member variables
day: number;
month: string; 
year: number;
// constructor: method -- special method -- has same name as that of the class
// and called whenever we create an object to the class
constructor(day: number, month: string, year: number) { 
// to initialize variables (member variables)
this.day = day;
this.month = month; 
this.year = year;
console.log(this); // this -> dob1
}
//printObject(object: DOB) {
//console.log(object);
//}
}
// dob1 -> object
// object: it is an instance of a class
let dob1 = new DOB(6, 'Feb', 2026); 
console.log(dob1);
// this keyword -> current instance referring to the current object of the class
// implicitly passed to the class'es constructor or methods
// explicitly passed to the method
//dob1.printObject(dob1); 
//dob1 = DOB; {
//day: 6;
//month: 'Feb';
//year: 2026 
//}
