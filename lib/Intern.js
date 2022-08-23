const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, role, school) {
        {
            super(name, id, email)
            this.role = role
            this.school = school
        }
    }
    getSchool(school) {
        if (school) {
            this.school = school;
        }
        return this.school;
    }
    getRole() {
        return this.role = 'Intern';
    }
}

module.exports = Intern;