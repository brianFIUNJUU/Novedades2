const express = require('express');
const router = express.Router();
const novedadPersonaController = require('../controllers/novedad_persona.controllers');

// Definir las rutas para la gestión de personas en novedades
router.get('/:novedad_id/personas', novedadPersonaController.getPersonasByNovedadId);
router.post('/add', novedadPersonaController.addPersonaToNovedad); // Ajustar la ruta para que coincida con la solicitud de Postman
router.delete('/:novedad_id/personas/:persona_id', novedadPersonaController.removePersonaFromNovedad);

module.exports = router;