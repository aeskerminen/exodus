const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const router = require("./routes/router");
const app = express();

app.use(express.json());
app.use(morgan("tiny"));
app.use(cors());

app.use("/api/data", router);

module.exports = app;
