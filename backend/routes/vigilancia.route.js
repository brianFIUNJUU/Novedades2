const express = require('express');
const router = express.Router();
const vigilanciaCtrl = require('../controllers/vigilancia.controller');
const upload = require('../middleware/upload'); // Asegúrate de que la ruta sea correcta

// Definir rutas para el CRUD de Vigilancia
router.get('/', vigilanciaCtrl.getVigilancias); // Obtener todas las vigilancias
router.post('/', upload.fields([{ name: 'oficio', maxCount: 1 }, { name: 'foto_persona', maxCount: 1 }]), vigilanciaCtrl.createVigilancia); // Crear una nueva vigilancia con archivos
router.get('/:id', vigilanciaCtrl.getVigilancia); // Obtener una vigilancia por ID
router.put('/:id', upload.fields([{ name: 'oficio', maxCount: 1 }, { name: 'foto_persona', maxCount: 1 }]), vigilanciaCtrl.editVigilancia); // Editar una vigilancia por ID con archivos
router.delete('/:id', vigilanciaCtrl.deleteVigilancia); // Eliminar una vigilancia por ID
router.get('/unidad/:unidad_solicitante', vigilanciaCtrl.getVigilanciaByUnidad); // Obtener vigilancia por unidad solicitante

// Ruta para obtener la URL de un archivo
router.get('/file/:fileName', vigilanciaCtrl.getFileUrl);
module.exports = router;