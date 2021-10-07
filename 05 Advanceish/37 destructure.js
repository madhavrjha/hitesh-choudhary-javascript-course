const user = ["Madhav", "Jha", "Admin", 3];

// Destructure of Array
var [firstName, lastName, role, courseCount] = user;

console.log(`
    Name is ${firstName} ${lastName}
    Role is ${role}
    Enrolled in ${courseCount} Courses
`);


const anotherUser = {
    firstName: 'Madhav',
    lastName: 'Jha',
    role: 'Admin',
    courseCount: 3
};

// Destructure of Object
var {firstName, lastName, role, courseCount} = anotherUser;
console.log(`
    Name is ${firstName} ${lastName}
    Role is ${role}
    Enrolled in ${courseCount} Courses
`);
