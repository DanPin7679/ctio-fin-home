const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();

const app = express();
const qRoutes = require("./routes/qRoutes")
const catRoutes = require("./routes/catRoutes")
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json())

app.use("/api/categories", catRoutes);
app.use("/api/questions", qRoutes);

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

