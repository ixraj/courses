// // Part 1: Compile-Time Error (Syntax Error)
// console.log(1);




// // Part 2: Runtime Error (Reference Error)
// try {
//     console.log("Try block starts here");
//     console.log(x);

//     console.log("Try block ends here");
// }
// catch(err) {
//     console.log("I am inside the catch block");
//     console.log("You error is here: ", err.message);
// }
// finally {
//     console.log("I will run every time, as I am the finally block");
// }






// // Part 3: Custom Error
// try {
//     // Initial error
//     try {
//         console.log(x);
//     }
//     catch (err) {
//         throw new Error("Bhai pahle declare kro, fir print karna");
//     }
//     // Additional error handling
//     let errorCode = 100;
//     if (errorCode === 100) {
//         throw new Error("Invalid Json");
//     }
// }
// catch (err) {
//     console.log("Caught an error: ", err.message);
// }