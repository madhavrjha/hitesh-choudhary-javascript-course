// Todo: Create a function that can answer the role of a user.
// A user can be on following rules:
// admin - gets full access
// subadmin - gets access to create/delete courses
// testprep - gets access to create/delete tests
// user - gets access to consume content
// other - trial user

// Defining Function
/*
    function getUserRole (name, role) {
        Your Code...
    }
*/

// Refer a Function
/*
    var getUserRole = function (name, role) {
        Your Code...
    }
*/

// Arrow Function
/*
    var getUserRole = (name, role) => {
        Your Code...
    }
*/

var getUserRole = (name, role) => {
    switch (role) {
        case "admin":
            return `${name} is admin with all access`;
        case "subadmin":
            return `${name} is subadmin gets access to create/delete courses`;
        case "testprep":
            return `${name} is testprep gets access to create/delete tests`;
        case "user":
            return `${name} is user gets access to consume content`;
        case "other":
            return `${name} is trail user`;
    }
}

console.log(getUserRole("Madhav", "testprep"));