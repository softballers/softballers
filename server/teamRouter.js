const express = require('express');
const teamRouter = express.Router();
const teamController = require('../database/controllers/teamController.js');

teamRouter.get('/', teamController.findAll);
teamRouter.post('/', teamController.addOne);
teamRouter.post('/remove/:id', teamController.removeOne)

module.exports = teamRouter;
