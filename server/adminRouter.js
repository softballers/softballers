const express = require('express');
const adminRoutes = express.Router();
const adminController = require('../database/controllers/adminController');

adminRoutes.post('/login', adminController.findAdmin);
adminRoutes.post('/signup', adminController.addAdmin);
adminRoutes.post('/delete', adminController.removeAdmin);

module.exports = adminRoutes;
