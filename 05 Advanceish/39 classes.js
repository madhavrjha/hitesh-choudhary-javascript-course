class User {
    
    constructor (name, email) {
        this.name = name;
        this.email = email;
    }

    #courseList = [];

    getInfo () {
        return {
            name: this.name,
            email: this.email
        };
    }

    enrollCourse (...courseList) {
        for (let courseName of courseList) {
            this.#courseList.push(courseName);
        }
    }

    totalCourseList () {
        return this.#courseList.length;
    }

    getCourseList () {
        return this.#courseList;
    }

    logIn () {
        console.log('Logged In for User');
    }

}

module.exports = User;