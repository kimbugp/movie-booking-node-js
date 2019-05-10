const Pool = require("pg").Pool

function connection(environment) {
    let database
    if (environment === "testing") {
        database = process.env.TEST_DATABASE
    }
    else {
        database = process.env.DATABASE
    }
    const pool = new Pool({
        user: process.env.USER,
        host: process.env.HOST,
        database,
        password: process.env.PASSWORD,
        port: process.env.PORT
    })
    return pool
}

module.exports = connection