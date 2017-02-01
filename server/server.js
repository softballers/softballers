const express = require('express');
const app = express();
const path = require('path');
const PORT = process.ENV || 8080;
const bodyparser = require('body-parser');
//const db = require('../database/model/postgresDB.js');
// routers //
const adminRouter = require('./adminRouter');
const leagueRouter = require('./leagueRouter');
const adminPlayerRouter = require('./adminPlayerRouter');
const teamRouter = require('./teamRouter');
const scheduleRouter = require('./scheduleRouter.js');
const playerRouter = require('./playerRouter');
const dbController = require('../database/controllers/dbController.js');

app.use(bodyparser.json());
app.use(express.static(path.join(__dirname, '../client', 'dist' )));

app.use('/api/admin', adminRouter);
app.use('/api/admin/player', adminPlayerRouter);
app.use('/api/admin/team', teamRouter);
app.use('/api/schedule', scheduleRouter);
app.use('/api/player', playerRouter);
app.use('/api/league', leagueRouter);


module.exports = app;

