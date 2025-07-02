const express = require('express');
const router = express.Router();
const operativoCuadranteController = require('../controllers/operativo_cuadrante.controllers.js');

// Obtener todos los registros
router.get('/', operativoCuadranteController.getAll);

// Agregar un nuevo registro
router.post('/', operativoCuadranteController.add);

// Agregar múltiples registros (bulk)
router.post('/multiple', operativoCuadranteController.createMultiple); // 👈 NUEVA RUTA

router.put('/multiple', operativoCuadranteController.updateMultiple);

// Eliminar un registro por ID
router.delete('/:id', operativoCuadranteController.delete);
// Ejemplo de ruta en routes/operativo_cuadrante.routes.js
router.get('/by-operativo/:operativoId', operativoCuadranteController.getCuadrantesByOperativo);
module.exports = router;
