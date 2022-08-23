const inquirer = require('inquirer')
const Employee = require('./Employee');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');
const generatePage = require('../src/page-template')
const {writeFile, copyFile} = require('../utils/generate-site');

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
            }
        ])
        .then(teamData => {
            if (teamData.role === 'Employee') {
                this.employees.push(new Employee(teamData.name, teamData.id, teamData.email, teamData.role));
                return this.runNewTeam()
            } else if (teamData.role === 'Manager') {
                inquirer
                    .prompt({
                        type: 'text',
                        name: 'officeNumber',
                        message: `What is the manager's office number?`
                    })
                    .then(managerData => {
                        this.managers.push(new Manager(teamData.name, teamData.id, teamData.email, teamData.role, managerData.officeNumber));
                        return this.runNewTeam();
                    })
            } else if (teamData.role === 'Engineer') {
                inquirer
                    .prompt({
                        type: 'text',
                        name: 'github',
                        message: `What is the engineer's github?`
                    })
                    .then(engineerData => {
                        this.engineers.push(new Engineer(teamData.name, teamData.id, teamData.email, teamData.role, engineerData.github));
                        return this.runNewTeam();
                    })
            } else if (teamData.role === 'Intern') {
                inquirer
                    .prompt({
                        type: 'text',
                        name: 'school',
                        message: `What school do they attend?`
                    })
                    .then(internData => {
                        this.interns.push(new Intern(teamData.name, teamData.id, teamData.email, teamData.role, internData.school));
                        return this.runNewTeam();
                    })
            }
        })
}

Team.prototype.runNewTeam = function () {
    inquirer
        .prompt({
            type: 'list',
            message: 'Would you like to add a team member?',
            name: 'addAnother',
            choices: ['Yes', 'No']
        })
        .then(({addAnother}) => {
            if (addAnother === 'Yes') {
                return this.newTeam();
            }
            return this.createHTMLPage();
        })
}

Team.prototype.createHTMLPage = function () {
    inquirer
        .prompt({
            type: 'list',
            message: 'Would you like to genereate webpage?',
            name: 'page',
            choices: ['Yes', 'No']
        })
        .then(({page}) => {
            if (page === 'No') {
                return this.newTeam
            }
            let team = [this.employees, this.managers, this.engineers, this.interns]
            return team;
        })
        .then(newTeamData => {
            return generatePage(newTeamData);
        })
        .then(pageHTML => {
            return writeFile(pageHTML);
        })
        .then(writeFileResponse => {
            console.log(writeFileResponse);
            return copyFile();
        })
        .then(copyFileResponse => {
            console.log(copyFileResponse);
        })
        .catch(err => {
            console.log(err);
        })
}

module.exports = Team;