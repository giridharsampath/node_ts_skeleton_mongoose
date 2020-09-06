import express, { Application } from "express";

const app: Application = express();

require("./startup/db")(app);
require("./startup/logging")(app);
require("./startup/config")(app);
require("./startup/routes")(app);
