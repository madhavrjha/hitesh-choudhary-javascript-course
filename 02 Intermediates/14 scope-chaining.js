/*
    if-else, switch, while, for, do-while does not create scope in JavaScript
    only funcation can create Scope in JavaScript
*/



var name = "Madhav Jha";
console.log(`Line No. 3's Name is ${name}`);

function sayHello () {
    var name = "Sandeep Singh";
    console.log(`Line No. 7's Name is ${name}`);
    sayHelloAgain();

    function sayHelloAgain () {
        var name = "Rikesh Yadav";
        console.log(`Line No. 12's Name is ${name}`);
    }
}

sayHello();