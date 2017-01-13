const { Admin } = require('../model/postgresDB');

const adminController = {};

adminController.addAdmin = (req, res) => {
  const { username, password } = req.body;
	if (!username || !password) return res.end(400);
  console.log(username, password)
  Admin.create({ username, password })
       .then(() => { 
         console.log('ADMIN ADDED UP IN THAT DB DOE'); 
         res.end();
        })
       .catch(err => {
         console.error(err)
         res.end(500);
       });
};

adminController.findAdmin = (req, res) => {
  const { username, password } = req.body;
  Admin.findOne({ username, password })
        .then(() => res.send('FOUND ADMIN'))
        .catch(() => res.end(404));
}

adminController.removeAdmin = (req, res) => {
 const { username, password } = req.body;
 Admin.destroy({ username, password })
			.then(() => res.send(201))
			.catch(() => res.send(404));
}

adminController.changePassword = (req, res) => {
	const { username, password, newpassword } = req.body;
	Admin.update({ password: newpassword },
				{ username, password })
			 .then(() => res.send(200))
			 .catch(() => res.send(404));
}


module.exports = adminController;
