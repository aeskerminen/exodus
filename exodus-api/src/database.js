const { Pool } = require("pg");

const dbConfig = {
  user: "username",
  password: "password",
  host: "exodus-sql-server",
  port: "5432",
  database: "database",
};

const pool = new Pool({ ...dbConfig });

module.exports = pool;
