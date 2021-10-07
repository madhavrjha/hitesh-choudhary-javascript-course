/*
    Function declaration are scanned and Made Available
    Variable declaration are scanned and Made undefined
*/


// [Scanned Funcation] and [Available to call]
tipper(5);

function tipper (cost) {
    var payable = parseInt(cost) + 5;
    console.log(payable);
}

// [Scanned Variable] but [Undefined]
sayHello('Madhav');                             // Error

var sayHello = function (name) {
    console.log(`Hello, ${name}`);
}

// [Scanned Variable] but [Undefined]
console.log(name);
var name = "Madhav Jha";