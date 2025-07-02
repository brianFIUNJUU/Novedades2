const express = require('express');
const router = express.Router();
const personalCtrl = require('./../controllers/personal.controller');

// Definir las rutas para la gestión de personal
router.get('/', personalCtrl.getPersonales); // Obtener todos los personales
router.post('/', personalCtrl.createPersonal); // Crear un nuevo personal
router.get('/:id', personalCtrl.getPersonal); // Obtener un personal por ID
router.put('/:id', personalCtrl.editPersonal); // Editar un personal por ID
router.delete('/:id', personalCtrl.deletePersonal); // Eliminar un personal por ID
// Buscar personal por legajo
router.get('/search/legajo/:legajo', personalCtrl.getPersonalByLegajo);


module.exports = router;
