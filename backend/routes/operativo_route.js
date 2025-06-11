const express = require('express');
const router = express.Router();
const operativoController = require('../controllers/operativo_controllers.js');
// ultimos 7 dias o ppor fecha si le paso un rango qury
router.get('/ultimos7dias', operativoController.getOperativoByUltimos7Dias);
router.get('/por-legajo/:legajo', operativoController.getOperativosPorLegajo);
router.get('/:operativoId/personal/:legajo', operativoController.getPersonalDeOperativoPorLegajo);
router.get('/unidad/:unidadId', operativoController.getOperativosByUnidad);
router.get('/', operativoController.getAll);
router.get('/:id', operativoController.getById);
router.get('/completo/:id', operativoController.getOperativoByIdConCuadrantes);
router.post('/', operativoController.create);
router.put('/:id', operativoController.update);
router.delete('/:id', operativoController.delete);
router.delete('/completo/:id', operativoController.eliminarOperativoCompleto);


module.exports = router;
