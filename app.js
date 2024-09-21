const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./routes/calcRoute");

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());
app.get("/", (req, res) => {
  res.send("this is the root endpoint");
});
app.use("/calc", router);

module.exports = app;
