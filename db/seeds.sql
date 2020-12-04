INSERT INTO department (name) VALUES ('IT');
INSERT INTO department (name) VALUES ('Finance');
INSERT INTO department (name) VALUES ('Marketing');

INSERT INTO role (title, salary, department_id) VALUES ('Manager', 110000.00, 1);
INSERT INTO role (title, salary, department_id) VALUES ('Engineer', 90000.00, 1);
INSERT INTO role (title, salary, department_id) VALUES ('Manager', 110000.00, 2);
INSERT INTO role (title, salary, department_id) VALUES ('Accountant', 80000.00, 2);
INSERT INTO role (title, salary, department_id) VALUES ('Manager', 110000.00, 3);
INSERT INTO role (title, salary, department_id) VALUES ('Sales', 60000.00, 3);

INSERT INTO employee (first_name, last_name, role_id) VALUES ('Joe', 'Han', 1);
INSERT INTO employee (first_name, last_name, role_id) VALUES ('Manoli', 'K', 3);
INSERT INTO employee (first_name, last_name, role_id) VALUES ('Angie', 'Chilmaza', 5);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Anjali', 'Kevadiya',  2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Sean', 'Allen', 4, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Ketty', 'Paul', 6, 5);
