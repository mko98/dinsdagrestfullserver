/**
 * Created by Mko98 on 2-5-2017.
 */
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../index');
var should = chai.should();

chai.use(chaiHttp);

describe('Hello', function () {
    it('GET /api/v1/hello', function (done) {
        chai.request(server)
            .get('/api/v1/hello')
            .end( function (err, res) {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();

            });

    });

    });