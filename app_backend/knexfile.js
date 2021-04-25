// Update with your config settings.
require("dotenv").config();

module.exports = {
  // development database config
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/database.db3",
    },
    migrations: {
      directory: `./data/migrations`,
    },
    seeds: {
      directory: `./data/seeds`,
    },
    pool: {
      min: 2,
      max: 10,
    },
  },

  // prod database config
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: `${__dirname}/data/migrations`,
    },
    seeds: {
      directory: `${__dirname}/data/seeds`,
    },
    pool: {
      min: 2,
      max: 10,
    },
  },
};
