const request = require('supertest');
const app = require('../server/server.js');
const { Leagues, Admin, Teams, Players, Schedule } = require('../database/model/postgresDB');

describe('root route', () => {

	it('returns a 200 status code', (fin) => {
		request(app)
			.get('/')
			.expect(200)
			.end(err =>{
			 	if(err) console.error(err); fin()});
	});
	
	it('returns HTML', (done) => {
		request(app)
			.get('/')
			.expect('Content-Type', /html/, done);
	});

});

describe("admin route", function(){

	it("returns a 200 status code", function(done){
		request(app)
			.get('/admin')
			.expect(200)
			.end(function(err){
				if (err) console.error(err);
				done();
			});	
	});

	it("validates admin login", function(done){
		request(app)
			.post('/admin')
			.send({ 'username': '', 'password': '' })
			.expect(404, done);
	});

	it("logs in valid user", function(done){
		request(app)
			.post('/admin')
			.send({ 'username': 'root', 'password': 'toor' })
			.expect(200, done);
	});
});

describe("leagues route", function(){
	it("returns a 200 status code", function(done){
		request(app)
			.get("/leagues")
			.expect(200, done)
	});

	it('returns json', (done) => {
		request(app)
			.get('/leagues')
			.expect('Content-Type', /json/, done);
	});
});

describe("league DB logic", function(){
	it("should add new league", function(done){
		request(app)
			.post('/leagues')
			.send({ 'name': 'TESTLEAGUE' })
			.expect(200, done);
	});
	it("should retrieve newly added league", function(done){
		request(app)
			.get('/leagues/TESTLEAGUE')
			.expect('Content-Type', /json/, done);	
	});
});

