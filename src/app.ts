import * as bodyParser from "body-parser";
import * as express from "express";


const app = express();

app.disable("x-powered-by");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "1mb" }));

app.get("/", (req, res)=> res.send('Hello World!'));

module.exports = app;