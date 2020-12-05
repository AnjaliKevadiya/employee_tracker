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
            'SELECT * FROM department'
        );
    }
}

module.exports = new DB(connection);