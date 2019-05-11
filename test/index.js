process.env.NODE_ENV = "test";
let pool = require(".././config/default")
let connection = pool("default")

module.exports = connection