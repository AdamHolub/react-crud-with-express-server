var express = require('express');
var router = express.Router();

const itemsController = require('../controllers/items');

router.get('/', itemsController.getAllItems);

router.get('/:id', itemsController.getItemById);

router.delete('/:id', itemsController.deleteItem);

router.put('/:id', itemsController.updateItem);

router.post('/', itemsController.createItem);

module.exports = router;