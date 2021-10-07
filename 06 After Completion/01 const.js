// Const doesn't store Value in JavaScript but Refer the Value Location
// means, You can't change the reference but, You can extend the Reference through Array

const myNumber = 10; // is refering an object who stored 10 within it.


// This is Possible
const myArray = ['India', 'Paskistan', 'Bangadesh'];
myArray.push('Nepal');
console.log(myArray);

// This is not Possible
myArray = ['USA', 'UAE', 'England', 'UK', 'Japan'];