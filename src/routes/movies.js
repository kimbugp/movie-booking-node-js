let movies = require("../models/movies");
function getMovies(req, res) {
    return new movies.Movie(req).get(res,res)
}

function addMovies(req, res) {
    var movie = new movies.Movie(req.body);
    movie.save()
    res.json(movie);
}

function editMovie(req, res) {
    let movie = new movies.Movie(req.body).update(req.params.id)
    res.json(movie);
}
function deleteMovie(req, res) {
    let movie = new movies.Movie(res).delete(req.params.id)
    res.json(movie)
}
function getMovie(req, res) {
    var movie = new movies.Movie(req).get(req.params.id)
    res.json(movie);
}

module.exports = { getMovies, addMovies, editMovie, deleteMovie, getMovie };