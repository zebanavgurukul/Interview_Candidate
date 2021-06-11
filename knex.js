const knex = require ("knex");

const connection = {
    client : "mysql",
    connection : {
        host : "localhost",
        user : "root",
        password: "zeba@123",
        database: "excellence_technologies"
    }
};

module.exports = knex(connection);