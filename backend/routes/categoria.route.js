const express = require('express');
const router = express.Router();
const categoriaController = require('../controllers/categoria.controllers');

// Ruta para obtener todas las categorías
router.get('/', categoriaController.getAllCategorias);

// Ruta para obtener una categoría por ID
router.get('/:id', categoriaController.getCategoriaById);

// Ruta para crear una nueva categoría
router.post('/', categoriaController.createCategoria);

// Ruta para actualizar una categoría existente
router.put('/:id', categoriaController.updateCategoria);

// Ruta para eliminar una categoría
router.delete('/:id', categoriaController.deleteCategoria);

module.exports = router;