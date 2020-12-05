const { prompt } = require('inquirer');
const logo = require('asciiart-logo');
require('console.table');
const db = require('./config');

init();

// Display logo text, load main prompts
function init() {
    const logoText = logo({
        name: 'Employee Tracker',
        lineChars: 10,
        padding: 2,
        margin: 3,     
        borderColor: 'green',
        logoColor: 'green'
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
    ]);
    
    switch(choice) {

        case 'VIEW_EMPLOYEES':
            return viewEmployees();

        case 'VIEW_EMPLOYEES_BY_DEPARTMENT':
            return viewEmployeesByDepartment();

        case 'VIEW_EMPLOYEES_BY_MANAGER':
            return viewEmployeesByManager();

        case 'ADD_EMPLOYEE':
            return addEmployee();

        case 'REMOVE_EMPLOYEE':
            return removeEmployee();

        case 'UPDATE_EMPLOYEE_ROLE':
            return updateEmployeeRole();

        case 'UPDATE_EMPLOYEE_MANAGER':
            return updateEmployeeManager();
    
        case 'VIEW_ROLES':
            return viewRoles();

        case 'ADD_ROLE':
            return addRole();

        case 'REMOVE_ROLE':
            return removeRole();

        case 'VIEW_DEPARTMENTS':
            return viewDepartments();

        case 'ADD_DEPARTMENT':
            return addDepartment();

        case 'REMOVE_DEPARTMENT':
            return removeDepartment();

        default:
            return quit();
    }
}

async function viewEmployees() {


    const employees = await db.viewAllEmployees();
    console.log(employees);

    console.log("\n");
    console.table(employees);
    employeePromts();
}

async function viewEmployeesByDepartment() {
    employeePromts();
}

async function viewEmployeesByManager() {
    employeePromts();
}

async function addEmployee() {
    employeePromts();
}

async function removeEmployee() {
    employeePromts();
}

async function updateEmployeeRole() {
    employeePromts();
}

async function updateEmployeeManager() {
    employeePromts();
}

async function viewRoles() {

    const roles = await db.viewAllRoles();
    console.log('\n');
    console.table(roles);
    
    employeePromts();
}

async function addRole() {
    employeePromts();
}

async function removeRole() {
    employeePromts();
}

async function viewDepartments() {

    const departments = await db.viewAllDepartments();
    console.log('\n');
    console.table(departments);

    employeePromts();
}

async function addDepartment() {
    employeePromts();
}

async function removeDepartment() {
    employeePromts();
}

function quit() {
    console.log("Goodbye!");
    process.exit();
}