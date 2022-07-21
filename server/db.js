const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "Federal-Sanctity5-Egotistic",
    host: "192.168.110.7",
    port: 5432,
    database: "museum"
});

module.exports = pool;