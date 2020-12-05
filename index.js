const inquirer = require('inquirer');
const logo = require('asciiart-logo');
require('console.table');
const db = require("./config");

init();

// Display logo text, load main prompts
function init() {
    const logoText = logo({
        name: 'Employee Tracker',
        lineChars: 10,
        padding: 2,
        margin: 3,     
        borderColor: 'green',
        logoColor: 'green',
    }).render();
    
    console.log(logoText);

    employeePromts();
}

async function employeePromts() {
    const { choice } = await prompt([
        {
            name: 'choice',
            type: 'list',
            message: 'What would you like do?',
            choices: [
                {
                    name: 'View All Employees',
                    value: 'VIEW_EMPLOYEES'
                },
                {
                    name: 'View All Employees By Department',
                    value: 'VIEW_EMPLOYEES_BY_DEPARTMENT'
                },
                {
                    name: 'View All Employees By Manager',
                    value: 'VIEW_EMPLOYEES_BY_MANAGER'
                },
                {
                    name: 'Add Employee',
                    value: 'ADD_EMPLOYEE'
                },
                {
                    name: 'Remove Employee',
                    value: 'REMOVE_EMPLOYEE'
                },
                {
                    name: 'Update Employee Role',
                    value: 'UPDATE_EMPLOYEE_ROLE'
                },
                {
                    name: 'Update Employee Manager',
                    value: 'UPDATE_EMPLOYEE_MANAGER'
                },
                {
                    name: 'View All Role',
                    value: 'VIEW_ROLES'
                },
                {
                    name: 'Add Role',
                    value: 'ADD_ROLE'
                },
                {
                    name: 'Remove Role',
                    value: 'REMOVE_ROLE'
                },
                {
                    name: 'View All Departments',
                    value: 'VIEW_DEPARTMENTS'
                },
                {
                    name: 'Add Department',
                    value: 'ADD_DEPARTMENT'
                },
                {
                    name: 'Remove Department',
                    value: 'REMOVE_DEPARTMENT'
                },
                {
                    name: 'Quit',
                    value: 'QUIT'
                }
            ]
        }
    ])
    switch(choice) {
        case 'View All Employees':

        case 'View All Employees By Department':
            break;

        case 'View All Employees By Manager':
            break;

        case 'Add Employee':
            break;

        case 'Remove Employee':
            break;
        
        case 'Update Employee Role':
            break;

        case 'Update Employee Manager':
            break;
    
        default:
            return quit();
    }
}
