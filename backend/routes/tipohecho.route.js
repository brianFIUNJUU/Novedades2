const express = require('express');
const router = express.Router();
const tipoHechoCtrl = require('../controllers/tipohecho.controllers');

// Ruta para obtener todos los tipos de hecho
router.get('/', tipoHechoCtrl.getTiposHecho);

// Ruta para crear un nuevo tipo de hecho
router.post('/', tipoHechoCtrl.createTipoHecho);

// Ruta para obtener un tipo de hecho por ID
router.get('/:id', tipoHechoCtrl.getTipoHecho);

// Ruta para actualizar un tipo de hecho
router.put('/:id', tipoHechoCtrl.editTipoHecho);

// Ruta para eliminar un tipo de hecho
router.delete('/:id', tipoHechoCtrl.deleteTipoHecho);

module.exports = router;