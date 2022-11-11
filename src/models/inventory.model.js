const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let InventorySchema = new Schema({
    name: {type: String, required: true, max: 100},
    quantity: {type: Number, required: true},
});

// Export the model
module.exports = mongoose.model('inventory', InventorySchema);