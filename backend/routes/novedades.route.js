const express = require('express');
const router = express.Router();
const novedadesController = require('../controllers/novedades.controllers'); // Asegúrate de que la ruta sea correcta

// Definir las rutas para la gestión de novedades
router.get('/', novedadesController.getAllNovedades);
router.get('/:id', novedadesController.getNovedadById);
router.post('/', novedadesController.createNovedad);
router.put('/:id', novedadesController.updateNovedad);
router.delete('/:id', novedadesController.deleteNovedad);
router.get('/:id/personas', novedadesController.getPersonasByNovedadId); // Nueva ruta
router.get('/:id/personas', novedadesController.getPersonasByNovedadId); // Nueva ruta
router.get('/:id/personal', novedadesController.getPersonalByNovedadId); // Nueva ruta
router.delete('/:novedadId/personas/:personaId', novedadesController.deletePersonaFromNovedad); // Nueva ruta
router.get('/novedades/personal_autor/:legajo', novedadesController.getNovedadByPersonalAutorByLegajo);


module.exports = router;