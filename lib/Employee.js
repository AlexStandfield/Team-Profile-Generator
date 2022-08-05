const inquirer = require("inquirer");

class Employee {
    constructor() {
        this.name;
        this.id;
        this.email;
        this.role;
    }
    getName(name = '') {
        return this.name = name;
    }
    getId(id = 0){
        return this.id = id;
    }
    getEmail(email = '') {
        return this.email = email;
    }
    getRole() {
        return this.role = 'Employee';
    }
}

module.exports = Employee;