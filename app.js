const path = require("path");
const express = require("express");
const helmet = require('helmet');
const mongoose = require("mongoose");
const compression = require('compression');

const app = express();
const routes = require("./routes");

// refactored to use helmet set security-related HTTP response headers
app.use(helmet())
// support parsing of application/json type post data and limit payload
app.use(express.json({ limit: '300kb' }));
//support parsing of application/x-www-form-urlencoded post data
app.use(express.urlencoded({ extended: true }));
// set up static folder
app.use(express.static(path.join(__dirname, './client/build')))
// compress response to improve performance when displaying to clients
app.use(compression());

// use our crud routes
app.use(routes);

module.exports = app;