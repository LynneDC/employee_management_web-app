/**
 * Represents an employee.
 * @typedef {Object} Employee
 * @property {string} employeesName - The name of the employee.
 * @property {number} employeesId - The ID of the employee.
 * @property {string} employeesProfession - The profession of the employee.
 * @property {number} employeesSalary - The salary of the employee.
 */

const mongoose = require('mongoose');

/**
 * Represents the employee schema.
 * @type {mongoose.Schema<Employee>}
 */
var employeesSchema = new mongoose.Schema({
    employeesName: {
        type: String,
        required: 'This field is required!'
    },
    employeesId: {
        type: Number,
    },
    employeesProfession: {
        type: String,
        required: 'This field is required!'
    },
    employeesSalary: {
        type: Number
    }
});

module.exports = mongoose.model('Employee', employeesSchema);
