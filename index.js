const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const {mongoose} = require('./db.js');

var employeeController = require('./controllers/employeeController.js');


var app = express();

app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200'}));

app.listen(49160, () => console.log('Server Started at port number: 49160'));
//sample node project
app.use('/employees', employeeController);