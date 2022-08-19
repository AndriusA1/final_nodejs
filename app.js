const express = require("express");
const app = express();
const nid = require("nid");
const cors = require("cors");
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://Admin:Vilnius@cluster0.ptxlm.mongodb.net/?retryWrites=true&w=majority"
  )
  .then((res) => {
    console.log("I'm successfully connected to database!");
  })
  .catch((e) => {
    console.log("ERROR!! im not connected to database!");
  });

app.listen(4001);

app.use(cors());
app.use(express.json());

const router = require("./router/mainRouter");
app.use("/", router);

const towns = [];

app.get("/user/:location", (req, res) => {
  const { location } = req.params;
  const one = {
    location,
    id: nid(3),
  };
  towns.push(one);
  res.send({ message: one });
});

app.get("/all", (req, res) => {
  res.send({ towns });
});
