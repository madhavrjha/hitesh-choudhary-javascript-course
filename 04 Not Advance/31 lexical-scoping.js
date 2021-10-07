let number = 10;

function printNumber () {
    console.log(number);
}

function log () {
    let number = 20;
    printNumber();  // This will Print 10, Cause of Lexical Scoping
}

/*
    Lexical Scoping === Compile Time Scoping === Static Scoping
*/