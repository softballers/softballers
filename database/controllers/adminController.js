const { Admin } = require('../model/postgresDB');

const adminController = {};

adminController.addAdmin = (req, res) => {
  const { username, password } = req.body;
  Admin.create({ username, password })
       .then(() => { console.log('ADMIN ADDED UP IN THAT DB DOE'); })
       .catch( err => console.error(err));
};

adminController.findAdmin = (req, res) => {
  const { username, password } = req.body;
  Admind.findOne({ username, password })
        .then(() => res.send('FOUND ADMIN'))
        .catch(() => res.end(404));
}


module.exports = adminController;