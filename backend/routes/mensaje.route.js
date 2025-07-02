const express = require('express');
const { getMensajes, crearMensaje, actualizarMensaje, eliminarMensaje, getDestinatariosByRemitente } = require('../controllers/mensaje.controllers');

const router = express.Router();

// Ruta para obtener todos los mensajes almacenados
router.get('/', getMensajes);

// Ruta para crear un nuevo mensaje
router.post('/', (req, res) => {
    crearMensaje(req, res, req.io); // Pasamos el objeto `io` a la función de crear mensaje
});

// Ruta para actualizar un mensaje
router.put('/:id', (req, res) => {
    actualizarMensaje(req, res, req.io); // Pasamos el objeto `io` a la función de actualizar mensaje
});
// Verificar si la ruta está correctamente configurada
router.get('/destinatarios/:remitente', getDestinatariosByRemitente);// Ruta para eliminar un mensa

router.delete('/:id', (req, res) => {
    eliminarMensaje(req, res, req.io); // Pasamos el objeto `io` a la función de eliminar mensaje
});

module.exports = router;
