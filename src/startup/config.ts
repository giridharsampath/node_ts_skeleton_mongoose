import helmet from "helmet";
import cors from "cors";
import { Application } from "express";

module.exports = (app: Application) => {
  app.use(cors());
  app.use(helmet());
};
