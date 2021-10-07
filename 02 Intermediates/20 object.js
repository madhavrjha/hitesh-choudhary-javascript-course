var user = {
    firstName: 'Madhav',
    lastName: 'Jha',
    phoneNo: '9673290693',
    email: 'madhav99jha@gmail.com',
    country: 'IN',
    loggedInCount: 24,
    loggedInFrom: 'Facebook',
    courseList: [],
    addCourse: function (courseName) {
        this.courseList.push(courseName);
        return courseName;
    },
    totalCourse: function () {
        return this.courseList.length;
    },
    showInfo: function () {
        return `
            Name                :       ${this.firstName} ${this.lastName}
            Phone Number        :       ${this.phoneNo}
            Email               :       ${this.email}
            Country             :       ${this.country}
            Total Logged In     :       ${this.loggedInCount}
            Logged In From      :       ${this.loggedInFrom}
            Course List         :       ${this.courseList}
        `;
    }
};

console.log(`Name of User is ${user.firstName} ${user.lastName}`);

// console.log(user.loggedInCount);
// user.loggedInCount = 33;
// console.log(user.loggedInCount);

user.addCourse('JavaScript Course');
user.addCourse('ReactJS Course');
user.addCourse('NodeJS Course');

console.log(user.totalCourse());

console.table(user);
console.log(user.showInfo());