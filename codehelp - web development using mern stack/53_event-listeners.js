// // Code 1: Function to change the text of the paragraph with id 'fpara'
// function changeText(event) {
//     console.log(event);
//     let fpara = document.getElementById('fpara');
//     fpara.textContent = "Hello Aditya Raj";
// }
// let fpara = document.getElementById('fpara');

// fpara.addEventListener('click', changeText);

// fpara.removeEventListener('click', changeText);

// let anchorElement = document.getElementById('fanchor');






// // Code 2: Function to handle anchor click and prevent default behavior
// anchorElement.addEventListener('click', function (event) {
//     event.preventDefault();
//     anchorElement.textContent = "You have clicked";
// });

// console.log("Hi");

// let paras = document.querySelectorAll('p');






// // Code 3: Function to alert the text content of the clicked paragraph
// function alertPara(event) {
//     alert("You have clicked on Paragraph: " + event.target.textContent);
// }

// for (let i = 0; i < paras.length; i++) {
//     let para = paras[i];
//     console.log("Event listener added to paragraph " + (i + 1));
//     para.addEventListener('click', alertPara);
// }






// // Code 4: Function to alert the text content when a SPAN inside a paragraph is clicked
// function alertPara(event) {
//     if (event.target.nodeName === 'SPAN') {
//         alert("You have clicked on Paragraph: " + event.target.textContent);
//     }
// }
// let mydiv = document.getElementById('wrapper');

// document.addEventListener('click', alertPara);
