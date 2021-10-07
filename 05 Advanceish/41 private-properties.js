const User = require('./39 classes.js');

var hitesh = new User('Hitesh Choudhary', 'hitesh@lco.com');
hitesh.enrollCourse('Basic of Stock Market', 'Fundamental Analysis', 'Technical Analysis');

console.log(hitesh.getCourseList());

// console.log(hitesh.courseList);
// console.log(hitesh.#courseList);