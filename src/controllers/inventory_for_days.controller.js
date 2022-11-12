const InventoryForDays = require("../models/inventory_for_days.model");
const Inventory = require("../models/inventory.model");

// Create a new Inventory
exports.create = async function (req, res, next) {
  res.set("Access-Control-Allow-Origin", "http://localhost:3000");
  let today = new Date();
  today = String(today).substr(0, 15);

  let checkDate = await InventoryForDays.findOne({ date: today });
  if (checkDate) {
    return res.send("Ton Tai roi");
  }

  let inventory = await Inventory.findOne({ name: "apple" });
  let inventoryForDays = new InventoryForDays({
    date: today,
    begin: inventory.quantity,
    end: inventory.quantity,
  });

  inventoryForDays.save(function (err) {
    if (err) {
      return next(err);
    }
    res.send("Created successfully");
  });
};

// Show inventory
exports.showInventory = function (req, res) {
  res.set("Access-Control-Allow-Origin", "http://localhost:3000");
  let today = new Date();
  today = String(today).substr(0, 15);

  InventoryForDays.findOne({ date: today }, function (err, inventoryForDays) {
    if (err) return next(err);
    res.send(inventoryForDays);
  });
};
