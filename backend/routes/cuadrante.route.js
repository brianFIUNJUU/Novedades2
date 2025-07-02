const express = require('express');
const router = express.Router();
const cuadranteCtrl = require('../controllers/cuadrante.controllers');

// Obtener todos los cuadrantes
router.get('/', cuadranteCtrl.getCuadrantes);

// Crear un nuevo cuadrante
router.post('/', cuadranteCtrl.createCuadrante);

// Obtener un cuadrante por ID
router.get('/:id', cuadranteCtrl.getCuadrante);

// Obtener cuadrantes por unidad regional
router.get('/unidad-regional/:unidadRegionalId', cuadranteCtrl.getCuadrantesByUnidadRegional);

// Editar un cuadrante
router.put('/:id', cuadranteCtrl.editCuadrante);

// Eliminar un cuadrante
router.delete('/:id', cuadranteCtrl.deleteCuadrante);

module.exports = router;