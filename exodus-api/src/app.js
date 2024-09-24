const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const rentalAssignmentRouter = require("./routes/rentalAssignmentRouter");
const warehouseRentalRouter = require("./routes/warehouseRentalRouter");
const app = express();

app.use(express.json());
app.use(morgan("tiny"));
app.use(cors());

app.use("/data/rentalAssignments", rentalAssignmentRouter);
app.use("/data/warehouseRentals", warehouseRentalRouter);

module.exports = app;
