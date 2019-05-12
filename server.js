import "@babel/polyfill";
import express from "express";

import moviesRouter from "./src/routes/movies";

import { json, urlencoded, text } from "body-parser";
import logger from "morgan";

const app = express();
const port = 3000;

app.use(logger("combined"));
//parse application/json and look for raw text                                        
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(text());
app.use(json({ type: "application/json" }));


app.use("/api/v1/movies", moviesRouter)


app.get("/", (req, res) => res.json({ "message": "hello there" }));

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Example app listening on port ${port}! running on ${process.env.NODE_ENV}`));

export default app;