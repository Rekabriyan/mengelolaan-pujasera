const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "4321",
    database: "pujasera"
})

module.exports = client