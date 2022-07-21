const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "****************",
    host: "***.***.***.***",
    port: 5432,
    database: "museum"
});

module.exports = pool;