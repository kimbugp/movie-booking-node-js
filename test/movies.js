

let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../server");
let should = chai.should();

chai.use(chaiHttp);


describe("/GET movies", () => {
    it("it should GET all the movies", () => {
        chai.request(server)
            .get("/movies")
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a("array");
                res.body.length.should.be.eql(0);
            });
    });
});