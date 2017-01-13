const express = require('express');
const app = express();
const path = require('path');
const PORT = process.ENV || 8080;
const bodyparser = require('body-parser');
// const db = require('../database/model/postgresDB.js');
const adminRouter = require('./adminRouter');
const leagueRouter = require('./leagueRouter');
const dbController = require('../database/controllers/dbController.js');

app.use(bodyparser.json());
app.use(express.static(path.join(__dirname, '../client', 'dist' )));
app.use('/admin', adminRouter);
//app.use('/league', leagueRouter);
module.exports = app;

