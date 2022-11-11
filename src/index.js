const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const inventory = require("./routes/inventory.route");
const inventoryForDays = require("./routes/InventoryForDays.route");

// Configuring the database
const dbConfig = "mongodb://localhost:27017/my_QLKH";
const mongoose = require("mongoose");

// Connecting to the database
mongoose
  .connect(dbConfig)
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((err) => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });

//Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// API inventory
app.use("/inventory", inventory);
app.use("/inventoryForDays", inventoryForDays);

//listening on port
app.listen(port, () => console.log("listening on port"));
