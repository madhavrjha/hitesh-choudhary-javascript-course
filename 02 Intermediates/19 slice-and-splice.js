var numbers = [92, 72, 130, 22, 8, 750, 58, 18, 32, 2];

var partArray = numbers.slice(1, 5);
console.log(partArray);


var deletedArray = numbers.splice(numbers.length -4, 4);
console.log(deletedArray);

console.log(numbers);