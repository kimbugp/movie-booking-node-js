import { Router } from "express";
import { Movie } from "../models/movies";

const myRouter = Router()


class MoviesView extends Movie {
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

export default myRouter;