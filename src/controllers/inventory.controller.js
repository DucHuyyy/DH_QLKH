const Inventory = require("../models/inventory.model");

// Create a new Inventory
exports.create = function (req, res, next) {
  let inventory = new Inventory({
    name: req.body.name,
    quantity: 0,
  });

  inventory.save(function (err) {
    if (err) {
      return next(err);
    }
    res.send("Quantity Created successfully");
  });
};

// Show Inventory
exports.showInventory = function (req, res) {
  Inventory.findById(req.params.id, function (err, inventory) {
    if (err) return next(err);
    res.send(inventory);
  });
};

// import, export 
exports.update = async function (req, res) {
  const query = req.body;
  query.quantity = Math.abs(query.quantity);
  let data = await Inventory.findById(req.params.id);
  let newQuantity;

  switch (query.additional) {
    case "import":
      newQuantity = data.quantity + query.quantity;
      break;

    case "export":
      if (query.quantity > data.quantity) {
        return res.send("Update failed");
      }
      newQuantity = data.quantity - query.quantity;
      break;

    default:
      query.quantity = 0;
  }

  Inventory.findByIdAndUpdate(
    req.params.id,
    {
      quantity: newQuantity,
    },
    function (err, inventory) {
      if (err) return next(err);
      res.send("Update successful");
    }
  );
};
