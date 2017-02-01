const { Admin } = require('../model/postgresDB');

const adminController = {};

adminController.addAdmin = (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) return res.status(400).json({ err: 'Please supply a valid username and password' }); 

  Admin.create({ username, password })
   .then(() => res.end();)
   .catch(err => res.status(500).json({ err }));

};

adminController.findAdmin = (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) return res.status(400).json({ err: 'Please supply a valid username and password' }); 

  Admin.findOne({where: {username, password }})
    .then(userExists => userExists ? res.end() : res.sendStatus(400).end()) 
    .catch(() => res.sendStatus(400));

}

adminController.removeAdmin = (req, res) => {
 const { username, password } = req.body;

 Admin.destroy({ where : { username, password }})
  .then(() => res.sendStatus(201))
  .catch(() => res.sendStatus(404));

}

adminController.changePassword = (req, res) => {
	const { username, password, newpassword } = req.body;

	Admin.update({ password: newpassword },{ username, password })
   .then(() => res.sendStatus(200))
   .catch(() => res.sendStatus(404));

}


module.exports = adminController;
