var numbers = [92, 72, 130, 22, 8, 750, 58, 18, 32, 2];

// Checking that all value is in array are even or not
var isAllEven = numbers.every(value => (value %2 === 0));
console.log(isAllEven);