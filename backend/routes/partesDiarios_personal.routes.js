const express = require('express');
const router = express.Router();
const controller = require('../controllers/partesDiarios_personal.controller');

// Crear (agregar personal a parte diario)
router.post('/', controller.addPersonalToParteDiario);

router.post('/multiple', controller.addMultiplePersonalToParteDiario);
// Obtener todos los personales de un parte diario
router.get('/:parte_diario_id', controller.getPersonalesByParteDiarioId);

// Obtener un registro específico por id
router.get('/registro/:id', controller.getPersonalParteDiarioById);

// Modificar un registro de personal en un parte diario
router.put('/registro/:id', controller.updatePersonalParteDiario);

// Eliminar un personal de un parte diario
router.delete('/:parte_diario_id/:personal_id', controller.removePersonalFromParteDiario);

// Eliminar todos los personales de un parte diario
router.delete('/all/:parte_diario_id', controller.removeAllPersonalFromParteDiario);

module.exports = router;