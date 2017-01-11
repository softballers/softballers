const { League } = require('../model/postgresDB');

const leagueController = {};

leagueController.addLeague = (req, res) => {
  const { name } = req.body;
  League.create({ name })
       .then(() => { console.log('LEAGUE ADDED UP IN THAT DB DOE'); })
       .catch( err => console.error(err));
};

leagueController.findLeague = (req, res) => {
  const { name } = req.body;
  League.findOne({ name })
        .then(() => res.send('FOUND LEAGUE'))
        .catch(() => res.end(404));
}


module.exports = leagueController;