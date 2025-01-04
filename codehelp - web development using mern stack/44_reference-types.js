// // Code 1: Object Creation and Methods
// let obj = {
//     name: "Aditya",
//     age: 19,
//     weight: 65,
//     height: "5ft 9in",
//     greet: function () {
//         console.log("Hello Sir, What's Up");
//     }
// };
// console.log(obj);
// obj.greet();
// console.log(typeof obj);





// // Code 2: Array Creation and Basic Operations
// let arr1 = [1, 2, 3, 4, 5];
// let brr1 = ['Aditya', 1, true];

// brr1.push('Raj');
// brr1.pop();
// brr1.shift();
// brr1.unshift('Aditya Raj');
// brr1.push(20, 40, 70);
// console.log(brr1);





// // Code 3: Array Splice Operation
// let brr2 = ['Aditya', 1, true];
// brr2.splice(1, 2, 'aman');
// console.log(brr2);





// // Code 4: Filtering Even Numbers from an Array
// let arr2 = [10, 20, 30, 11, 21, 44, 51];
// let evenArray = arr2.filter((number) => number % 2 === 0);
// console.log(evenArray);





// // Code 5: Mapping Array to Square of Numbers
// let arr3 = [10, 20, 30, 11, 21, 44, 51];
// let ansArray = arr3.map((number) => number * number);
// console.log(ansArray);





// // Code 6: Filtering Numbers from a Mixed Array
// let arr4 = [1, 2, 'aditya', 'raj', null];
// let numberArray = arr4.filter((value) => typeof value === 'number');
// console.log(numberArray);





// // Code 7: Reducing Array to the Sum of its Elements
// let arr5 = [10, 20, 30, 40];
// let sum = arr5.reduce((acc, curr) => acc + curr, 0);
// console.log(sum);





// // Code 8: Sorting an Array and Finding Index
// let arr6 = [3, 9, 1, 7, 4, 2, 8];
// arr6.sort((a, b) => a - b);
// console.log(arr6);
// console.log(arr6.indexOf(9));





// // Code 9: Looping Through an Array Using Traditional Loop and forEach
// let arr7 = [10, 20, 30];
// let length = arr7.length;
// console.log("Length: ", length);

// // Traditional loop
// for (let index = 0; index < length; index++) {
//     console.log(arr7[index]);
// }

// // Using forEach to iterate through the array
// arr7.forEach((value, index) => {
//     console.log("Number: ", value, " Index: ", index);
// });





// // Code 10: Calculating Sum Using a Function and forEach
// let arr8 = [10, 20, 30, 40, 50];

// let getSum = (arr) => {
//     let sum = 0;
//     arr.forEach((value) => {
//         sum += value;
//     });
//     return sum;
// };

// let totalSum = getSum(arr8);
// console.log(totalSum);