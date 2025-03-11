const express = require('express');
const router = express.Router();
const modusOperandiCtrl = require('../controllers/modus_operandi.controllers');

// Rutas para operaciones CRUD
router.get('/', modusOperandiCtrl.getAllModusOperandi);
router.get('/:id', modusOperandiCtrl.getModusOperandiById);
router.post('/', modusOperandiCtrl.createModusOperandi);
router.put('/:id', modusOperandiCtrl.editModusOperandi);
router.delete('/:id', modusOperandiCtrl.deleteModusOperandi);

module.exports = router;