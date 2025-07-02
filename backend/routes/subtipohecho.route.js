const express = require('express');
const router = express.Router();
const subtipoHechoController = require('../controllers/subtipohecho.controllers');

// Ruta para obtener todos los subtipos de hecho
router.get('/', subtipoHechoController.getSubtiposHecho);

// Ruta para crear un nuevo subtipo de hecho
router.post('/', subtipoHechoController.createSubtipoHecho);

// Ruta para obtener un subtipo de hecho por ID
router.get('/:id', subtipoHechoController.getSubtipoHecho);

// Ruta para actualizar un subtipo de hecho
router.put('/:id', subtipoHechoController.editSubtipoHecho);

// Ruta para eliminar un subtipo de hecho
router.delete('/:id', subtipoHechoController.deleteSubtipoHecho);

// Ruta para obtener subtipos de hecho por tipo de hecho
router.get('/tipohecho/:tipoHechoId', subtipoHechoController.getSubtiposHechoByTipoHecho);

module.exports = router;