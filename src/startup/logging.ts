import winston from "winston";
import morgan from "morgan";
import { Application } from "express";
require("winston-mongodb");
const debug = require("debug")("app:startup");
require("express-async-errors");

module.exports = (app: Application) => {
  winston.add(
    new winston.transports.File({
      filename: "logfile.log",
    })
  );
  winston.exceptions.handle(
    new winston.transports.Console({
      level: "trace",
      silent: false,
    }),
    new winston.transports.File({ filename: "uncaughtExceptions.log" })
  );
  // winston.add(new winston.transports.MongoDB({ db }));

  if (app.get("env") === "development") {
    app.use(morgan("tiny"));
    debug("Morgan Enabled");
  }
};
