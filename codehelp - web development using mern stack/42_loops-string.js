// // Function to create a closure that returns the square of a number
// function createSquareFunction(number) {
//     return function (number) {
//         return number * number;
//     };
// }




// // Function to demonstrate the closure usage
// function demonstrateClosure() {
//     let ans = createSquareFunction(5);
//     let finalAns = ans(10);
//     console.log(finalAns);
// }




// // Function to greet someone and then execute a greeting function
// function greetMe(greet, fullName) {
//     console.log("Hello", fullName);
//     greet();
// }




// // Greeting function
// function greet() {
//     console.log("Greeting for the day");
// }





// // Function to demonstrate greeting
// function demonstrateGreeting() {
//     greetMe(greet, "Aditya");
// }





// // Function to clone an object using iteration
// function cloneObjectUsingIteration(src) {
//     let dest = {};
//     for (let key in src) {
//         let newKey = key;
//         let newValue = src[key];
//         dest[newKey] = newValue;
//     }
//     return dest;
// }





// // Function to demonstrate object cloning
// function demonstrateObjectCloning() {
//     let src = {
//         age: 12,
//         wt: 68,
//         ht: 180
//     };

//     let dest = cloneObjectUsingIteration(src);
//     console.log("Cloned Object:", dest);

//     let src2 = {
//         value: 101,
//         name: "Aditya Raj"
//     };

//     let mergedDest = Object.assign({}, src, src2);
//     src.age = 90;

//     console.log("src:", src);
//     console.log("dest:", mergedDest);
// }





// // Function to demonstrate error handling
// function demonstrateErrorHandling() {
//     try {
//         console.log("Try block starts here");
//         // Reference error will occur here
//         console.log(x);
//         console.log("Try block ends here");
//     } catch (err) {
//         console.log("I am inside catch block");
//         console.log("Your error is here:", err.message);
//     } finally {
//         console.log("I will run every time, as I am the finally block");
//     }

//     try {
//         // Reference Error
//         console.log(x);
//     } catch (err) {
//         throw new Error("Bhai pahle declare kro, fer print karna");
//     }

//     let errorCode = 100;
//     if (errorCode === 100) {
//         throw new Error("Invalid Json");
//     }
// }





// // Main function to run all demonstrations
// function main() {
//     demonstrateClosure();
//     demonstrateGreeting();
//     demonstrateObjectCloning();
//     demonstrateErrorHandling();
// }

// // Run the main function
// main();






