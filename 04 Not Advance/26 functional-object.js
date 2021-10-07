var User = function (firstName, courseCount) {
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function () {
        return `Total Course is: ${this.courseCount}`;
    }
};

hitesh = new User('Madhav', 3);
console.log(hitesh);