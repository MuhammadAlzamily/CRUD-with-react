const Pool = require('pg').Pool;

const db = new Pool({
    user:"postgres",
    password:"root",
    host:"localhost",
    port:5432,
    database:"employeesdb"
});

module.exports = db;