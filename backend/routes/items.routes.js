const express = require('express');
const router = express.Router();
const controller = require('../controllers/items.controller');

// Crear un item
router.post('/', controller.addItem);

// Crear múltiples items
router.post('/multiple', controller.addMultipleItems);

// Obtener todos los items de un parte diario
router.get('/parte/:parte_diario_id', controller.getItemsByParteDiarioId);

// Obtener un item por id
router.get('/:id', controller.getItemById);

// Actualizar un item
router.put('/:id', controller.updateItem);

// Eliminar un item
router.delete('/:id', controller.deleteItem);

module.exports = router;