const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./routes/calcRoute");
const dotenv = require("dotenv");
dotenv.config();

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.get("/", (req, res) => {
  res.send("this is the root endpoint");
});
app.use("/calc", router);

module.exports = app;
