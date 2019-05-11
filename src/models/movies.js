const Boom = require("boom")
const db = require("./index")

class Movie {
    save(req, res, movie) {
        db.query("INSERT INTO movie(title, duration,year, description) VALUES($1,$2,$3,$4) returning id, title, duration,year, description", [movie.title, movie.duration, movie.year, movie.description], (error, results) => {
            if (error) {
                throw error
            }
            res.status(201).json(results.rows)
        })
    }

    update(id) {
        let movie = this.get(id)
        let update = this.body
        if (movie.id) {
            Object.assign(movies[movies.indexOf(movie)], update)
            return this.get(id)
        }
    }

    queryAll(req, res) {
        db.query("SELECT * FROM movie ORDER BY id ASC", (error, results) => {
            if (error) {
                throw error
            }
            res.status(200).json(results.rows)
        })
    }

    get(req, res) {
        db.query("SELECT * FROM movie WHERE id=$1 ORDER BY id ASC", [req.params.id], (error, results) => {
            if (error) {
                throw error
            }
            res.status(200).json(results.rows)
        })
    }
    delete(id) {
        let movie = this.get(id)
        if (movie.id) {
            movies.splice(movies.indexOf(movie), 1)
            return { message: "movie deleted " }
        }
        else {
            return Boom.notFound().output.payload
        }
    }

}


module.exports = { Movie };