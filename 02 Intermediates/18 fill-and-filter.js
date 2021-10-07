
// Fill Some Value in Array
var numbers = [92, 72, 130, 22, 8, 750, 58, 18, 32, 2];

numbers.fill(null, 0, 5);
console.log(numbers);


// Filter Array According to Needs
var numbers = [92, 72, 130, 22, 8, 750, 58, 18, 32, 2];

numbers = numbers.filter((item) => item > 50);
console.log(numbers);