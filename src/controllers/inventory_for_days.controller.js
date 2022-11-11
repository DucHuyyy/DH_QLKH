const InventoryForDays = require("../models/inventory_for_days.model");
const Inventory = require("../models/inventory.model");

// Create a new Inventory
exports.create = async function (req, res, next) {
  let today = new Date();
  today = String(today).substr(0, 15);

  let checkDate = await InventoryForDays.findOne({ date: today });
  if (checkDate) {
    return res.send("Ton Tai roi");
  }

  let inventory = await Inventory.findById("636dbe586f6e64b0fae4fb45");
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
  let today = new Date();
  today = String(today).substr(0, 15);

  InventoryForDays.findOne({ date: today }, function (err, inventoryForDays) {
    if (err) return next(err);
    res.send(inventoryForDays);
  });
};
