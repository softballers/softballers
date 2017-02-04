const { Player, Team, League } = require('../model/postgresDB.js');

const playerController = {};

playerController.addPlayer = (req,res) => {
	const data = req.body;

	if (!data.firstname || !data.teamname) return res.sendStatus(400).end();

	Player.create(data)
				.then(() => res.end())
				.catch(err => {
					console.log(`error writing new player ${err}`);
					res.end(400)
				});
}

playerController.findPlayer = (req,res) => {
	const { id } = req.params;
	Player.find({ where: { id }})
				.then((playerData) => res.json(playerData))
				.catch(err => res.sendStatus(404).json({ err }));
}

playerController.findPlayersByTeam = (req,res) => {
	const { teamname } = req.params;
	Player.findAll({ where: { teamname }})
		.then(playerData => res.json(playerData))
		.catch(err => {
			console.log(`error in findPlayersByTeam method of playerController ${err}`);
			res.status(404).json({ err });
		})
}

playerController.findPlayersByLeague = (req,res) => {
	const { leagueid } = req.params;
	//an id on the player model would make this really nice
  //otherwise, honestly this would be fairly expensive and lame
}


playerController.removePlayer = (req,res) => {
	const { id } = req.params;
	
	Player.destroy({ where: { id: +id } })
				.then(() => res.end())
				.catch(err => {
					console.log(`error removing player ${err}`);
					res.sendStatus(400).end()
				});
}

playerController.updatePlayer = (req,res) => {
	const data = req.body;
	const { id } = req.params;
	Player.update(data, { where: { id }})
				.then(() => res.end())
				.catch(err => res.sendStatus(400).end());
}

module.exports = playerController;
