var knex = require("knex")({
    client: 'mysql',
    connection: {
        host: "127.0.0.1",
        user: "root",
        password: "zeba@123",
        database: "excellence_technologies"
    }
});
module.exports = knex;

knex.schema.hasTable('candidates').then((exists) => {
    if (!exists) {
        return knex.schema.createTable('candidates', (table) => {
            table.increments('id')
            table.string('Name')
            table.string('Email')
        })
        .catch((err) => {
            console.log(err,"There is some err while writing the quety")
        })
    }
    return console.log('table is created!')
});

knex.schema.hasTable('test_score').then((exists) => {
    if (!exists) {
        return knex.schema.createTable('test_score', (table) => {
            table.increments('ID')
            table.integer("candidates_ID").unsigned()
            table.foreign("candidates_ID").references("candidates.ID")
            table.integer('First_round')
            table.integer('Second_round')
            table.integer('Third_round')
        })
        .catch((err) => {
            console.log(err,"There is some err while writing the quety")
        })
    }
    return console.log('table is created!')
});