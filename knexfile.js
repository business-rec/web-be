module.exports = {
  // development: {
  //   client: "sqlite3",
  //   connection: {
  //     filename: "./database/dev.sqlite3"
  //   },
  //   pool: {
  //     afterCreate: (conn, cb) => {
  //       conn.run("PRAGMA foreign_keys = ON", cb);
  //     }
  //   },
  //   debug: true,
  //   useNullAsDefault: true,
  //   migrations: {
  //     directory: "./database/migrations",
  //     tableName: "dbmigrations"
  //   },
  //   seeds: { directory: "./database/seeds" }
  // },
  development: {
    client: "pg",
    connection: "postgres://bryant:@localhost:5436/template1",
    migrations: {
      directory: __dirname + "/database/migrations",
      tableName: "dbmigrations"
    },
    debug: true,
    seeds: {
      directory: __dirname + "/database/seeds"
    }
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: __dirname + "/database/migrations"
    },
    seeds: {
      directory: __dirname + "/database/seeds"
    }
  },
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
