var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('/app.js');

var should = chai.should();
var app = server.app;
var storage = server.storage;

chai.use(chaiHttp);

describe('books', function() {
    it('should return status 200', function(done) {
        chai.request(app)
            .get('/books')
            .end(function(err, res) {
                res.should.have.status(200);
                done();
            });
    });
});