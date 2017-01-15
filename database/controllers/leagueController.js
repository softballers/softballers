const { League } = require('../model/postgresDB');

const leagueController = {};
leagueController.allLeagues = (req, res) = {
	League.findAll({})
				.then(data => res.end(data))
				.catch(err => res.statusCode(404).end());
}

leagueController.addLeague = (req, res) => {
  const { name } = req.body;
  League.create({ name })
       .then(() =>  res.end())
       .catch( err => console.error(err));
};

leagueController.findLeague = (req, res) => {
  const { name } = req.body;
  League.findOne({ name })
        .then(() => res.send('FOUND LEAGUE'))
        .catch(() => res.end(404));
}


module.exports = leagueController;
