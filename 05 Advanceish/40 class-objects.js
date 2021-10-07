// import User from './39 classes.js';

const User = require("./39 classes.js");

hitesh = new User('Hitesh', 'hitesh@lco.com');
hitesh.enrollCourse("JavaScript", "ReactJS", "NodeJS", "ExpressJS", "MongoDB");

// console.log(hitesh.getCourseList());

for (let course of hitesh.getCourseList()) {
    console.log(course);
}