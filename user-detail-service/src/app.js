const express = require('express'); //Import express framework
const cors = require('cors')  //cors for frontend communication
const uploadRoutes = require('./routes/uploadRoutes')  //Imprt upload routes

const app = express(); //Initialize the express app

app.use(cors());  //Enable Cors globally

app.use(express.json())  // for parsing json

app.use('/api/upload' , uploadRoutes) //use the upload routes for any path statrting /api/upload

module.exports = app;  //Export for server.js