import express from "express";
import routes from "./routes";
import bodyParser from "body-parser";
import { APP_PORT } from "./config/app";
import accessControl from "./access-control";
import path from "path";

const app = express();

app.use(accessControl);
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(routes);

app.listen(APP_PORT, () => console.log("[API SERVER]", APP_PORT));

const Sequelize = require("sequelize");

const env = process.env.NODE_ENV || "development";
const config = require(path.join(__dirname, "config", "config.json"))[env];

const sequelize = process.env.DATABASE_URL
  ? new Sequelize(process.env.DATABASE_URL)
  : new Sequelize(config.database, config.username, config.password, config);

sequelize
  .authenticate()
  .then(() => {
    console.log("[DATABASE] Successfully connected");
  })
  .catch(err => {
    console.error("[DATABASE] Unable to connect", err);
  });

module.exports = app;
