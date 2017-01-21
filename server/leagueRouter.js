const express = require("express");
const leagueRouter = express.Router();
const leagueController = require('../database/controllers/leagueController');

leagueRouter.get('/',leagueController.findAll);
leagueRouter.get('/:id',leagueController.findOne);
leagueRouter.post('/', leagueController.addLeague);
leagueRouter.post('/:id', leagueController.removeLeague);

module.exports = leagueRouter;
