const { Team } = require('../model/postgresDB.js');

const teamController = {};

teamController.findAll = (req,res) => {
	Team.findAll({})
		.then(data => res.json(data))
		.catch(err => {
			console.log(`error finding all teams ${err}`);
		});
};

teamController.addOne = (req,res) => {
	const data = req.body;
	if (!data.leaguename || !data.teamname) return res.sendStatus(400).end();

	Team.create(data)
		.then(() => res.end())
		.catch(err => {
			console.log(`error creating a new team ${err}`);
		})
}

module.exports = teamController;
