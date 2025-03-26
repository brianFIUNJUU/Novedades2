const Usuario = require('../models/usuario');

const crearUsuario = async (req, res) => {
  try {
    const { uid, id, nombre, email, usuario, perfil, legajo, estado, password } = req.body;

    const usuarioExistente = await Usuario.findOne({ where: { uid } });
    if (usuarioExistente) {
      return res.status(400).json({ message: 'El usuario ya está registrado en PostgreSQL.' });
    }

    const nuevoUsuario = await Usuario.create({ uid, id, nombre, email, usuario, perfil, legajo, estado, password });

    res.status(201).json(nuevoUsuario);
  } catch (error) {
    console.error('Error al registrar usuario:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

module.exports = { crearUsuario };
