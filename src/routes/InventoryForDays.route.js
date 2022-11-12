const express = require('express');
const router = express.Router();
const inventoryForDays_controller = require('../controllers/inventory_for_days.controller');

router.post('/create', inventoryForDays_controller.create);

router.get('/showInventory', inventoryForDays_controller.showInventory);

module.exports = router;