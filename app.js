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
const YelpRouter = require("./yelp/yelp-router.js");
//middleware
const authenticate = require("./auth/authenticate-middleware.js");
const { Model } = require("objection");

//const knex = Knex(knexConfig.staging);
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
app.use("/api/yelp", router);
app.use("/api/companies", authenticate, companiesRouter);
//app.use("/api/companies", companiesRouter);
app.use("/api/users", authenticate, usersRouter);

AuthRouter(router);
YelpRouter(router);
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

const { ValidationError, NotFoundError } = require("objection");

const {
  DBError,
  ConstraintViolationError,
  UniqueViolationError,
  NotNullViolationError,
  ForeignKeyViolationError,
  CheckViolationError,
  DataError
} = require("objection-db-errors");

// In this example `res` is an express response object.
function errorHandler(err, res) {
  if (err instanceof ValidationError) {
    switch (err.type) {
      case "ModelValidation":
        res.status(400).send({
          message: err.message,
          type: err.type,
          data: err.data
        });
        break;
      case "RelationExpression":
        res.status(400).send({
          message: err.message,
          type: "RelationExpression",
          data: {}
        });
        break;
      case "UnallowedRelation":
        res.status(400).send({
          message: err.message,
          type: err.type,
          data: {}
        });
        break;
      case "InvalidGraph":
        res.status(400).send({
          message: err.message,
          type: err.type,
          data: {}
        });
        break;
      default:
        res.status(400).send({
          message: err.message,
          type: "UnknownValidationError",
          data: {}
        });
        break;
    }
  } else if (err instanceof NotFoundError) {
    res.status(404).send({
      message: err.message,
      type: "NotFound",
      data: {}
    });
  } else if (err instanceof UniqueViolationError) {
    res.status(409).send({
      message: err.message,
      type: "UniqueViolation",
      data: {
        columns: err.columns,
        table: err.table,
        constraint: err.constraint
      }
    });
  } else if (err instanceof NotNullViolationError) {
    res.status(400).send({
      message: err.message,
      type: "NotNullViolation",
      data: {
        column: err.column,
        table: err.table
      }
    });
  } else if (err instanceof ForeignKeyViolationError) {
    res.status(409).send({
      message: err.message,
      type: "ForeignKeyViolation",
      data: {
        table: err.table,
        constraint: err.constraint
      }
    });
  } else if (err instanceof CheckViolationError) {
    res.status(400).send({
      message: err.message,
      type: "CheckViolation",
      data: {
        table: err.table,
        constraint: err.constraint
      }
    });
  } else if (err instanceof DataError) {
    res.status(400).send({
      message: err.message,
      type: "InvalidData",
      data: {}
    });
  } else if (err instanceof DBError) {
    res.status(500).send({
      message: err.message,
      type: "UnknownDatabaseError",
      data: {}
    });
  } else {
    res.status(500).send({
      message: err.message,
      type: "UnknownError",
      data: {}
    });
  }
}
