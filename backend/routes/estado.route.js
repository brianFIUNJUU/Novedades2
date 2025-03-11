const express = require('express');
const router = express.Router();
const estadoController = require('../controllers/estado.controller');

// Definir las rutas
router.get('/', estadoController.getEstados);
router.get('/novedad/:novedadId/persona/:personaId', estadoController.getEstadoByNovedadAndPersona);
router.get('/:id', estadoController.getEstadoById); // Ruta para obtener estado por ID
router.post('/', estadoController.createEstado);
router.put('/:id', estadoController.updateEstado);
router.delete('/:novedad_id/:persona_id', estadoController.deleteEstado);


module.exports = router;