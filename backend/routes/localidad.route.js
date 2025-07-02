// routes/localidad.routes.js
const express = require('express');
const router = express.Router();
const localidadCtrl = require('./../controllers/localidades.controllers');

// Obtener todas las localidades
router.get('/', localidadCtrl.getLocalidades);

// Obtener localidades por departamento
router.get('/departamento/:departamentoId', localidadCtrl.getLocalidadesByDepartamento);

// Crear una nueva localidad
router.post('/', localidadCtrl.createLocalidad);

// Actualizar una localidad
router.put('/:id', localidadCtrl.updateLocalidad);

// Eliminar una localidad
router.delete('/:id', localidadCtrl.deleteLocalidad);

router.get('/:id', localidadCtrl.getLocalidadById);

module.exports = router;
