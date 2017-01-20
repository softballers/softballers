const { League } = require('../model/postgresDB');

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

leagueController.removeLeague = (req,res) => {
	const { id } = req.body;
	League.destroy({ where: { id }})
				.then(() => res.status(200).end())
				.catch((err) => {
				  console.log(err);	
					res.status(404).end()
				});
}



module.exports = leagueController;
