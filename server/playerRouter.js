const express = require('express');
const playerRouter = express.Router();
const playerController = require('../database/controllers/playerController.js');

playerRouter.get('/:id', playerController.findPlayer);
playerRouter.get('/byteam/:teamname', playerController.findPlayersByTeam);


module.exports = playerRouter;
