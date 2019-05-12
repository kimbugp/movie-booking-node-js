import pool from "../../config/default";
let connection = pool(process.env.NODE_ENV)
import { readFileSync } from "fs";

async function processSQLFile(fileName) {

    // Extract SQL queries from files. Assumes no ';' in the fileNames
    var queries = readFileSync(fileName).toString()
        .replace(/(\r\n|\n|\r)/gm, " ") // remove newlines
        .replace(/\s+/g, " ") // excess white space
        .split(";") // split into all statements
        .map(Function.prototype.call, String.prototype.trim)
        .filter(function (el) { return el.length != 0 }); // remove any empty ones
    queries.forEach((query) => {
        connection.query(query)
            .then(
                console.log("success")
            );
    })
}

processSQLFile("src/models/database.sql")
export default connection
