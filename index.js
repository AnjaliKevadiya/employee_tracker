// var connection = require("./config/connection");
var inquirer = require("inquirer");

function employeePromt() {
    inquirer.prompt([
        {
            name: 'action',
            type: 'list',
            choices: [
                'View All Employees',
                'View All Employees By Department',
                'View ALl Employees By Manager',
                'Add Employee',
                'Remove Employee',
                'Update Employee Role',
                'Update Employee Manager',
                'Exit'
            ],
            message: 'What would you like do?'
        }
    ])
    .then(function(answer) {
        switch(answer.action) {
            case 'View All Employees':
                break;

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
                // connection.end();
        }
    })
}

employeePromt();