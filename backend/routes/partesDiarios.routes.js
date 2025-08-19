const express = require('express');
const router = express.Router();
const controller = require('../controllers/partesDiarios.controller');

// Crear parte diario
router.post('/', controller.crearParteDiario);

// Obtener todos los partes diarios
router.get('/', controller.getAllPartesDiarios);


// Obtener parte diario por ID
router.get('/:id', controller.getParteDiarioById);

// Modificar parte diario
router.put('/:id', controller.modificarParteDiario);

// Eliminar parte diario
router.delete('/:id', controller.eliminarParteDiario);

// Obtener partes diarios por fecha (query params: desde, hasta)
router.get('/por-fecha/buscar', controller.getPartesPorFecha);

router.get('/por-dependencia/:dependencia_id', controller.getPartesDiariosPorDependencia);

module.exports = router;