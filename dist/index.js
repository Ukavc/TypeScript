"use strict";
let a = 5;
let b = 1;
let c = 2;
console.log("Addition:" + " " + (a + b));
console.log("Subtraction:" + " " + (a - b));
console.log("Multiplication:" + " " + (a * c));
console.log("Division:" + " " + (a / c));
/**************************************/
function addition() {
    return ("Addition:" + " " + (a + b));
}
console.log(addition());
function subtraction() {
    return ("Subtraction:" + " " + (a - b));
}
console.log(subtraction());
function multiplication() {
    return ("Multiplication:" + " " + (a * c));
}
console.log(multiplication());
function division() {
    return ("Division:" + " " + (a / c));
}
console.log(division());
/***************************************/
function NumOperation() {
    return ("Addition:" + " " + (a + b) + "\n" + "Subtraction:" + " " + (a - b) + "\n" + "Multiplication:" + " " + (a * c) + "\n" + "Division:" + " " + (a / c));
}
console.log(NumOperation());
/***************************************/
function NumOperationFun() {
    return (addition() + "\n" + subtraction() + "\n" + multiplication() + "\n" + division());
}
console.log(NumOperationFun());
