const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();

const app = express();
const qRoutes = require("./routes/qRoutes")
const catRoutes = require("./routes/catRoutes")
const chapRoutes = require("./routes/chapRoutes")
// const calcRoutes = require("./routes/calcRoutes")
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json())

app.use("/api/categories", catRoutes);
app.use("/api/questions", qRoutes);
app.use("/api/chapitres", chapRoutes);

app.post("/api/calc", async (req, res) => {
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
// app.use("/api/calc", calcRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(()=>{
    console.log(`connected to Mongo!`);
    app.listen(port, () => {
      console.log(`listening on port ${port}!`);
    });
  })
  .catch((error)=>{
  console.log(error)
  })

