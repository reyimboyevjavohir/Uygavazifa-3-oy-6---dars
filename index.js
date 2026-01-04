//1-masala

// Array.prototype.sum = function () {
//   let total = 0;
//   for (let i = 0; i < this.length; i++) {
//     total += this[i];
//   }
//   return total;
// };

// let arr = [1, 2, 3, 4];
// console.log(arr.sum()); 

//2-masala

// String.prototype.reverse = function () {
//   let reverse = "";
//   for (let i = this.length - 1; i >= 0; i--) {
//     reverse += this[i];
//   }
//   return reverse;
// };
// let str = "JavaScript";
// console.log(str.reverse());


//3-maasala

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// Person.prototype.info = function () {
//   return `Ism: ${this.name}, Yosh: ${this.age}`;
// };
// let p1 = new Person("Ali", 20);
// console.log(p1.info());

//4-masala

// let p2 = new Person("Vali", 22);
// let p3 = new Person("Hasan", 25);
// console.log(p2.info());
// console.log(p3.info());

//5-masala


// Array.prototype.myConcat = function (arr2) {
//   let result = [];
//   for (let i = 0; i < this.length; i++) {
//     result.push(this[i]);
//   }
//   for (let j = 0; j < arr2.length; j++) {
//     result.push(arr2[j]);
//   }
//   return result;
// };
// let a1 = [1, 2];
// let a2 = [3, 4];
// console.log(a1.myConcat(a2));

//6-masala

// Object.prototype.Keys = function () {
//   let keys = [];
//   for (let key in this) {
//     if (this.hasOwnProperty(key)) {
//       keys.push(key);
//     }
//   }
//   return keys;
// };

// let obj = { a: 1, b: 2, c: 3 };
// console.log(obj.Keys()); 

//7-masala

// Object.prototype.sayHello = function () {
//   return "Hello Object";
// };
// let testObj = {};
// console.log(testObj.sayHello());
// delete Object.prototype.sayHello;
// console.log(testObj.sayHello); 

//8-masala

// String.prototype.countLetters = function () {
//   return this.length;
// };

// let word = "Hello";
// console.log(word.countLetters()); 

//9-masala

// Array.prototype.lastElement = function () {
//   return this[this.length - 1];
// };
// let numbers = [10, 21, 334];
// console.log(numbers.lastElement()); 

//10-masala

// Object.prototype.isEmpty = function () {
//   return Object.keys(this).length === 0;
// };
// let o1 = {};
// let o2 = { x: 1 };
// console.log(o1.isEmpty()); 
// console.log(o2.isEmpty());


//qo'shimcha-1

// Array.prototype.getEven = function () {
//   let result = [];
//   for (let i = 0; i < this.length; i++) {
//     if (this[i] % 2 === 0) {
//       result.push(this[i]);
//     }
//   }
//   return result;
// };
// let arr = [1, 2, 3, 4, 5, 6];
// console.log(arr.getEven()); 

//qo'shimcha-2

// String.prototype.capitalize = function () {
//   if (this.length === 0) return "";
//   return this[0].toUpperCase() + this.slice(1);
// };
// let text = "javascript";
// console.log(text.capitalize());

//qo'shimcha-3

// function Student(name, age) {
//   this.name = name;
//   this.age = age;
// }
// Student.prototype.isName = function () {
//   return this.age >= 18;
// };
// let s1 = new Student("Ali", 20);
// let s2 = new Student("Vali", 16);
// console.log(s1.isName()); 
// console.log(s2.isName());



