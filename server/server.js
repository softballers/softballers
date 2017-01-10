const express = require('express');
const app = express();
const path = require('path');
const PORT = process.ENV || 8080;
const Leagues = require('../database/model/postgresDB.js');

const dbController = require('../database/controllers/dbController.js');

app.use(express.static(path.join(__dirname, '../client', 'dist' ))).listen(PORT, () => {console.log(`listening on ${PORT}, homie`)});

//console.log("GETTING CALLED", Leagues)

