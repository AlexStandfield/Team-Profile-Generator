const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, role, officeNumber) {
        {
            super(name, id, email)
            this.role = role
            this.officeNumber = officeNumber
        }
    }
    getOfficeNumber(officeNumber) {
        if (officeNumber) {
            this.officeNumber = officeNumber;
        }
        return this.officeNumber;
    }
    getRole() {
        return this.role = 'Manager';
    }
}

module.exports = Manager;