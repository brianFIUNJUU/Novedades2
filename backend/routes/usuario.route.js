const express = require('express');
const router = express.Router();
const { crearUsuario } = require('../controllers/usuario.controllers'); 

console.log("Probando controlador:", crearUsuario); // 🔍 ¿Qué imprime esto?

router.post('/crear', crearUsuario);

module.exports = router;
