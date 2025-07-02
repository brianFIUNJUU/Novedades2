const express = require('express');
const router = express.Router();
const departamentoController = require('./../controllers/departamento.controllers');

// Rutas para el modelo Departamento
router.get('/', departamentoController.getDepartamentos); // Obtener todos los departamentos
router.post('/', departamentoController.createDepartamento); // Crear un nuevo departamento
router.get('/:id', departamentoController.getDepartamentoById); // Obtener un departamento por ID
router.put('/:id', departamentoController.updateDepartamento); // Actualizar un departamento por ID
router.delete('/:id', departamentoController.deleteDepartamento); // Eliminar un departamento por ID

module.exports = router;
