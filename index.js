const inquirer = require('inquirer')
const Employee = require('./lib/Employee');

function employees() {
    this.employees = [];
}

Employee.prototype.initializeApp = function () {
    inquirer
        .prompt([
            {
                type: 'text',
                name: 'name',
                message: 'What is the employees name?'
            },
            {
                type: 'text',
                name: 'id',
                message: 'What is the employees id?'
            },
            {
                type: 'text',
                name: 'email',
                message: 'What is the employees email?'
            },
        ])
        .then(employeeData => {
            if (this.employee.role === 'Employee') {
                this.employee = new Employee(employeeData);
                employees.push(this.employee)
            }
        })
};