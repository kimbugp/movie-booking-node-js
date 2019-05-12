

import { should as _should, use, request } from "chai";
import chaiHttp from "chai-http";
import server from "../server";
import db from "./index"
let should = _should();
use(chaiHttp);

describe("movies", () => {
    beforeEach(() => {
        return db.query("START TRANSACTION");
    });
    afterEach(() => {
        return db.query("ROLLBACK");
    });
    describe("/GET movies", () => {
        it("it should GET all the movies", () => {
            request(server)
                .get("/api/v1/movies")
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a("array");
                });

        });
    });

    describe("/POST movies", () => {
        it("it should create the movies", () => {
            let movie = {
                title: "Redemption",
                duration: "3:00",
                description: "tt0111161",
                year: "2019"
            }
            request(server)
                .post("/api/v1/movies")
                .send(movie)
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.be.a("array");
                    res.body.length.should.be.eql(1);
                });

        });
    });
}
)
