const express = require('express');
const router = express.Router();
const elementoController = require('../controllers/elemento.controllers');

// Ruta para obtener todos los elementos
router.get('/', elementoController.getElementos);

// Ruta para obtener un elemento por ID
router.get('/:id', elementoController.getElementoById);

// Ruta para crear un nuevo elemento
router.post('/', elementoController.createElemento);

// Ruta para actualizar un elemento existente
router.put('/:id', elementoController.updateElemento);

// Ruta para eliminar un elemento
router.delete('/:id', elementoController.deleteElemento);

// Ruta para obtener elementos por nombre de categoría
router.get('/categoria/:categoria_nombre', elementoController.getElementosByCategoria);
router.get('/categoria-por-elemento/:elemento_nombre', elementoController.getCategoriaByElemento);

module.exports = router;