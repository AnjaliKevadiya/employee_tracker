const connection = require("./connection");

class DB {

    constructor(connection) {
        this.connection = connection;
    }

    viewAllEmployees() {
        return this.connection.query(
            'SELECT * FROM employee'
        );
    } 

    viewAllRoles() {
        return this.connection.query(
            'SELECT role.id, role.title, role.salary, department.name FROM role LEFT JOIN department ON role.department_id = department.id'
        );
    }

    viewAllDepartments() {
        return this.connection.query(
            'SELECT department.id, department.name, SUM(role.salary) AS utilized_budget FROM department LEFT JOIN role ON role.department_id = department.id LEFT JOIN employee ON employee.role_id = role.id GROUP BY department.id, department.name'
        );
    }
}

module.exports = new DB(connection);