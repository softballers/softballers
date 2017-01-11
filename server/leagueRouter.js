const express = require("express");
const leagueRouter = express.Router();
const leagueController = require('../database/controllers/leagueController');

app.get('/',leagueController.findLeague);
app.post('/', leagueController.addLeague);

module.exports = leagueRouter;
