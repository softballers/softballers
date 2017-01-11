const request = require('supertest');
const app = require('../server/server.js');

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
});

describe("leagues root", function(){

	it("returns a 200 status code", function(done){
		request(app)
			.get("/leagues")
			.expect(200, done)
	});

	it('returns HTML', (done) => {
		request(app)
			.get('/leagues')
			.expect('Content-Type', /html/, done);
	});
});

