const express = require('express');
const router = express.Router();
const controller = require('../controllers/archivo_novedad.controller');
const uploadNovedades = require('../middleware/uploadNovedades');

// Subir archivo para una novedad
router.post('/:id/archivo', uploadNovedades.single('archivo'), controller.subirArchivo);
// Borrar archivo
router.delete('/novedad/:novedadId', controller.eliminarArchivosByNovedad);
router.delete('/:archivoId', controller.borrarArchivo);
// Listar archivos de una novedad
router.get('/novedad/:novedadId', controller.listarArchivosPorNovedad);

module.exports = router;
