const express  = require('express');
const app = express();
const path  = require('path');
const studentsRoutes = require('./routes/StudentsRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/' , studentsRoutes)
module.exports = app;

