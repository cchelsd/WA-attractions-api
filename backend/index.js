// ----------------------------------------------
// TCSS 460: Autumn 2023
// Backend REST Service Module
// ----------------------------------------------
// Express is a Node.js web application framework
// that provides a wide range of APIs and methods
// Express API Reference:
// https://expressjs.com/en/resources/middleware/cors.html

// ----------------------------------------------
// retrieve necessary files
const express = require("express");
const cors = require("cors");
const service1Routes = require("./routes/service1Routes");
const service2Routes = require("./routes/service2Routes");

// retrieve the MySQL DB Configuration Module
// const dbConnection = require("../config");
// // use this library for parsing HTTP body requests
var bodyParser = require('body-parser');

// // ----------------------------------------------
// // (A)  Create an express application instance
// //      and parses incoming requests with JSON
// //      payloads
// // ----------------------------------------------
var app = express(express.json); 

// // ----------------------------------------------
// // (B)  Use the epxress cors middleware
// //      Cross-origin resource sharing (CORS)
// //      is a technique that restricts specified
// //      resources within web page to be accessed
// //      from other domains on which the origin
// //      resource was initiated the HTTP request
// //      Also use the bodyParser to parse in 
// //      format the body of HTTP Requests
// // ----------------------------------------------
app.use(cors());
app.use(bodyParser.json());

// // ----------------------------------------------
// // Use the defined routes for services 1 and 2
// // The routes are prefixed with '/attractions'
// // ----------------------------------------------
app.use('/attractions', service1Routes);
app.use('/attractions', service2Routes);

app.listen(3000, () => {
    console.log("Express server is running and listening");
}); 
