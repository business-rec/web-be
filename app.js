const Knex = require("knex");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const express = require("express");
const compression = require("compression");
const bodyParser = require("body-parser");
const knexConfig = require("./knexfile");
const promiseRouter = require("express-promise-router");
//router APIs
const AuthRouter = require("./auth/auth-router");
const CompaniesRouter = require("./companies/companies-router.js");
const UsersRouter = require("./users/users-router.js");
//middleware
const authenticate = require("./auth/authenticate-middleware.js");
const { Model } = require("objection");

//const knex = Knex(knexConfig.development);
const knex = require("./database/dbConfig.js");

Model.knex(knex); //objection
const router = promiseRouter();
const companiesRouter = promiseRouter();
const usersRouter = promiseRouter();
const app = express();
app.use(compression());
app.use(
  cors({
    credentials: true,
    origin: (origin, callback) => {
      callback(null, true);
    }
  })
);
app.use(bodyParser.json());
app.use(morgan("dev"));
app.set("json spaces", 2);
app.use(helmet());
app.use("/api/auth", router);
app.use("/api/companies", authenticate, companiesRouter);
//app.use("/api/companies", companiesRouter);
app.use("/api/users", authenticate, usersRouter);

AuthRouter(router);
CompaniesRouter(companiesRouter);
UsersRouter(usersRouter);

app.use((err, req, res, next) => {
  if (err) {
    res
      .status(err.statusCode || err.status || 500)
      .send(err.data || err.message || {});
  } else {
    next();
  }
});

app.get("/", (req, res) => {
  res.json({ message: "API is up and running!" });
});

module.exports = app;
