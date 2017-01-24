const express = require('express');
const adminPlayerRouter = express.Router();
const playerController = require('../database/controllers/playerController');

adminPlayerRouter.post('/addPlayer', playerController.addPlayer);
adminPlayerRouter.post('/removePlayer/:id', playerController.removePlayer);
adminPlayerRouter.put('/updatePlayer/:id', playerController.updatePlayer);
adminPlayerRouter.get('/:id', playerController.findPlayer);

module.exports = adminPlayerRouter;
