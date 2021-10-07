/*

    1. Undefined Properties of Object Finds their Value in Outside Variable
    2. Object's Properties could be stores as a variable and access like an array

*/


let score = 23;
let factor = 'health';

const user = {
    name: 'Madhav',
    score,              // score will be 23
    highScore: 100,
    health: 'Good'
};

console.log(user.score); // 23
console.log(user[factor]); // Good