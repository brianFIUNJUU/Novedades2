const express = require('express');
const router = express.Router();
const descripcionHechoCtrl = require('../controllers/descripcion_hecho.controllers');

// Ruta para obtener todas las descripciones de hecho
router.get('/', descripcionHechoCtrl.getDescripcionesHecho);

// Ruta para crear una nueva descripción de hecho
router.post('/', descripcionHechoCtrl.createDescripcionHecho);

// Ruta para obtener una descripción de hecho por ID
router.get('/:id', descripcionHechoCtrl.getDescripcionHecho);

// Ruta para actualizar una descripción de hecho
router.put('/:id', descripcionHechoCtrl.editDescripcionHecho);

// Ruta para eliminar una descripción de hecho
router.delete('/:id', descripcionHechoCtrl.deleteDescripcionHecho);

// Ruta para obtener descripciones de hecho por subtipo de hecho
router.get('/subtipohecho/:subtipoHechoId', descripcionHechoCtrl.getDescripcionesHechoBySubtipoHecho);

router.get('/subtipohecho-descripcion/:descripcionid', descripcionHechoCtrl.getSubtipoHechoByDescripcion);


module.exports = router;