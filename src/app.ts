import * as bodyParser from "body-parser";
import * as express from "express";
import * as mongoose from "mongoose";


const app = express();

app.disable("x-powered-by");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "1mb" }));

mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("mongodb connection open!")
});

app.get("/", (req, res)=> res.send('Hello World!'));

module.exports = app;