const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, role, github) {
        {
            super(name, id, email)
            this.role = role
            this.github = github
        }
    }
    getGithub(github) {
        if (github) {
            this.github = github;
        }
        return this.github;
    }
    getRole() {
        return this.role = 'Engineer'
    }
}

module.exports = Engineer;