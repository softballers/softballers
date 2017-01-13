const express = require('express');
const adminRoutes = express.Router();
const adminController = require('../database/controllers/adminController');

adminRoutes.get('/login', adminController.findAdmin);
adminRoutes.post('/signup', adminController.addAdmin);

module.exports = adminRoutes;