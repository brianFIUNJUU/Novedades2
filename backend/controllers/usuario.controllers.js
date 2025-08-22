const Usuario = require('../models/usuario');
const admin = require('firebase-admin');


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


// Sincroniza todos los usuarios de Firestore a PostgreSQL por legajo
const sincronizarUsuariosDesdeFirestore = async (req, res) => {
  try {
    const snapshot = await admin.firestore().collection('usuarios').get();
    let actualizados = 0;
    let creados = 0;

    for (const doc of snapshot.docs) {
      const data = doc.data();
      const legajo = data.legajo;
      const uid = data.uid || doc.id;
      const id = data.id || null;
      const nombre = data.nombre || '';
      const email = data.email || '';
      const perfil = data.perfil || '';
      const usuario = data.usuario || '';
      const password = data.password || '';
      const estado = data.estado !== undefined ? data.estado : true;

      if (!legajo) continue; // Si no hay legajo, ignora

      // Busca el usuario en PostgreSQL por legajo
      let usuarioPg = await Usuario.findOne({ where: { legajo } });
      if (usuarioPg) {
        await usuarioPg.update({ uid, id });
        actualizados++;
      } else {
        await Usuario.create({
          uid,
          id,
          nombre,
          email,
          legajo,
          perfil,
          usuario,
          password,
          estado
        });
        creados++;
      }
    }

    res.json({
      msg: `Sincronización finalizada. Usuarios actualizados: ${actualizados}. Usuarios creados: ${creados}.`
    });
  } catch (error) {
    console.error('Error sincronizando usuarios:', error);
    res.status(500).json({ msg: 'Error al sincronizar usuarios', error });
  }
};



module.exports = {
  crearUsuario,
  sincronizarUsuariosDesdeFirestore
};