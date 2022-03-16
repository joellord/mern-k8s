const express = require("express");
require("dotenv").config()
const cors = require("cors");

const PORT = process.env.PORT;
const CONN_STR = process.env.CONN_STR;

let DB_CONNECTED = false;

const getMongoDB = async () => {
  const MongoClient = require('mongodb').MongoClient;

  const client = await MongoClient.connect(CONN_STR, { useNewUrlParser: true, useUnifiedTopology: true });
  const db = await client.db("mern-k8s");
  DB_CONNECTED = true;
  return db;
}
let db;
getMongoDB().then(_db => db = _db);

let app = express();
app.use(cors())

const log = (route, message) => {
   const now = new Date();
   const date = `${now.getDay()}/${(now.getMonth()+1).toString().padStart(2, "0")}/${now.getFullYear()}`;
   const time = `${(now.getHours()).toString().padStart(2, "0")}:${(now.getMinutes()).toString().padStart(2, "0")}:${(now.getSeconds()).toString().padStart(2, "0")}`;
   const log = `[${date} ${time}] - (${route}) - ${message}`;
   console.log(log);
}

app.get("/healthz", (req, res) => {
  log("/healthz", "GET request");
  res.send({status: "Ok", dbConnected: DB_CONNECTED}).status(200);
});

app.get("/items", async (req, res) => {
  log("/items", "GET request");
  let items = [];
  try {
    let collection = await db.collection("items")
    items = await collection.find({}).toArray();
  } catch (e) {
    log("/items", e.toString());
  }
  res.send(items).status(200);
});

app.get("/populate/:name?", async (req, res) => {
  log("/populate", "GET request");
  let result;
  try {
    let collection = await db.collection("items");
    result = await collection.insertOne({name: req.params.name || "New User"});
  } catch (e) {
    log("/populate", e.toString());
  }
  res.send(result).status(200);
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));