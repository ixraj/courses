// Basic Event Loop with `setTimeout`
console.log('Start');

setTimeout(() => {
    console.log('Timeout 1');
}, 1000);

setTimeout(() => {
    console.log('Timeout 2');
}, 0);

console.log('End');



// Event Loop with Promises
console.log('Start');

const promise = new Promise((resolve, reject) => {
    console.log('Promise initialized');
    resolve('Promise resolved');
});

promise.then((message) => {
    console.log(message);
});

console.log('End');



// Event Loop with `async` /`await`
async function asyncFunction() {
    console.log('Async function start');
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Async function end');
}

console.log('Start');
asyncFunction();
console.log('End');



// Event Loop with `setImmediate` 
console.log('Start');

setImmediate(() => {
    console.log('Immediate');
});

setTimeout(() => {
    console.log('Timeout');
}, 0);

console.log('End');



// Event Loop with `process.nextTick`
console.log('Start');

process.nextTick(() => {
    console.log('Next Tick');
});

console.log('End');



// Event Loop with `setTimeout` and `Promise`
console.log('Start');

setTimeout(() => {
    console.log('Timeout 1');
}, 0);

Promise.resolve().then(() => {
    console.log('Promise 1');
});

setTimeout(() => {
    console.log('Timeout 2');
}, 0);

Promise.resolve().then(() => {
    console.log('Promise 2');
});

console.log('End');



// Event Loop with  `setInterval`
console.log('Start');

let counter = 0;
const intervalId = setInterval(() => {
    counter++;
    console.log('Interval count:', counter);
    if (counter === 3) {
        clearInterval(intervalId);
    }
}, 1000);

console.log('End');

