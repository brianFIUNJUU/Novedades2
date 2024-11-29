const express = require('express');
const router = express.Router();
const novedadesController = require('../controllers/novedades.controllers');

// Ruta para obtener todas las novedades
router.get('/', novedadesController.getAllNovedades);

// Ruta para obtener una novedad por ID
router.get('/:id', novedadesController.getNovedadById);

// Ruta para crear una nueva novedad
router.post('/', novedadesController.createNovedad);

// Ruta para actualizar una novedad por ID
router.put('/:id', novedadesController.updateNovedad);

// Ruta para eliminar una novedad por ID
router.delete('/:id', novedadesController.deleteNovedad);

module.exports = router;