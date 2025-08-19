const PartesDiarios = require('../models/partesDiarios');
const { Op } = require('sequelize');

// Crear parte diario
exports.crearParteDiario = async (req, res) => {
  try {
    const parte = await PartesDiarios.create(req.body);
    res.status(201).json(parte);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear parte diario.' });
  }
};

// Obtener todos los partes diarios
exports.getAllPartesDiarios = async (req, res) => {
  try {
    const partes = await PartesDiarios.findAll();
    res.json(partes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener partes diarios.' });
  }
};

// Obtener parte diario por ID
exports.getParteDiarioById = async (req, res) => {
  try {
    const { id } = req.params;
    const parte = await PartesDiarios.findByPk(id);
    if (!parte) return res.status(404).json({ error: 'No encontrado.' });
    res.json(parte);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener parte diario.' });
  }
};

// Modificar parte diario
exports.modificarParteDiario = async (req, res) => {
  try {
    const { id } = req.params;
    const parte = await PartesDiarios.findByPk(id);
    if (!parte) return res.status(404).json({ error: 'No encontrado.' });
    await parte.update(req.body);
    res.json(parte);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al modificar parte diario.' });
  }
};

// Eliminar parte diario
exports.eliminarParteDiario = async (req, res) => {
  try {
    const { id } = req.params;
    const parte = await PartesDiarios.findByPk(id);
    if (!parte) return res.status(404).json({ error: 'No encontrado.' });
    await parte.destroy();
    res.json({ mensaje: 'Eliminado correctamente.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar parte diario.' });
  }
};

// Obtener partes diarios por fecha (desde/hasta o últimos 3 meses)
exports.getPartesPorFecha = async (req, res) => {
  try {
    let { desde, hasta } = req.query;
    let where = {};

    if (desde && hasta) {
      where.h_desde = { [Op.gte]: desde };
      where.hora_hasta = { [Op.lte]: hasta };
    } else {
      // Últimos 3 meses
      const fechaLimite = new Date();
      fechaLimite.setMonth(fechaLimite.getMonth() - 3);
      where.h_desde = { [Op.gte]: fechaLimite.toISOString().slice(0, 10) };
    }

    const partes = await PartesDiarios.findAll({ where });
    res.json(partes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener partes diarios por fecha.' });
  }
};
// Obtener partes diarios por dependencia
exports.getPartesDiariosPorDependencia = async (req, res) => {
  try {
    const { dependencia_id } = req.params;
    const partes = await PartesDiarios.findAll({
      where: { dependencia_id }
    });
    res.json(partes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener partes diarios por dependencia.' });
  }
};