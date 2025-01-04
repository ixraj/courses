// Code 1: First Outer Function
let name = "Aman";
function outerFunction() {
    {
        let name = "Prince";
    }
    let name = "Aditya";
    function innerFunction() {
        let name = "Raj";
        console.log(name);
    }
    innerFunction();
}
outerFunction();





// Code 2: Second Outer Function with Closure
function outerFunction() {
    let name = "Aditya";

    function innerFunction() {
        console.log(name);
    }
    return innerFunction;
}
let inner = outerFunction();
inner();
