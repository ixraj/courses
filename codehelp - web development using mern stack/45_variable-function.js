// // Part 1: Variable Declarations and Function Assignments
// let obj = {
//     age: 19,
//     wt: 36,
//     ht: 180,
//     greet: () => {
//         console.log("Hello World");
//     }
// };
// console.log(odj);
// obj.greet();





// // Part 2: Array of Function
// const arr = [
//     function (a, b) {
//         return a + b
//     },
//     function (a, b) {
//         return a - b;
//     },
//     function (a, b) {
//         return a * b;
//     }
// ];
// let first = arr[2];
// let ans2 = first(5, 5);
// console.log(ans2);





// // Part 3: Closure Function
// function solve(number) {
//     return function (multiplier) {
//         return number * multiplier;
//     };
// }
// let ans = solve(9);
// let finalAns = ans(8);
// console.log(finalAns);





// // Part 4: Function Passing
// function greetMe(greet, fullName) {
//     console.log("Hello", fullName);
//     greet();
// }

// function greet() {
//     console.log("Greeting for the day");
// }
// greetMe(greet, "Aditya");





// // Part 5: Error Handling
// let sayHello = function () {
//     console.log("Hello World, What's Up?");
// };

// sayMyName("Aditya")

// function sayMyName(finalName) {
//     console.log(finalName);
// }





// // Part 6: Object with Arithmetic Operations
// function solve(number) {
//     return {
//         add: function (value) {
//             return number + value;
//         },
//         subtract: function (value) {
//             return number - value;
//         },
//         multiply: function (value) {
//             return number * value;
//         },
//         divide: function (value) {
//             if (value === 0) {
//                 return 'Cannot divide by zero';
//             }
//             return number / value;
//         }
//     };
// }

// let operations = solve(5);

// console.log(operations.add(2));
// console.log(operations.subtract(3));
// console.log(operations.multiply(2));
// console.log(operations.divide(4));
// console.log(operations.divide(0));