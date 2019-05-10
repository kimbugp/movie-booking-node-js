const express = require("express");
const app = express();
const port = 3000;
const movies = require("./src/routes/movies");
let bodyParser = require("body-parser");

//parse application/json and look for raw text                                        
app.use(bodyParser.json());                                     
app.use(bodyParser.urlencoded({extended: true}));               
app.use(bodyParser.text());                                    
app.use(bodyParser.json({ type: "application/json"}));  

app.get("/", (req, res) => res.json({ "message": "hello there" }));
app.route("/movies")
    .get(movies.getMovies)
    .post(movies.addMovies);
app.route("/movies/:id")
    .get(movies.getMovie)
    .put(movies.editMovie)
    .delete(movies.deleteMovie);

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Example app listening on port ${port}!`));