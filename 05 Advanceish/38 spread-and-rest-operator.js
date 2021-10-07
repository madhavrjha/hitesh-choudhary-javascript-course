
// This is the ... Used as REST OPerator
const addNumbers = function (...args) {
    var sum = 0;
    for (let number of args) {
        sum += number;
    }
    return sum;
}

console.log(addNumbers(1, 2));
console.log(addNumbers(1, 2, 3));
console.log(addNumbers(1, 2, 3, 4));
console.log(addNumbers(1, 2, 3, 4, 5));



var addAndMultiply = function (addValueOne, addValueTwo, productFactorOne, productFactorTwo) {
    return [(addValueOne + addValueTwo), (productFactorOne * productFactorTwo)];
}

var myNumbersToAdd = [5, 7];
var myNumbersToMultipy = [2, 5];

// Here is Used SPREAD Operator as ...
console.log(addAndMultiply(...myNumbersToAdd, ...myNumbersToMultipy));