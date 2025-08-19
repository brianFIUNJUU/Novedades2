const express = require('express');
const router = express.Router();
const novedadesController = require('../controllers/novedades.controllers'); // Asegúrate de que la ruta sea correcta

// Definir las rutas para la gestión de novedades
router.get('/today', novedadesController.getNovedadByToday);
router.get('/rango-fecha', novedadesController.getNovedadByRangoFecha);
router.get('/by-fecha-hora', novedadesController.getNovedadesByFechaYHoraRango);
router.get('/legajo/:legajo/rango-fecha', novedadesController.getNovedadByLegajoByRangoFecha);
router.get('/unidad-regional/:unidad_regional_id', novedadesController.getNovedadByUnidadRegional);
router.get('/unidad-regional/:unidad_regional_id/today', novedadesController.getNovedadByUnidadRegionalByToday);
router.get('/unidad-regional/:unidad_regional_id/rango-fecha', novedadesController.getNovedadByUnidadRegionalByRangoFecha);

router.get('/todosNovedades-por-fecha-hora-rango', novedadesController.getNovedadesByFechaYHoraRangoSinDependencia);

router.get('/dependencia/:dependencia_id', novedadesController.getNovedadByDependencia);

// backend/routes/novedades.route.js
router.get('/dependencia/today/:dependencia_id', novedadesController.getNovedadByDependenciaByToday);

// backend/routes/novedades.route.js
router.get('/dependencia/rango-fecha/:dependencia_id', novedadesController.getNovedadByDependenciaByRangoFecha);
router.get('/operativo/:operativo_id', novedadesController.getNovedadesByOperativo);
router.get('/novedades/n_incidencia/:n_incidencia', novedadesController.getNovedadesByNIncidencia);
router.get('/origen/:origen_novedad/rango-fecha', novedadesController.getNovedadesByOrigenNovedadYRangoFecha);
router.get('/', novedadesController.getAllNovedades);
router.get('/:id', novedadesController.getNovedadById);
router.post('/', novedadesController.createNovedad);
router.put('/:id', novedadesController.updateNovedad);
router.delete('/:id', novedadesController.deleteNovedad);
router.get('/:id/personas', novedadesController.getPersonasByNovedadId); // Nueva ruta
router.get('/:id/personas', novedadesController.getPersonasByNovedadId); // Nueva ruta
router.get('/:id/personal', novedadesController.getPersonalByNovedadId); // Nueva ruta
router.delete('/:novedadId/personas/:personaId', novedadesController.deletePersonaFromNovedad); // Nueva ruta
router.get('/personal_autor/:legajo', novedadesController.getNovedadByPersonalAutorByLegajo);
router.get('/legajo/:legajo/today', novedadesController.getNovedadesByLegajoByToday);
module.exports = router;