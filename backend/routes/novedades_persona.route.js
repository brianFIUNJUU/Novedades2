const express = require('express');
const router = express.Router();
const novedadPersonaController = require('../controllers/novedad_persona.controllers');

// Definir las rutas para la gestión de personas en novedades
router.get('/victimarios', novedadPersonaController.getVictimarios);
router.get('/demorados-mayores', novedadPersonaController.getPersonasDemoradasMayores);
router.get('/demorados-menores', novedadPersonaController.getPersonasDemoradasMenores);
router.get('/persona/:persona_id', novedadPersonaController.getNovedadesByPersona);
router.get('/victimarios/residentes', novedadPersonaController.getResidenteVictimario);
router.get('/victimarios/extranjeros', novedadPersonaController.getExtranjeroVictimario);
router.get('/:novedad_id/personas', novedadPersonaController.getPersonasByNovedadId);
router.post('/add', novedadPersonaController.addPersonaToNovedad); // Ajustar la ruta para que coincida con la solicitud de Postman
router.delete('/:novedad_id/personas/:persona_id', novedadPersonaController.removePersonaFromNovedad);
router.put('/:novedad_id/personas/:persona_id', novedadPersonaController.updateEstadoPersonaNovedad);
// backend/routes/novedad_persona.routes.js
router.put('/update-multiple', novedadPersonaController.updatePersonasNovedadMultiple);

module.exports = router;