/**
 * This is the main script file for the employee management web app.
 * It sets up the Express server, middleware, and routes.
 */

require('./models/mongodb');

// import packages
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const mongoose = require('./models/mongodb');
const employeesController = require('./controller/employeesController');

app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send(`
<h2 style="font-family: Malgun Gothic; color: midnightblue ">Welcome to the Employee Management Web App!!</h2>
Click Here to go to <b> <a href="/employees">Employee Management Page</a> </b>`);
});
app.use(bodyParser.json());

app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', exphbs.engine({
    extname: 'hbs', 
    defaultLayout: 'mainLayout', 
    layoutsDir: path.join(__dirname, 'views/layouts/') 
}));
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