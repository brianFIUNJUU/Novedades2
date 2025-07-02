const Mensaje = require('../models/mensaje'); // Modelo Mensaje
const Usuario = require('../models/usuario'); // Modelo Usuario

const { Op } = require("sequelize"); // Importar Op

const getMensajes = async (req, res) => {
    const { remitenteUid, destinatarioUid } = req.query;

    if (!remitenteUid || !destinatarioUid) {
        return res.status(400).json({ message: 'Faltan parámetros de entrada' });
    }

    try {
        const mensajes = await Mensaje.findAll({
            where: {
                [Op.or]: [
                    { [Op.and]: [{ remitenteUid }, { destinatarioUid }] },
                    { [Op.and]: [{ remitenteUid: destinatarioUid }, { destinatarioUid: remitenteUid }] }
                ]
            },
            order: [['fecha', 'ASC']], // Ordenar por fecha ascendente
            include: [
                { model: Usuario, as: 'remitente', attributes: ['uid', 'nombre'] },
                { model: Usuario, as: 'destinatario', attributes: ['uid', 'nombre'] }
            ]
        });

        console.log('Mensajes obtenidos:', mensajes.map(m => m.toJSON())); // Log para verificar

        res.json(mensajes);
    } catch (error) {
        console.error('Error al obtener los mensajes:', error);
        res.status(500).json({ message: 'Error al obtener los mensajes', error: error.message });
    }
};


const getDestinatariosByRemitente = async (req, res) => {
    const remitenteUid = req.params.remitente;


    if (!remitenteUid) {
        return res.status(400).json({ message: 'Falta el UID del remitente' });
    }

    try {
        // Buscar todos los mensajes donde el usuario participó
        const mensajes = await Mensaje.findAll({
            where: {
                [Op.or]: [
                    { remitenteUid: remitenteUid },
                    { destinatarioUid: remitenteUid }
                ]
            },
            attributes: ['remitenteUid', 'destinatarioUid'],
            raw: true
        });

        // Extraer los UIDs con los que ha conversado
        const uids = new Set();

        mensajes.forEach(mensaje => {
            if (mensaje.remitenteUid !== remitenteUid) {
                uids.add(mensaje.remitenteUid);
            }
            if (mensaje.destinatarioUid !== remitenteUid) {
                uids.add(mensaje.destinatarioUid);
            }
        });

        const destinatariosUid = Array.from(uids);

        if (destinatariosUid.length === 0) {
            return res.status(404).json({ message: 'No se encontraron destinatarios para este remitente.' });
        }

        res.json(destinatariosUid);
    } catch (error) {
        console.error('Error al obtener destinatarios:', error);
        res.status(500).json({ message: 'Error al obtener los destinatarios', error: error.message });
    }
};








// Función para crear un nuevo mensaje
const crearMensaje = async (req, res) => {
    try {
        // Asegúrate de que los datos estén presentes en el cuerpo de la solicitud
        const { remitenteUid, destinatarioUid, mensaje, fecha } = req.body;

        // Verificar que remitenteUid y destinatarioUid existan
        if (!remitenteUid || !destinatarioUid) {
            return res.status(400).json({ message: "Faltan datos del remitente o destinatario" });
        }

        // Crear el mensaje en la base de datos
        const nuevoMensaje = await Mensaje.create({
            remitenteUid,   // UID del remitente
            destinatarioUid, // UID del destinatario
            mensaje,         // El mensaje que se envía
            
            fecha            // La fecha
        });

        res.status(201).json({ message: "Mensaje enviado", mensaje: nuevoMensaje });

    } catch (error) {
        console.error("Error al crear el mensaje:", error);
        res.status(500).json({ message: "Error al enviar el mensaje", error });
    }
};


// Función para actualizar un mensaje
const actualizarMensaje = async (req, res, io) => {
    try {
        const { id } = req.params;
        const { mensaje } = req.body;

        // Buscar el mensaje
        const mensajeEncontrado = await Mensaje.findByPk(id);

        if (!mensajeEncontrado) {
            return res.status(404).json({ message: 'Mensaje no encontrado' });
        }

        // Actualizar el mensaje
        mensajeEncontrado.mensaje = mensaje;
        await mensajeEncontrado.save();

        // Emitir el mensaje actualizado a todos los clientes conectados
        io.emit('mensajeActualizado', mensajeEncontrado);

        res.json(mensajeEncontrado);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el mensaje', error });
    }
};

// Función para eliminar un mensaje
const eliminarMensaje = async (req, res, io) => {
    try {
        const { id } = req.params;

        // Buscar el mensaje
        const mensajeEncontrado = await Mensaje.findByPk(id);

        if (!mensajeEncontrado) {
            return res.status(404).json({ message: 'Mensaje no encontrado' });
        }

        // Eliminar el mensaje
        await mensajeEncontrado.destroy();

        // Emitir la eliminación a todos los clientes conectados
        io.emit('mensajeEliminado', id);

        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el mensaje', error });
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

        // Escuchar cuando un cliente actualiza un mensaje
        socket.on('actualizarMensaje', async (data) => {
            try {
                const { id, mensaje } = data;

                const mensajeEncontrado = await Mensaje.findByPk(id);
                if (!mensajeEncontrado) {
                    return socket.emit('error', 'Mensaje no encontrado');
                }

                // Actualizar el mensaje
                mensajeEncontrado.mensaje = mensaje;
                await mensajeEncontrado.save();

                // Emitir el mensaje actualizado a todos los clientes
                io.emit('mensajeActualizado', mensajeEncontrado);
                console.log('📩 Mensaje actualizado:', mensajeEncontrado);
            } catch (error) {
                console.error('❌ Error al actualizar el mensaje:', error);
            }
        });

        // Escuchar cuando un cliente elimina un mensaje
        socket.on('eliminarMensaje', async (id) => {
            try {
                const mensajeEncontrado = await Mensaje.findByPk(id);
                if (!mensajeEncontrado) {
                    return socket.emit('error', 'Mensaje no encontrado');
                }

                // Eliminar el mensaje
                await mensajeEncontrado.destroy();

                // Emitir la eliminación a todos los clientes
                io.emit('mensajeEliminado', id);
                console.log('📩 Mensaje eliminado:', id);
            } catch (error) {
                console.error('❌ Error al eliminar el mensaje:', error);
            }
        });

        // Manejar desconexión del cliente
        socket.on('disconnect', () => {
            console.log('🔴 Cliente desconectado');
        });
    });
};

module.exports = {
    getMensajes,
    crearMensaje,
    actualizarMensaje,
    eliminarMensaje,
    configurarSocket,
    getDestinatariosByRemitente
};
