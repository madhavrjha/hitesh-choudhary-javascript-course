// this will refer global object
console.log(this);

var user = {
    firstName: 'Madhav',
    lastName: 'Jha',
    courseCount: 4,
    getCourseCount: function () {
        // this will refer current object
        console.log(this);
        sayHello();

        function sayHello () {
            // this will refer global object
            console.log(this);
        }
    }
}

user.getCourseCount();


/* 
    REMEMBER: On Regular Function Call 'this' will refer Global Object.
            On Object Funcation call 'this' will refer Current Object

*/
