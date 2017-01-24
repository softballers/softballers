const { League, Team, Schedule } = require('../model/postgresDB');
const teamController = require('./teamController');
const scheduleController = require('./scheduleController');
const leagueController = {};

leagueController.findAll = (req, res) => {
	League.findAll({})
				.then(data => {
					res.json(data)
				})
				.catch((err) =>{
					console.log('findAll controller method is sad and having issues.  please fix it.',err);		
					res.status(404).end()});
}

leagueController.findOne = (req, res) => {
  const { id } = req.params;
	const outputJSON = [];
  League.findOne({ where : { leagueid: +id }})
        .then((leagueData) => {
					return leagueData; 
				})
        .catch(() =>{
					console.log('error finding one league');	
					res.end(404);
				})
				.then((leagueData) => {
					console.log('findOne league controller', leagueData);
					return leagueData;
				})
				.catch(() => res.status(400).end)
				.then(leagueData  => {
					const leagueName = leagueData.name;
					Team.findAll({ where: { league: leagueName }})
						.then(teams => {
							const outputJSON = [leagueData]; 
							const teamData = {};
							teamData.teams = teams;
							outputJSON.push(teamData);
							console.log('leage controller, data before response', JSON.stringify(outputJSON));
							res.json(outputJSON);
						})
						.catch(err => {
							res.status(400).end()
						});
				})
};

leagueController.addLeague = (req, res) => {
  const { name } = req.body;
  League.create({ name })
       .then(() =>  res.end())
       .catch( err => console.error(err));
};

leagueController.removeLeague = (req,res) => {
	const { id } = req.params;
	League.destroy({ where: { leagueid: id }})
				.then(() => res.status(200).end())
				.catch((err) => {
				  console.log(err);	
					res.status(404).end()
				});
}

leagueController.findAllTeams = (req,res) => {
	const { leagueName } = req.params;
	Team.findAll({ where: { league: leagueName }})
		.then(teamData =>  teamData)
		.catch(err => {
			console.log(`error finding all teams through league controller ${err}`)
			res.sendStatus(404).end()
		})
}



module.exports = leagueController;
