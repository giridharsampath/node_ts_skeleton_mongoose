import mongoose from "mongoose";
import config from "config";
import { Application } from "express";

const debug = require("debug")("app:db");
const startup = require("debug")("app:startup");
const db: string = config.get("db");

module.exports = async (app: Application) => {
  try {
    console.log(db);
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    mongoose.set("useUnifiedTopology", true);
    debug("MONGODB connected...");
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      startup(`Listening on Port ${port}`);
    });
    return;
  } catch (err) {
    debug(err.message);
    process.exit(1);
  }
};
