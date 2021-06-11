const knex = require("../knex");

let candidates = (updata) => {
    return knex('candidates').insert(updata)
}

let test_score = (updata) => {
    return knex('test_score').insert(updata)
}

let Alldata = () => {
    return knex('test_score').select('*')
}

module.exports = {candidates,test_score,Alldata}