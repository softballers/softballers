const express = require('express');
const playerRouter = express.Router();
const playerController = require('../database/controllers/playerController');

playerRouter.post('/addPlayer', playerController.addPlayer);
playerRouter.post('/removePlayer/:id', playerController.removePlayer);
playerRouter.put('/updatePlayer/:id', playerController.updatePlayer);
playerRouter.get('/:id', playerController.findPlayer);

module.exports = playerRouter;
