let MongoClient = require("mongodb").MongoClient;
let categories = require("./cats");
let qs = require("./qs");

let mongoUrlLocal = "mongodb://admin:password@localhost:27017";

let coll = "questions";
let dataToAdd = qs;

// "user-account" in demo with docker. "my-db" in demo with docker-compose
MongoClient.connect(mongoUrlLocal, function (err, db) {
  if (err) throw err;
  var dbo = db.db("ctio-fin");
  dbo.collection(coll).insertMany(dataToAdd, function (err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});
