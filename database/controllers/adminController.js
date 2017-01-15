const { Admin } = require('../model/postgresDB');

const adminController = {};

adminController.addAdmin = (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).end();
  } 
  Admin.create({ username, password })
       .then(() => { 
         console.log('ADMIN ADDED UP IN THAT DB DOE'); 
         res.end();
        })
       .catch(err => {
         console.error(err)
         res.status(500).end();
       });
};

adminController.findAdmin = (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    console.log("username:", username, "password:", password);
    return res.status(400).end();
  } 

  Admin.findOne({where: {username, password }})
        .then(userExists => userExists ? res.end() : res.sendStatus(400).end()) 
        .catch(() => {
          console.log("CATCHNINGNGNG")
          res.sendStatus(400)
        });
}

adminController.removeAdmin = (req, res) => {
 const { username, password } = req.body;
 Admin.destroy({ where : { username, password }})
			.then(() => res.sendStatus(201))
			.catch(() => res.sendStatus(404));
}

adminController.changePassword = (req, res) => {
	const { username, password, newpassword } = req.body;
	Admin.update({ password: newpassword },
				{ username, password })
			 .then(() => res.sendStatus(200))
			 .catch(() => res.sendStatus(404));
}


module.exports = adminController;
