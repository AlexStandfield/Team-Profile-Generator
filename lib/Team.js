const inquirer = require('inquirer')
const Employee = require('./Employee');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');

function Team() {
    this.employees = [];
    this.managers = [];
    this.engineers = [];
    this.interns = [];
}

Team.prototype.newTeam = function () {
    inquirer
        .prompt([
            {
                type: 'text',
                name: 'name',
                message: `What is the team member's name?`
            },
            {
                type: 'text',
                name: 'id',
                message: `What is the team member's id?`
            },
            {
                type: 'text',
                name: 'email',
                message: `What is the team member's email?`
            },
            {
                type: 'list',
                message: `What is this team member's role?`,
                name: 'role',
                choices: ['Employee', 'Manager', 'Engineer', 'Intern'],
            },
            // {
            //     type: 'confirm',
            //     name: 'exit',
            //     message: 'Do you want to add another team member?',
            //     validate: exitInput => {
            //         if (exitInput) {
            //             return this.newTeam();
            //         }
            //         return;
            //     }
            // } 
        ])
        .then(teamData => {
            if (teamData.role === 'Employee') {
                return this.employees.push(new Employee(teamData.name, teamData.id, teamData.email, teamData.role));
            } else if (teamData.role === 'Manager') {
                inquirer
                    .prompt(
                        {
                            type: 'text',
                            name: 'officeNumber',
                            message: `What is the manager's office number?`
                        }
                    )
                    .then(managerData => {
                        this.managers.push(new Manager(teamData.name, teamData.id, teamData.email, teamData.role, managerData.officeNumber))
                        // this.managers[0].getRole();
                        console.log(this.managers);
                    })
            }
        })
}


module.exports = Team;