'use strict';

const Sequelize = require('sequelize');
const REMOTE_URL = require('../database.js');
const LOCAL_URL = 'postgres://localhost:5432/softballers';

const sequelize = new Sequelize(LOCAL_URL);

//check connection
sequelize
  .authenticate()
  .then( function(err) {
    console.log('Connection Successful')
  })
  .catch( function(err) {
    console.log('Unable to connect::::', err)
  });

//Model for leagues
const Leagues = sequelize.define('leagues', {
  name: {
    type: Sequelize.STRING
  },
  leagueid: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  }
})

//Model for teams
const Teams = {
  teamname: {
    type: Sequelize.STRING
  },
  wins: {
    type: Sequelize.INTEGER,
  },
  losses: {
    type: Sequelize.INTEGER,
  },
  league: {
    type: Sequelize.STRING
  }
};

//Model for players
const Players = {
  firstname: {
    type: Sequelize.STRING,
  },
  lastname: {
    type: Sequelize.STRING,
  },
  teamname: {
    type: Sequelize.STRING,
  },
  battingavg: {
    type: Sequelize.INTEGER,
  },
  hits: {
    type: Sequelize.INTEGER,
  },
  atbats: {
    type: Sequelize.INTEGER,
  },
  homeruns: {
    type: Sequelize.INTEGER,
  }

};

//Model for schedule
const Schedule = {
  hometeam: {

  },
  awayteam: {

  },
  week: {

  },
  location: {

  },
  date: {

  },
  time: {

  },
  league: {
    
  }
};

//Model for stats



sequelize.sync({force: true})
  .catch( (error) => {
    console.log(error)
  })


module.exports = {sequelize, Leagues, Teams, Players, Schedule};