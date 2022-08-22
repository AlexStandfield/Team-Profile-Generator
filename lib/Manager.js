const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, role, officeNumber) {
        {
            super(name, id, email);
            this.role = role;
            this.officeNumber = officeNumber;
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
        return this.email
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