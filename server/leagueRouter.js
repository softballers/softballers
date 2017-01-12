const express = require("express");
const leagueRouter = express.Router();
const leagueController = require('../database/controllers/leagueController');

leagueRouter.get('/',leagueController.findLeague);
leagueRouter.post('/', leagueController.addLeague);

module.exports = leagueRouter;
