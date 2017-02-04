const request = require('supertest');
const chai = require('chai');
const should = chai.should();
const expect = chai.expect;
const app = require('../server/server.js');
const { League, Admin, Teams, Player, Schedule } = require('../database/model/postgresDB');

describe('root route', () => {
	it('returns a 200 status code', (done) => {
		request(app)
			.get('/')
			.expect(200)
			.end(err =>{
			 	if(err) console.error(err); done()});
	});
	
	it('returns HTML', (done) => {
		request(app)
			.get('/')
			.expect('Content-Type', /html/, done);
	});

});

describe('admin route', function(){
	const username = 'ROOT';
	const password = 'TOOR';

	before( function() {
		Admin.create({ username, password })
			.then(() => { 
				console.log('ADMIN ADDED UP IN THAT TEST DOE'); 
			})
			.catch(err => {
				console.error(err)
			});
	});

	after( function() {
		Admin.destroy({ where: { username, password } })
			.then(() => console.log('deleted admin'))
			.catch((err) => console.log('error deleting admin', err));
	});


	it('validates admin login', function(done){
		request(app)
			.post('/api/admin/login')
			.send({ 'username': '', 'password': '' })
			.expect(400, done);
	});

	it('logs in valid user', function(done){
		request(app)
			.post('/api/admin/login')
			.send({ 'username': 'ROOT', 'password': 'TOOR' })
			.expect(200, done);
	});

	it('should not log in invalid user', function(done){
		request(app)
			.post('/api/admin/login')
			.send({ 'username': 'rooty', 'password': 'ytoor' })
			.expect(400, done);
	});
	
	it('deletes an admin', function(done){
		request(app)
			.post('/api/admin/delete')
			.send({ 'username':'root', 'password': 'toor' })
			.expect(201, done);
	});
});

describe('league route', function(){

	it('returns a 200 status code', function(done){
		request(app)
			.get('/api/league')
			.expect(200, done)
	});

	it('returns json', (done) => {
		request(app)
			.get('/api/league')
			.expect('Content-Type', /json/, done);
	});
	
	it('can return all leauges', (done => {
		request(app)
			.get('/api/league')
			.expect(200,done);
	}));

	it('can return just one league', (done => {
		//this should also test content length
		request(app)
			.get('/api/league/1/')
			.expect(200)
			.end(function(err,res){
				const leagues = res.body.filter(thing => {
					return !Array.isArray(thing);
				})
				expect(leagues).to.not.equal(null);
				done();
			})
	}));

});

describe('league adding and removing', function(){
	it('should add new league', function(done){
		request(app)
			.post('/api/league')
			.send({ 'name': 'TESTLEAGUE' })
			.expect(200, done);
	});

	it('should retrieve newly added league', function(done){
		request(app)
			.get('/api/league/1/')
			.expect('Content-Type', /json/, done);	
	});
});

describe('admin facing player behavior', function(){

	const data = {
		'firstname': 'testPlayerFirstName',
		'lastname': 'testPlayerLastName',
		'teamname': 'testPlayerTeamName',
		'battingavg': 0,
		'hits': 100,
		'atbats': 100,
		'homeruns': 100
		}
	
	const updatedData = {
		'firstname': 'shawn'
		}


	it('should add a new player', function(done){
		request(app)
			.post('/api/admin/player/addPlayer')
			.send(data)	
			.expect(200,done);	
	});

	it('should find an existing player', function(done){
		request(app)
			.get('/api/admin/player/2')
			.expect(200,done);
	});
	
	it('should return JSON', function(done){
		request(app)
			.get('/api/admin/player/2')
			.expect('Content-Type', /json/, done);
	});
	
	it('should update an existing player', function(done){
		request(app)
			.put('/api/admin/player/updatePlayer/2')
			.send(updatedData)
			.expect(200,done);
	});

	it('should remove a new player', function(done){
		request(app)
			.post('/api/admin/player/removePlayer/1')
			.expect(200,done);
	});
	
});	

describe("client facing player behavior", function(){

	it("should return one Player", function(done){
		request(app)
			.get('/api/player/3')
			.expect(200,done);
	});
	
	it('should return JSON', function(done){
		request(app)
			.get('/api/player/3')
			.expect('Content-Type', /json/, done);
	});

	it('should return all players from one team', function(done){
		request(app)
			.get('/api/player/byteam/test')
			.expect(200,done);
	})

	it('should return all players from one league', function(done){
		//player table should probably have a leagueid key to make this behavior less insane
		request(app)
			.get('/api/player/byleague/TESTLEAGUE')
			.expect(200,done);
	});

});	

describe('admin facing team behavior', function(){
	const teamData = {
		'teamname': 'test',
		'wins': 0,
		'losses': 1,
		'league': 'TESTLEAGUE' 
	}

	before( function(done){
		request(app)
			.post('/api/admin/team')
			.send(teamData)
		done()
	});

	after( function(done){
		request(app)
			.post('/api/admin/team/remove/1')
		done()

	})	

	it('should return JSON', function(done){
		request(app)
			.get('/api/admin/team/')
			.expect('Content-Type', /json/, done);
	});

	it('should send 200 status code', function(done){
		request(app)
			.get('/api/admin/team/')
			.expect(200,done)
	});

	it('should send all teams', function(done){
			request(app)
			.get('/api/admin/team/')
			.expect(200,done)
	})

	it('should add a new team', function(done){
		request(app)
			.post('/api/admin/team/')
			.send(teamData)
			.expect(200,done);
	})

	it('should remove a team', function(done){
		request(app)
			.post('/api/admin/team/remove/1')
			.expect(200,done);
	});	
	
});

describe('client facing league behavior', function(){

	it('should return a 200 status for returning all teams belonging to one league', function(done){
		request(app)
			.get('/api/league/1')
			.expect(200,done);
	});

	it('should return JSON content type', function(done){
		request(app)
			.get('/api/league/1')
			.expect('Content-Type', /json/, done);
	});
		
	it('should return all teams belonging to one league', function(done){
		request(app)
			.get('/api/league/1')
			.expect(200)	
			.end(function(err,res){
				expect(res.body).to.not.have.length(1);
				expect(res.body).to.not.equal(null);
				done();
			})
	})	

})


describe('schedule behavior', function(){
	const date = Date();
	const data = {
		'hometeam': 'test',
		'awayteam': 'test',
		'week': 5,
		'location': 'testplace',
		'date':'2016-08-09 04:05:02',
		'time': '745',
		'league': 'TestLeague'
	};
	
	it('should return all schedules when queried by league', function(done){
		request(app)
			.get('/api/schedule/league/TestLeague')
			.expect(function(res){
				//console.log('league sched return', res.body);
			})	
			.expect(200,done);
	})

	it('should return all schedules when queried by team', function(done){
		request(app)
			.get('/api/schedule/team/test')
			.expect(function(res){
				//console.log('team sched return', res.body);
			})
			.expect(200,done);
	})

	it('should return json', function(done){
		request(app)
			.get('/api/schedule/league/TestLeague')
			.expect('Content-Type', /json/, done);
	})

	it('should add a schedule', function(done){
		request(app)
			.post('/api/schedule')
			.send(data)
			.expect(200,done);
	});

	it('should delete a schedule', function(done){
		request(app)
			.post('/api/schedule/1')
			.expect(200,done);
	});	
});
