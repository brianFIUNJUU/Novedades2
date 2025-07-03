const express = require('express');
const router = express.Router();
const personaCtrl = require('./../controllers/persona.controller');

// Definir las rutas para la gestión de personas
router.get('/sin-novedad', personaCtrl.getPersonasSinNovedad);

router.get('/', personaCtrl.getPersonas);
router.get('/residentes', personaCtrl.getPersonasResidentes);
router.get('/extranjeras', personaCtrl.getPersonasExtranjeras);
router.post('/', personaCtrl.createPersona);
router.get('/:id', personaCtrl.getPersona);
router.put('/:id', personaCtrl.editPersona);
router.delete('/:id', personaCtrl.deletePersona);
// Obtener una persona por DNI
router.get('/dni/:dni', personaCtrl.getPersonaByDni);

module.exports = router;
