const express = require('express');
const playerRouter = express.Router();
const playerController = require('../database/controllers/playerController');

playerRouter.post('/addPlayer', playerController.addPlayer);

module.exports = playerRouter;
