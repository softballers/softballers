const express = require('express');
const scheduleRouter = express.Router();
const scheduleController = require('../database/controllers/scheduleController.js');

scheduleRouter.get('/league/:leaguename', 
	function(req,res,next){ 
		res.type = 'league'
		next()
	},
	scheduleController.getByLeague
);

scheduleRouter.get('/team/:teamname', 
	function(req,res,next){ 
		res.type = 'team'
		next()
	},
	scheduleController.getByTeam
);

scheduleRouter.post('/', scheduleController.addSchedule);
/*scheduleRouter.get('/:id', 
	function(req,res,next){
		if (!req.queryType) return res.sendStatus(400).end('Please submit queryType')
		const method = req.queryType = 'league' ? getByTeam : getByLeague;
		next()
	},
	scheduleController[req.queryType]
);*/
//maybe this could be one route, and the front end could just send what type on the req object.

module.exports = scheduleRouter;
