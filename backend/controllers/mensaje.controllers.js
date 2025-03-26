const Mensaje = require('../models/mensaje'); 

// Función para obtener todos los mensajes desde la base de datos
const getMensajes = async (req, res) => {
    try {
        const mensajes = await Mensaje.findAll();
        res.json(mensajes);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los mensajes', error });
    }
};

// Función para manejar mensajes en tiempo real con Socket.IO
const configurarSocket = (io) => {
    io.on('connection', (socket) => {
        console.log('🔵 Cliente conectado');

        // Escuchar cuando un cliente envía un mensaje
        socket.on('enviarMensaje', async (data) => {
            try {
                const nuevoMensaje = await Mensaje.create(data);
                
                // Emitir el mensaje a todos los clientes conectados
                io.emit('nuevoMensaje', nuevoMensaje);
                
                console.log('📩 Nuevo mensaje guardado y enviado:', nuevoMensaje);
            } catch (error) {
                console.error('❌ Error al guardar el mensaje:', error);
            }
        });

        // Manejar desconexión del cliente
        socket.on('disconnect', () => {
            console.log('🔴 Cliente desconectado');
        });
    });
};

module.exports = { getMensajes, configurarSocket };