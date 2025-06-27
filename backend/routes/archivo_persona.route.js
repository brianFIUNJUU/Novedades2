const express = require('express');
const router = express.Router();
const controller = require('../controllers/archivo_persona.controller.js');
const upload = require('../middleware/upload');

// Subir archivo para una persona
router.post('/:id/archivo', upload.single('archivo'), controller.subirArchivo);
// Borrar archivo por ID
router.delete('/:archivoId', controller.borrarArchivo);
// Listar archivos de una persona
router.get('/persona/:personaId', controller.listarArchivosPorPersona);
module.exports = router;
