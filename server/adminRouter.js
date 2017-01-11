const adminRoutes = express.Router();
const adminController = require('../database/controllers/adminController');

adminRoutes.get('/', adminController.findAdmin);
adminRoutes.post('/', adminController.addAdmin);

module.exports = adminRoutes;