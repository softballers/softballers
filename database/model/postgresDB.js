'use strict';

const Sequelize = require('sequelize');
//const REMOTE_URL = require('../database.js');
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

//Model for Admin
const Admin = sequelize.define('admins', {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { notEmpty: true },
  }, 
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { notEmpty: true },
  }
})
//Model for leagues
const League = sequelize.define('leagues', {
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
const Team  = sequelize.define('teams', {
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
});

//Model for players
const Player = sequelize.define('players', {
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

});

//Model for schedule
const Schedule = sequelize.define('schedule', {
  hometeam: {
    type: Sequelize.STRING,
  },
  awayteam: {
    type: Sequelize.STRING,
  },
  week: {
    type: Sequelize.INTEGER,
  },
  location: {
    type: Sequelize.STRING,
  },
  date: {
    type: Sequelize.DATE,
  },
  time: {
    type: Sequelize.STRING,
  },
  league: {
    type: Sequelize.STRING,
  }
});

//Model for stats



sequelize.sync()
  .catch( (error) => {
    console.log(error)
  })


module.exports = {sequelize, Admin, League, Team , Player, Schedule};
