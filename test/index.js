process.env.NODE_ENV = "test";
import pool from ".././config/default";
let connection = pool("default")

export default connection