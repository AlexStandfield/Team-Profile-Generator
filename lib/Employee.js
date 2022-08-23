const inquirer = require("inquirer");

class Employee {
    constructor(name, id, email) {
        {
            this.name = name,
            this.id = id,
            this.email = email,
            this.role = 'Employee';
        }
    }
    getName(name) {
        if (name) {
            this.name = name;
        }
        return this.name;
    }
    getId(id){
        if (id) {
            this.id = id;
        }
        return this.id;
    }
    getEmail(email) {
        if (email) {
            this.email = email;
        }
        return this.email;
    }
    getRole() {
        return this.role;
    }
}

module.exports = Employee;