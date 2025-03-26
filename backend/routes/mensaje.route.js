const express = require('express');
const { getMensajes } = require('../controllers/mensaje.controllers');

const router = express.Router();

// Ruta para obtener todos los mensajes almacenados
router.get('/', getMensajes);

module.exports = router;
