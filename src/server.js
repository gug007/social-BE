import express from "express";
import routes from "./routes";
import bodyParser from "body-parser";
import { APP_PORT } from "./config/app";
import accessControl from "./access-control";

const app = express();

app.use(accessControl);
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(routes);

app.listen(APP_PORT, () => console.log("[API SERVER]", APP_PORT));

module.exports = app;
