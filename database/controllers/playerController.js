const { Player } = require('../model/postgresDB.js');

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

playerController.removePlayer = (req,res) => {
	const { id } = req.params;
	
	Player.destroy({ where: { id: +id } })
				.then(() => res.end())
				.catch(err => {
					console.log(`error removing player ${err}`);
					res.sendStatus(400).end()
				});
}

module.exports = playerController;
