import * as bodyParser from "body-parser";
import * as express from "express";
import * as mongoose from "mongoose";
import models from "./models";

const MONGODB_URL = "mongodb://localhost:27017/kaputi";
const app = express();

app.disable("x-powered-by");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "1mb" }));

mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true}).then(
  () => console.log("mongodb connection open!"),
  (error: string) => {throw new Error(error)}
);

app.get("/", (req, res)=> res.send('Kaputi!'));

module.exports = app;