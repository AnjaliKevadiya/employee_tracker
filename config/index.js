const connection = require("./connection");

class DB {

    constructor(connection) {
        this.connection = connection;
    }

    viewAllEmployees() {
        return this.connection.query(
            `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name, role.salary, CONCAT(e2.first_name, ' ' , e2.last_name) AS manager
            FROM employee 
            LEFT JOIN role ON role.id = employee.role_id 
            LEFT JOIN department ON department.id = role.department_id
            LEFT JOIN employee AS e2 ON e2.id = employee.manager_id`
        );
    } 

    viewAllEmployeesByDepartment(departmentId) {
        return this.connection.query(
            `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name
            FROM employee
            LEFT JOIN role ON employee.role_id = role.id
            LEFT JOIN department ON role.department_id = department.id
            WHERE department.id = ${departmentId}`
        );
    }

    viewAllEmployeesByManager(employeeId) {
        return this.connection.query(
            `SELECT employee.id, employee.first_name, employee.last_name, department.name AS department, role.title FROM employee
            LEFT JOIN role ON role.id = employee.role_id
            LEFT JOIN department ON department.id = role.department_id
            WHERE manager_id = ${employeeId}`
        );
    }

    createEmployee(employee) {
        return this.connection.query(
            `INSERT INTO employee SET ?`,
            employee
        );
    }

    updateEmployeeRole(employeeId, roleId) {
        return this.connection.query(
            `UPDATE employee SET role_id = ${roleId} 
            WHERE id = ${employeeId}`
        );
    }

    viewAllRoles() {
        return this.connection.query(
            `SELECT role.id, role.title, role.salary, department.name 
            FROM role 
            LEFT JOIN department ON role.department_id = department.id`
        );
    }

    createRole(role) {
        return this.connection.query(
            `INSERT INTO role SET ?`,
            role
        );
    }

    viewAllDepartments() {
        return this.connection.query(
            `SELECT department.id, department.name, SUM(role.salary) AS utilized_budget 
            FROM department 
            LEFT JOIN role ON role.department_id = department.id 
            LEFT JOIN employee ON employee.role_id = role.id 
            GROUP BY department.id, department.name`
        );
    }

    createDepartment(department) {
        return this.connection.query(
            `INSERT INTO department SET ?`,
            department
        );
    }

}

module.exports = new DB(connection);