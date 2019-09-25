// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./database/dev.sqlite3"
    },
    pool: {
      afterCreate: (conn, cb) => {
        conn.run("PRAGMA foreign_keys = ON", cb);
      }
    },
    debug: true,
    useNullAsDefault: true,
    migrations: {
      directory: "./database/migrations",
      tableName: "dbmigrations"
    },
    seeds: { directory: "./database/seeds" }
  },
  staging: {
    client: "pg",
    connection: "postgres://postgres:@localhost:32768/development_db",
    migrations: {
      directory: __dirname + "/db/migrations"
    },
    seeds: {
      directory: __dirname + "/db/seeds/development"
    }
  },

  // production: {
  //   client: "pg",
  //   connection: process.env.DATABASE_URL,
  //   migrations: {
  //     directory: __dirname + "/database/migrations"
  //   },
  //   seeds: {
  //     directory: __dirname + "/database/seeds"
  //   }
  // },
  testing: {
    client: "sqlite3",
    connection: { filename: "./database/test.sqlite3.db3" },
    useNullAsDefault: true,
    migrations: {
      directory: "./database/migrations",
      tableName: "dbmigrations"
    },
    seeds: { directory: "./database/seeds" }
  }
};
