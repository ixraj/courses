// // Code 1: Appending paragraphs directly to the document body
// const t1 = performance.now();

// for (let i = 1; i <= 100; i++) {
//     let para = document.createElement('p');
//     para.textContent = "This is paragraph of Code 1. " + i;
//     document.body.appendChild(para);
// }

// const t2 = performance.now();
// console.log("Total time by Code 1: " + (t2 - t1));




// // Code 2: Appending paragraphs to a div, then appending the div to the document body
// const t3 = performance.now();
// let mydiv = document.createElement('div');

// for (let i = 1; i <= 100; i++) {
//     let para = document.createElement('p');
//     para.textContent = "This is Paragraph of Code 2. " + i;
//     mydiv.appendChild(para);
// }
// document.body.appendChild(mydiv);

// const t4 = performance.now();
// console.log("Total time by Code 2: " + (t4 - t3));




// // Code 3: Using a document fragment to batch append paragraphs to the document body
// const t5 = performance.now();
// let fragment = document.createDocumentFragment();

// for (let i = 1; i <= 100; i++) {
//     let para = document.createElement('p');
//     para.textContent = "This is Paragraph of Code 3. " + i;
//     fragment.appendChild(para);
// }

// document.body.appendChild(fragment);

// const t6 = performance.now();
// console.log("Total time by Code 3: " + (t6 - t5));
