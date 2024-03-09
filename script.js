/**
 * This is the main script file for the employee management web app.
 * It sets up the Express server, middleware, and routes.
 */

require('./models/mongodb');

// import packages
const express = require('express');
var app = express();

const bodyParser = require('body-parser');
const path = require('path');
const exphb = require('express-handlebars')
const mongoose = require('./models/mongodb');

const employeesController = require('./controllers/employeeController');

app.use(bodyParser.urlencoded({ extended: true }));

// cretae a welsome msg 
app.get('/', (req, res) => {
    res.send(`
<h2 style="font-family: Malgun Gothic; color: midnightblue ">Welcome to the Employee Management Web App!!</h2>


Click Here to go to <b> <a href="/employees">Employee Management Page</a> </b>`);
});
app.use(bodyParser.json());

// set the view engine  configure middleware
app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphb({extname: 'hbs', defaultLayout: 'mainLayout', layoutDir: __dirname + 'views/layouts/' }));
app.set('view engine', 'hbs');

/**
 * Starts the server and listens on the specified port.
 * @callback
 * @param {number} port - The port number to listen on.
 */

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port: ${port}...`);
});

// controller path responsible for user action
app.use('/employees', employeesController);