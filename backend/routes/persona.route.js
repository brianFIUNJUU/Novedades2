const express = require('express');
const router = express.Router();
const personaCtrl = require('./../controllers/persona.controller');

// Definir las rutas para la gestión de personas
router.get('/', personaCtrl.getPersonas);
router.post('/', personaCtrl.createPersona);
router.get('/:id', personaCtrl.getPersona);
router.put('/:id', personaCtrl.editPersona);
router.delete('/:id', personaCtrl.deletePersona);
// Obtener una persona por DNI
router.get('/dni/:dni', personaCtrl.getPersonaByDni);


module.exports = router;
