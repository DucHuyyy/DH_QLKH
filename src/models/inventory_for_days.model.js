const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let InventoryForDaysSchema = new Schema({
    date: {type: String, required: true},
    begin: {type: Number, required: true},
    end: {type: Number, required: true}
});

// Export the model
module.exports = mongoose.model('inventory_for_day', InventoryForDaysSchema);