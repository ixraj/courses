// // Part 1: Basic Object Copy using a For-In Loop
// let obj = {
//     age: 12,
//     wt: 69,
//     ht: 180
// };
// let dest1 = {};
// for (let key in obj) {
//     let newKey = key;
//     let newValue = obj[key];
//     dest1[newKey] = newValue;
// }
// obj.age = 90;
// console.log("Part 1 - Original obj: ", obj);
// console.log("Part 1 - Copied dest1: ", dest1);





// // Part 2: Object Copy using Object.assign
// let src1 = {
//     age: 12,
//     wt: 69,
//     ht: 180
// };
// let src2 = {
//     value: 101,
//     name: "Aditya Raj"
// };
// let dest2 = Object.assign({}, src1, src2);
// src1.age = 90;
// console.log("Part 2 - Original src1: ", src1);
// console.log("Part 2 - Copied dest2: ", dest2);





// // Part 3: Object Copy using Spread Operator
// let src3 = {
//     age: 12,
//     wt: 69,
//     ht: 180
// };
// let dest3 = { ...src3 };
// src3.age = 90;
// console.log("Part 3 - Original src3: ", src3);
// console.log("Part 3 - Copied dest3: ", dest3);





// // Part 4: Modifying the Original Object
// let obj2 = {
//     age: 12,
//     wt: 69,
//     ht: 180
// };
// console.log("Part 4 - Original obj2: ", obj2);
// obj2.color = "White";
// console.log("Part 4 - Modified obj2: ", obj2);