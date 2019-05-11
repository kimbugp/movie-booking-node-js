const express = require("express");
const app = express();
const port = 3000;
const moviesRouter = require("./src/routes/movies");

let bodyParser = require("body-parser");
var logger = require("morgan");

app.use(logger("combined"));
//parse application/json and look for raw text                                        
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/json" }));


app.use("/api/v1/movies",moviesRouter)

// app.get("/", (req, res) => res.json({ "message": "hello there" }));
// app.route("/movies")
//     .get(movies.getMovies)
//     .post(movies.addMovies);
// app.route("/movies/:id")
//     .get(movies.getMovie)
//     .put(movies.editMovie)
//     .delete(movies.deleteMovie);

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Example app listening on port ${port}! running on ${process.env.NODE_ENV}`));

module.exports =  app;