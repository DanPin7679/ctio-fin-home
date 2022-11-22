const express = require("express");
const cors = require("cors");
let MongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");
const getCalcResults = require("./routes/getCalcResults");
// const categories = require(/routes/cats.js)
const dotenv = require("dotenv");
const { response } = require("express");

const app = express();
app.use(cors());
var jsonParser = bodyParser.json();
dotenv.config();
const port = process.env.PORT || 8080;

// app.get("getCalcResults", async (req, res) => {
//   const test = async (_) => {
//     return { name: "dany" };
//   };

//   test().then((value) => {
//     console.log("in index " + value); // 1
//     res.send({ result: value });
//   });
// });

app.post("/postCalcResults", jsonParser, async (req, res) => {
  const test = async (_) => {
    console.log("in post");
    console.log(req.body);
    return getCalcResults(JSON.stringify(req.body));
  };

  test().then((value) => {
    console.log(value);
    res.send(value);
  });
});

// app.get("api/questions", (req, res) => {
//   res.send(JSON.stringify(questions));
// });

// app.get("api/categories", (req, res) => {
//   res.send(JSON.stringify(categories));
// });
app.use("/api/categories", require("./routes/catRoutes"));
app.use("/api/questions", require("./routes/questionRoutes"));

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
