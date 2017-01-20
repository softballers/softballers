const { League } = require('../model/postgresDB');

const leagueController = {};

leagueController.findAll = (req, res) => {
League.findAll({})
			.then(data => res.end(data))
			.catch(err => res.statusCode(404).end());
}

leagueController.findOne = (req, res) => {
  const { name } = req.body;
  League.findOne({ name })
        .then(() => res.send('FOUND LEAGUE'))
        .catch(() => res.end(404));
}

leagueController.addLeague = (req, res) => {
  const { name } = req.body;
  League.create({ name })
       .then(() =>  res.end())
       .catch( err => console.error(err));
};



module.exports = leagueController;
