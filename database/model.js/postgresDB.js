'use strict';

const Sequelize = require('sequelize');
const REMOTE_URL = require('../database.js');
const LOCAL_URL = '';

const sequelize = new Sequelize(REMOTE_URL);

//Model for leagues

//Model for teams

//Model for players

//Model for schedule

module.exports = {sequelize};