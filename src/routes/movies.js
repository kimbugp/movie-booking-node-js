const express = require("express");
let movies = require("../models/movies");

const myRouter = express.Router()


class MoviesView extends movies.Movie {
    get(req, res) {
        return super.queryAll(res, res)
    }
    post(req, res) {
        return super.save(req, res, req.body)
    }
    get_one(req, res) {
        return super.get(req, res)
    }


}

const urls = new MoviesView()
myRouter.get("", urls.get)
myRouter.post("", urls.post)
myRouter.get("/:id", urls.get_one)

module.exports = myRouter;