import express, { Application } from "express";

module.exports = (app: Application) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
};
