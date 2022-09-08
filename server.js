require('dotenv').config();

// For using module-alias in the project

require('module-alias/register');

const startApplication = require('./app');
startApplication();
