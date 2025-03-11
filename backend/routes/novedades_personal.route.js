const express = require('express');
const router = express.Router();
const novedadPersonalController = require('../controllers/novedad_personal.controllers');

router.get('/novedad-personal/:novedad_id', novedadPersonalController.getPersonalesByNovedadId);
router.post('/add', novedadPersonalController.addPersonalToNovedad);
router.delete('/novedad-personal/:novedad_id/:personal_id', novedadPersonalController.removePersonalFromNovedad);
module.exports = router;
