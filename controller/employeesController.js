/**
 * Express router for handling employee-related routes.
 * @module employeesController
 */

const express = require('express');
const mongoose = require('mongoose');

var router = express.Router();
const Employees = mongoose.model('Employees');

/**
 * Route for rendering the form to insert a new employee.
 * @name GET /employees
 * @function
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
router.get('/', (req, res) => {
    res.render("employees/employeesAddEdit", {
        viewTitle: "Insert Employee"
    });
});

/**
 * Route for handling the submission of the employee form.
 * If the employee ID is empty, it inserts a new employee into the MongoDB database.
 * Otherwise, it updates an existing employee in the database.
 * @name POST /employees
 * @function
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
router.post('/', (req, res) => {
    if(req.body._id == '')
        insertIntoMongoDB(req, res);
    else
        updateIntoMongoDB(req, res);
});

/**
 * Function to insert a new employee into the MongoDB database.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
function insertIntoMongoDB(req, res) {
    var employee = new Employees();
    employee.employeesName = req.body.employeesName;
    employee.employeesId = req.body.employeesId;
    employee.employeesProfession = req.body.employeesProfession;
    employee.employeesSalary = req.body.employeesSalary;
    employee.save((err, doc) => {
        if (!err)
            res.redirect('employees/list');
        else {
            if (err.name == 'ValidationError') 
            { //for duplicate validation error, check error object name
                handleValidationError(err, req.body);
                res.render("employees/employeesAddEdit", {
                    viewTitle: "Update Employee",
                    employee: req.body
                });
            }
            
        else
            console.log('Error during record insertion : ' + err);
        }
    });
}

/**
 * Route for retrieving the complete list of employees.
 * @name GET /employees/list
 * @function
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
router.get('/list', (req, res) => {
    Employees.find((err, docs) => {
    if(!err){
        res.render("employees/employeesList", {
            list: docs                       
        });
    }
    else {
        console.log('Error in retrieving employee list :' + err);        
    }    
    });    
});

/**
 * Function to handle validation errors during input validation.
 * @param {Object} err - Error object.
 * @param {Object} body - Request body object.
 */
function handleValidationError(err, body) {
    for (field in err.errors) {
        switch (err.errors[field].path) {
            case 'employeesName':
                body['employeesNameError'] = err.errors[field].message;
                break;
            case 'employeesId':
                body['employeesIdError'] = err.errors[field].message;
                break;
            case 'employeesProfession':
                body['employeesProfessionError'] = err.errors[field].message;
                break;
            case 'employeesSalary':
                body['employeesSalaryError'] = err.errors[field].message;
                break;
            default:
                break;
        }
    }
}

/**
 * Route for deleting an employee by ID.
 * @name GET /employees/:id
 * @function
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
router.get('/:id', (req, res) => {
    Employees.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/employees/list');            
        }
        else {
            console.log('Error in employee delete :' + err);
        }
        
    });

});

module.exports = router;
