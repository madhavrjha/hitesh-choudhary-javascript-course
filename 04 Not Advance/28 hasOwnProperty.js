var User = function (firstName, courseCount) {
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function () {
        console.log(`Total Course is: ${this.courseCount}`);
    }
};

User.prototype.getFirstName = function () {
    console.log(`Your First Name is: ${this.firstName}`);
}

var madhav = new User('Madhav', 10);
console.log(madhav);
madhav.getCourseCount();

if (madhav.hasOwnProperty('firstName')) {
    madhav.getFirstName();
}