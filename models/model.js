/**
 * Represents a course.
 * @typedef {Object} Course
 * @property {string} name - The name of the employee.
 * @property {number} id - The ID of the employee.
 * @property {string} profession - The profession of the employee.
 * @property {number} salary - employee salary.
 */

const mongoose = require('mongoose');

/**
 * Represents the course schema.
 * @type {mongoose.Schema<Employees>}
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
        required: 'This field is required'
    },
    employeesSalary: {
        type: Number
    }
});

module.exports = mongoose.model('Employees', employeesSchema);
