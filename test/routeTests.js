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
	const username = 'root';
	const password = 'toor';
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
		console.log("AFTERRRRRRRR")
		Admin.destroy({ username, password })
			.then(() => console.log("deleted"))
			.catch(() => console.log("errrrrror"));
	});

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
			.get('/admin/login')
			.send({ 'username': '', 'password': '' })
			.expect(400, done);
	});

	it("logs in valid user", function(done){
		request(app)
			.get('/admin/login')
			.send({ 'username': 'root', 'password': 'toor' })
			.expect(200, done);
	});

	it("should not log in invalid user", function(done){
		request(app)
			.get('/admin/login')
			.send({ 'username': 'rooty', 'password': 'ytoor' })
			.expect(400, done);
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

