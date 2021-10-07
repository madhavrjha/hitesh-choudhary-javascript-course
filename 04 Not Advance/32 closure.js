/* 
    Calling Function like this called curring
    functionName()()()();
*/



function init () {
    
    var name = 'Hitesh';
    console.log('I am INIT...');

    function sayHello() {
        console.log(`Hello, ${name}`);
    }

    return sayHello;
}

// Closure does not clear 'name' from the memory
init()();



function doAddition (x) {
    return function withAddition (y) {
        return (x + y);
    }
}

// Closure does not clear 'x' from the memory
var z = doAddition(5)(4);
console.log(`Addition is ${z}`);