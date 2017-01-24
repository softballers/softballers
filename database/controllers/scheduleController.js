const { Schedule } = require('../model/postgresDB.js');

const scheduleController = {};

scheduleController.getByLeague = (req,res) => {
	const { leaguename } = req.params;
	Schedule.findAll({ where: { league: leaguename }})
		.then(data => res.json(data))
		.catch(err => {
			console.log(`Problem with the getByLeague schedule controller ${err}`);
			res.status(400).end()
		});
	}

scheduleController.getByTeam = (req,res) => {
	const { teamname } = req.params;
	console.log('team name', teamname, req.params)
	Schedule.findAll({ where: 
		{ hometeam: teamname,
			$or: { awayteam : teamname } ,
		}
	})
		.then(data => {
			console.log('in team controller', data);	
			res.json(data)
		})
		.catch(err => {
			console.log(`error getting schedule by team name ${err}`)
			res.status(400).end()
		});
}

module.exports = scheduleController;


