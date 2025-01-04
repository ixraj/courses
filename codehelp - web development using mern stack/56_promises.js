// let firstPromise = new Promise((resolve, reject) => {
//     console.log("Aditya");
//     reject(new Error("Internal Server Error"));
// });

// let firstPromise1 = new Promise( (resolve, reject) => {
//     setTimeout(function sayMyName() {
//         console.log("My name is Aditya Raj");
//     }, 10000);
// });

let promise1 = new Promise((resolve, reject) => {
    let success = false;
    if (success) {
        resolve("Promise Fulfilled");
    } else {
        reject("Promise Rejected");
    }
});

promise1.then((message) => {
    console.log("The message is: " + message);
    return "Success Path Completed";
}).catch((error) => {
    console.log("Error: " + error);
    return "Error Path Completed";
}).finally(() => {
    console.log("Promise has been settled (either fulfilled or rejected).");
    return "Final Path Completed";
});



// function sayMyName() {
//     console.log("My Name is love babbar");
// }
// setTimeout(sayMyName, 10000);