const express = require('express');
const router = express.Router();
const controller = require('../controllers/novedad_elemento.controller');


router.get('/estado/:estado', controller.getAllElementosByEstado);

router.get('/tipo/:tipo', controller.getAllElementosByTipo);


router.get('/por-fecha', controller.getElementosByFecha);
// Obtener todos los elementos de una novedad
router.get('/novedad/:novedad_id', controller.getElementosByNovedad);

router.get('/todos', controller.getAllElementos);

router.post('/novedad/:novedad_id/elemento/:elemento_id', controller.agregarElementoANovedad);

// Agregar múltiples elementos a una novedad
router.post('/multiples', controller.agregarElementosMultiplesANovedad);

// Modificar un elemento de una novedad
router.put('/:id', controller.modificarElemento);

// Borrar un elemento de una novedad
router.delete('/:id', controller.borrarElemento);

// Borrar todos los elementos de una novedad
router.delete('/novedad/:novedad_id', controller.borrarElementosByNovedad);

// Modificar múltiples elementos de una novedad
router.put('/multiples', controller.modificarElementosMultiples);

module.exports = router;