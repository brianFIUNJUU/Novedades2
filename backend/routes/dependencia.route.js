const express = require('express');
const router = express.Router();
const dependenciaCtrl = require('./../controllers/dependencia.controller');

// Definir las rutas para la gestión de dependencias
router.get('/', dependenciaCtrl.getDependencias);               // Obtener todas las dependencias
router.post('/', dependenciaCtrl.createDependencia);            // Crear una nueva dependencia
router.get('/:id', dependenciaCtrl.getDependencia);             // Obtener una dependencia por ID
router.put('/:id', dependenciaCtrl.editDependencia);            // Editar una dependencia
router.delete('/:id', dependenciaCtrl.deleteDependencia);       // Eliminar una dependencia
router.get('/unidad-regional/:unidadRegionalId', dependenciaCtrl.getDependenciasByUnidadRegional);

module.exports = router;

// const express = require('express');
// const router = express.Router();
// const dependenciaCtrl = require('./../controllers/dependencia.controller');

// // Definir las rutas para la gestión de dependencias
// router.get('/', dependenciaCtrl.getDependencias);
// router.post('/', dependenciaCtrl.createDependencia);
// router.get('/:id', dependenciaCtrl.getDependencia);
// router.put('/:id', dependenciaCtrl.editDependencia);
// router.delete('/:id', dependenciaCtrl.deleteDependencia);

// module.exports = router;
