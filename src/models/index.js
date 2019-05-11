const pool = require("../../config/default")
let connection = pool("default")

connection.query("CREATE TABLE if not exists movies (id SERIAL PRIMARY KEY,title text,year text)")

module.exports = connection
