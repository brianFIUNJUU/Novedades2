const express = require('express');
const router = express.Router();
const controller = require('../controllers/operativoPersonalController');

// GET todos los registros
router.get('/', controller.getAll);
router.get('/grupo/:grupo', controller.getByGrupo);
router.get('/operativo/:operativoId/cuadrante/:cuadranteId/grupo/:grupo', controller.getByGrupoByCuadranteByOperativo);
// POST agregar nuevo registro
router.post('/', controller.add);

// DELETE eliminar por ID
router.delete('/:id', controller.delete);

// ✅ GET por cuadrante (corregido)
router.get('/cuadrante/:cuadranteId', controller.getByCuadrante);
router.get('/cuadrante/:cuadranteId/operativo/:operativoId', controller.getByCuadranteYOperativo);
// Ejemplo:
router.get('/operativo/:operativoId', controller.getByOperativo);
router.put('/:id', controller.update);
module.exports = router;
