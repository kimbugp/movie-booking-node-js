const Boom = require("boom")
const db = require("./index")
const movies = [
    {
        "title": "The Shawshank Redemption",
        "rank": "1",
        "id": "tt0111161"
    },
    {
        "title": "The Godfather",
        "rank": "2",
        "id": "tt0068646"
    },
    {
        "title": "The Godfather: Part II",
        "rank": "3",
        "id": "tt0071562"
    },
    {
        "title": "Pulp Fiction",
        "rank": "4",
        "id": "tt0110912"
    },
    {
        "title": "The Good, the Bad and the Ugly",
        "rank": "5",
        "id": "tt0060196"
    }];

class Movies {
    constructor(movie) {
        this.title = movie.title
        this.year = movie.year
        this.rank = movie.rank
        this.body = movie
    }

    save() {
        let movie = {
            id: movies.length + 1,
            title: this.title,
            year: this.year,
            rank: this.rank
        }
        movies.push(movie)
        return movie
    }

    update(id) {
        let movie = this.get(id)
        let update = this.body
        if (movie.id) {
            Object.assign(movies[movies.indexOf(movie)], update)
            return this.get(id)
        }
    }

    get(id) {
        let movie = movies.find(movie => movie.id === id.toString())
        if (movie) {
            return movie

        } else {
            return Boom.notFound().output.payload
        }
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

class Movie {
    save() {
        let movie = {
            id: movies.length + 1,
            title: this.title,
            year: this.year,
            rank: this.rank
        }
        movies.push(movie)
        return movie
    }

    update(id) {
        let movie = this.get(id)
        let update = this.body
        if (movie.id) {
            Object.assign(movies[movies.indexOf(movie)], update)
            return this.get(id)
        }
    }

    get(req,res) {
        db.query("SELECT * FROM movies ORDER BY id ASC", (error, results) => {
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


module.exports = { movies, Movie, Movies };