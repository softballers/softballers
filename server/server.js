const express = require('express');
const app = express();
const path = require('path');
const PORT = process.ENV || 8080;
const bodyparser = require('body-parser');
const Leagues = require('../database/model/postgresDB.js');
const adminRouter = require('./adminRouter');
const leagueRouter = require('./leagueRouter');
const dbController = require('../database/controllers/dbController.js');

app.use(bodyparser.json());
app.use(express.static(path.join(__dirname, '../client', 'dist' ))).listen(PORT, () => {console.log(`listening on ${PORT}, homie`)});
app.use('/admin', adminRouter);
app.use('/league', leagueRouter);
//console.log("GETTING CALLED", Leagues)

