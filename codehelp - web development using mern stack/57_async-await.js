// // Code 1: Async function with setTimeout
// async function getDataWithTimeout() {
//     setTimeout(function () {
//         console.log("I am inside setTimeout block");
//     }, 3000); // Executes after 3 seconds
// }

// let output = getDataWithTimeout(); // Output of getData will be undefined because setTimeout is async





// // Code 2: Fetch GET request - async
// async function getData() {
//     // Fetching data from API - async
//     let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     // Parsing JSON response - async
//     let data = await response.json();
//     console.log("GET response:", data);
// }
// getData();
// // Scenario:
// // prepare url / api endpoint -> sync
// // await fetch data -> network call -> async
// // process data -> sync





// // Code 3: Fetch POST request - async
// const myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");

// const postUrl = "https://jsonplaceholder.typicode.com/posts";

// const postOptions = {
//     method: "POST",
//     body: JSON.stringify({ username: "aditya raj" }), // Fixed typo: JSON, stringify -> JSON.stringify
//     headers: myHeaders,
// };

// // Async function to fetch POST data
// async function postData() {
//     const response = await fetch(postUrl, postOptions);
//     let data = await response.json(); // Fixed typo: wait response.json() -> await response.json()
//     console.log("POST data response: ", data);
// }
// postData();





// // Code 4: Combining Fetch POST and GET requests with async/await
// const newPostOptions = {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' }, // Fixed headers to include proper Content-Type
//     body: JSON.stringify({
//         title: 'Aditya Raj -> I am in love with someone.',
//         userId: 5,
//         /* other post data */
//     })
// };

// async function postNewData() {
//     const response = await fetch('https://dummyjson.com/posts/add', newPostOptions);
//     let data = await response.json();
//     console.log("POST new data response: ", data);
// }

// // GET request to check the posted data
// async function getNewData() {
//     const url = "https://dummyjson.com/posts";
//     const response = await fetch(url);
//     let data = await response.json();
//     console.log("GET new data response: ", data);
// }

// // Process both POST and GET requests
// async function processData() {
//     await postNewData();
//     await getNewData();
// }
// processData();





// // Code 5: Basic Promise with multiple then, catch, and finally
// let promise1 = new Promise((resolve, reject) => {
//     let success = true;
//     if (success) {
//         resolve("Promise Fulfilled");
//     } else {
//         reject("Promise Rejected");
//     }
// });

// promise1.then((message) => {
//     console.log("First msg: " + message);
//     return "Promise fulfilled second message";
// }).then((message) => {
//     console.log("Second msg: " + message);
//     return "Promise fulfilled third message";
// }).then((message) => {
//     console.log("Third msg: " + message);
// }).catch((error) => {
//     console.log(error);
// }).finally(() => {
//     console.log("Main to final hu, chalunga pakka");
// });





// // Code 6: Using Promise.all to resolve multiple promises
// let promise2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000, "First");
// });

// let promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000, "Second");
// });

// let promise4 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 4000, "Third");
// });

// Promise.all([promise2, promise3, promise4])
//     .then((values) => {
//         console.log(values); // Output: ["First", "Second", "Third"]
//     })
//     .catch((error) => {
//         console.error("Error: " + error);
//     });





// // Code 7: Simple Promise with setTimeout
// let promise5 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000, "First");
// });

// promise5.then((message) => {
//     console.log("Simple Promise message: " + message);
// });
