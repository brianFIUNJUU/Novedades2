const { Operativo, OperativoCuadrante, Cuadrante, Unidad_regional, Personal , OperativoPersonal} = require('../models');

// Obtener todos los registros
// Obtener todos los registros
exports.getAll = async (req, res) => {
    try {
        const datos = await OperativoPersonal.findAll({
            include: [Operativo, Personal, OperativoCuadrante] // 👈 aquí incluyes también el modelo cuadrante
        });
        res.json(datos);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los datos' });
    }
};


// Agregar un nuevo registro
exports.add = async (req, res) => {
    try {
        const nuevo = await OperativoPersonal.create(req.body);
        res.status(201).json(nuevo);
    } catch (error) {
        console.error('Error al agregar el registro:', error); // Para ver el error completo en consola
        res.status(500).json({ error: error.message || 'Error al agregar el registro' });
    }
};


// Eliminar un registro por ID
exports.delete = async (req, res) => {
    const { id } = req.params;
    try {
        const eliminado = await OperativoPersonal.destroy({ where: { id } });
        if (eliminado) {
            res.json({ mensaje: 'Registro eliminado correctamente' });
        } else {
            res.status(404).json({ mensaje: 'Registro no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el registro' });
    }
};
// Obtener todos los operativo_personal por cuadrante_id
exports.getByCuadrante = async (req, res) => {
    const { cuadranteId } = req.params;
    try {
        const datos = await OperativoPersonal.findAll({
            include: [
                {
                    model: OperativoCuadrante,
                    where: { cuadrante_id: cuadranteId },
                },
                Operativo,
                Personal
            ]
        });
        res.json(datos);
    } catch (error) {
        console.error('Error al obtener por cuadrante:', error);
        res.status(500).json({ error: 'Error al obtener los datos por cuadrante' });
    }
};
exports.getByCuadranteYOperativo = async (req, res) => {
    const { cuadranteId, operativoId } = req.params;
    try {
        const datos = await OperativoPersonal.findAll({
            include: [
                {
                    model: OperativoCuadrante,
                    where: { cuadrante_id: cuadranteId }
                },
                {
                    model: Operativo,
                    where: { id: operativoId }
                },
                Personal
            ]
        });
        res.json(datos);
    } catch (error) {
        console.error('Error al obtener por cuadrante y operativo:', error);
        res.status(500).json({ error: 'Error al obtener los datos por cuadrante y operativo' });
    }
};
// Obtener todo el personal de un operativo (con cuadrante, grupo, etc)
exports.getByOperativo = async (req, res) => {
  const { operativoId } = req.params;
  try {
    const datos = await OperativoPersonal.findAll({
      where: { operativo_id: operativoId },
      include: [
        { model: Personal },
        { model: Operativo },
        { model: OperativoCuadrante }
      ]
    });
    res.status(200).json(datos);
  } catch (error) {
    console.error('Error al obtener personal por operativo:', error);
    res.status(500).json({ error: 'Error al obtener personal por operativo' });
  }
};
// Obtener todos los registros (ya tienes)

// Obtener por grupo
exports.getByGrupo = async (req, res) => {
  const { grupo } = req.params;
  try {
    const datos = await OperativoPersonal.findAll({
      where: { grupo },
      include: [Operativo, Personal, OperativoCuadrante]
    });
    res.json(datos);
  } catch (error) {
    console.error('Error al obtener por grupo:', error);
    res.status(500).json({ error: 'Error al obtener los datos por grupo' });
  }
};

// Además, los métodos que ya tienes (getByCuadrante, getByCuadranteYOperativo, etc.)

exports.getByGrupoByCuadranteByOperativo = async (req, res) => {
  const { operativoId, cuadranteId, grupo } = req.params;
  try {
    const registros = await OperativoPersonal.findAll({
      where: {
        operativo_id: operativoId,
        operativo_cuadrante_id: cuadranteId,
        grupo: grupo
      },
      include: [
        { model: Personal },
        { model: Operativo },
        { model: OperativoCuadrante }
      ]
    });
    res.status(200).json(registros);
  } catch (error) {
    console.error('Error al obtener registros:', error);
    res.status(500).json({ error: 'Error al obtener registros' });
  }
};
// Actualizar un registro individual de OperativoPersonal
exports.update = async (req, res) => {
  const { id } = req.params;
  try {
    const [updatedCount] = await OperativoPersonal.update(req.body, {
      where: { id }
    });
    if (updatedCount === 0) {
      return res.status(404).json({ mensaje: 'Registro no encontrado' });
    }
    // Devuelve el registro actualizado
    const actualizado = await OperativoPersonal.findByPk(id, {
      include: [Operativo, Personal, OperativoCuadrante]
    });
    res.json(actualizado);
  } catch (error) {
    console.error('Error al actualizar el registro:', error);
    res.status(500).json({ error: 'Error al actualizar el registro' });
  }
};