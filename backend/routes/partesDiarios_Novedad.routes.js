const express = require('express');
const router = express.Router();
const controller = require('../controllers/partesDiarios_Novedad.controller');

// Agregar múltiples relaciones
router.post('/add-multiple', controller.addMultiple);
// backend/routes/partesDiarios_Novedad.routes.js

router.post('/contar-vehiculos-secuestrados', controller.contarElementosSecuestradosVehiculosPorNovedades);
router.post('/contar-motos-secuestradas', controller.contarElementosSecuestradosMotosPorNovedades);
router.post('/detenidos-por-novedades', controller.getPersonasDemoradasPorNovedades);
router.put('/update-multiple', controller.updateMultiple);

// Eliminar múltiples relaciones
router.delete('/delete-multiple', controller.deleteMultiple);

module.exports = router;