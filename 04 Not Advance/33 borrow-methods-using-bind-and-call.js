var user = {
    firstName: 'Madhav',
    lastName: 'Jha',
    role: 'Admin',
    courseCount: 3,
    getInfo: function () {
        console.log(`
            Name is ${this.firstName} ${this.lastName}
            Role is ${this.role}
            Enrolled in ${this.courseCount} Courses
        `);
    }
};

// console.log(user);
// user.getInfo();

var specialUser = {
    firstName: 'Hitesh',
    lastName: 'Choudhary',
    role: 'Sub-Admin',
    courseCount: 5
};

// console.log(specialUser);

// This Bind the Method and Returns the Function
var specialUserGetInfo = user.getInfo.bind(specialUser);
specialUserGetInfo();

// This Bind the Method and Calls the Function
user.getInfo.call(specialUser);