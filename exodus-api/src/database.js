const { Client } = require("pg");

const dbConfig = {
  user: "username",
  password: "password",
  host: "exodus-sql-server",
  port: "5432",
  database: "database",
};

const client = new Client(dbConfig);

module.exports = client;
