const express = require('express');
const router = express.Router();
const unidadRegionalCtrl = require('./../controllers/unidad_regional.controllers'); // Asegúrate de que la ruta sea correcta

// Rutas para el modelo Unidad_regional
router.get('/', unidadRegionalCtrl.getUnidadesRegionales); // Obtener todas las unidades regionales
router.post('/', unidadRegionalCtrl.createUnidadRegional); // Crear una nueva unidad regional
router.get('/:id', unidadRegionalCtrl.getUnidadRegional); // Obtener una unidad regional por ID
router.put('/', unidadRegionalCtrl.editUnidadRegional); // Editar una unidad regional
router.delete('/:id', unidadRegionalCtrl.deleteUnidadRegional); // Eliminar una unidad regional por ID

module.exports = router;
