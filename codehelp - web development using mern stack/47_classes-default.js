// // Part 1: Function with Default Parameters
// function solve(value = "Aditya") {
//     console.log("Hello", value);
// }
// solve(undefined);





// // Part 2: Function with Dependent Default Parameters
// function sayName(fName = "Aditya", lName = "Raj") {
//     console.log("My name is:", fName, lName)
// }
// sayName();




// // Part 3: Class Definition
// class Human {
//     // Properties
//     age = 19;
//     wt = 60;
//     ht = 180;

//     note = "in the Garden.";        //adding extra Code.
//     note2 = "from the police";      //adding extra code

//     constructor(newAge, newHeight, newWeight) {
//         if (newAge) this.age = newAge;
//         if (newHeight) this.ht = newHeight;
//         if (newWeight) this.wt = newWeight;
//     }
//     // Behaviour
//     walking() {
//         console.log("I am walking", this.note);         // edit
//     }

//     running() {
//         console.log("I am running", this.note2);        // edit
//     }

//     get fetchWeight() {
//         return this.wt;
//     }

//     set modifyWeight(val) {
//         this.wt = val;
//     }
// }

// let obj = new Human();
// console.log(obj);        // remove .wt

// obj.running();
// obj.walking();
