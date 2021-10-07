const User = require('./39 classes.js');

class SubAdmin extends User {

    constructor (name, email) {
        super(name, email);
        this.role = 'subadmin';
    }

    logIn () {
        console.log('LogIn for SubAdmin');
    }

}

var madhav = new SubAdmin('Madhav', 'madhav99jha@gmail.com');
madhav.logIn();
console.log(madhav.getCourseList());