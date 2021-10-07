
// This is REST Operator
function deposit(...amounts) {
    let currentAmount = 0;
    for (const amount of amounts) {
        currentAmount += amount;
    }
    return currentAmount;
}

console.log(deposit(100, 200, 300));



// This is SPREAD Operaotr
let myDeposits = [100, 200, 300, 400, 500];
let minimumDeposit = Math.min(...myDeposits);
console.log(minimumDeposit);