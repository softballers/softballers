const express = require('express');
const playerRouter = express.Router();
const playerController = require('../database/controllers/playerController');

playerRouter.post('/addPlayer', playerController.addPlayer);
playerRouter.post('/removePlayer/:id', playerController.removePlayer);

module.exports = playerRouter;
