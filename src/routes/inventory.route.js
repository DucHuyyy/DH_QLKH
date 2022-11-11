const express = require('express');
const router = express.Router();
const inventory_controller = require('../controllers/inventory.controller');

router.post('/create', inventory_controller.create);

router.get('/:id', inventory_controller.showInventory);

router.put('/:id/update', inventory_controller.update);

module.exports = router;