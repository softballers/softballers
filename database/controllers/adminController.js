const { Admin } = require('../model/postgresDB');

const adminController = {};

adminController.addAdmin = (req, res) => {
  const { username, password } = req.body;
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


module.exports = adminController;