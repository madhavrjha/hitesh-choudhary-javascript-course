// Creating and Printing Array
var country = ["India", "USA", "Japan", "Austria"];
var states = ["Delhi", "Rajasthan", "Mumbai", "Kolkata", "Punjab"];

console.log(country);

// This is valid, too; but, not recommended
var user = ["Madhav Jha", 21, true];
console.log(user);


// Trying some Static Function of Array
console.log(Array.from('Madhav Jha'));
console.log(Array.isArray(user));


// Accessing Array Item using Index Position
console.log(`First Country in the Array is ${country[0]}`);
console.log(`Last Country in the List is ${country[country.length -1]}`);
console.log('');


// Loop Over the Array
country.forEach((item, index) => {
    console.log(`country[${index}] = ${item}`);
});


// Add an Item at the End of Array
country.push('UK');
console.log(country);

// Remove an Item at the End of Array
country.pop();
console.log(country);


// Remove an Item at the Beginning of Array
country.shift();
console.log(country);


// Add an Item at the Beginning of Array
country.unshift("UAE");
console.log(country);


// Find an Index of Array
console.log(`Index of Japan is , ${country.indexOf('Japan')}`);
