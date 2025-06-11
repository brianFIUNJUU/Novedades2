const { Operativo, OperativoCuadrante, Cuadrante, Unidad_regional, Personal , OperativoPersonal} = require('../models');
const { Op } = require('sequelize');

const sequelize = require('../database'); // Asegúrate de que la ruta sea correcta

// GET ALL

exports.getOperativoByIdConCuadrantes = async (req, res) => {
  try {
    const operativo = await Operativo.findByPk(req.params.id, {
      include: [
        {
          model: OperativoCuadrante,
          include: [
            { model: Cuadrante },
            { model: Unidad_regional },
            { model: Personal, as: 'jefeCuadrante' },
            { model: Personal, as: 'jefeSupervisor' }
          ]
        }
      ]
    });

    if (!operativo) {
      return res.status(404).json({ message: 'Operativo no encontrado' });
    }

    res.json(operativo);
  } catch (error) {
    console.error('Error al obtener operativo con cuadrantes:', error);
    res.status(500).json({ message: 'Error al obtener operativo con cuadrantes', error });
  }
};
exports.getAll = async (req, res) => {
    try {
        const operativos = await Operativo.findAll(); // ya no incluye Unidad_regional
        res.json(operativos);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener operativos', error });
    }
};

// GET BY ID
exports.getById = async (req, res) => {
    try {
        const operativo = await Operativo.findByPk(req.params.id); // ya no incluye Unidad_regional
        if (!operativo) return res.status(404).json({ message: 'Operativo no encontrado' });
        res.json(operativo);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el operativo', error });
    }
};

// CREATE
exports.create = async (req, res) => {
    try {
        // Obtener el ID máximo actual
        const maxId = await Operativo.max('id');
        const newId = maxId !== null ? maxId + 1 : 1;

        // Crear el operativo con el nuevo ID
        const nuevoOperativo = await Operativo.create({ ...req.body, id: newId });

        res.status(201).json(nuevoOperativo);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el operativo', error });
    }
};
// UPDATE
exports.update = async (req, res) => {
    try {
        const operativo = await Operativo.findByPk(req.params.id);
        if (!operativo) return res.status(404).json({ message: 'Operativo no encontrado' });

        await operativo.update(req.body);
        res.json(operativo);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el operativo', error });
    }
};

// DELETE
exports.delete = async (req, res) => {
    try {
        const operativo = await Operativo.findByPk(req.params.id);
        if (!operativo) return res.status(404).json({ message: 'Operativo no encontrado' });

        await operativo.destroy();
        res.json({ message: 'Operativo eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el operativo', error });
    }
};
exports.eliminarOperativoCompleto = async (req, res) => {
    const { id } = req.params;

    const t = await sequelize.transaction(); // iniciamos transacción

    try {
        // 1. Verificar si el operativo existe
        const operativo = await Operativo.findByPk(id, { transaction: t });
        if (!operativo) {
            await t.rollback();
            return res.status(404).json({ message: 'Operativo no encontrado' });
        }

        // 2. Buscar los OperativoCuadrante relacionados
        const vinculacionesCuadrantes = await OperativoCuadrante.findAll({
            where: { operativo_id: id },
            transaction: t
        });

        const idsCuadrantes = vinculacionesCuadrantes.map(v => v.id);

        // 3. Eliminar OperativoPersonal relacionados a esos cuadrantes
        if (idsCuadrantes.length > 0) {
            await OperativoPersonal.destroy({
                where: {
                    operativo_cuadrante_id: idsCuadrantes
                },
                transaction: t
            });
        }

        // 4. Eliminar los OperativoCuadrante
        await OperativoCuadrante.destroy({
            where: { operativo_id: id },
            transaction: t
        });

        // 5. Eliminar el Operativo
        await operativo.destroy({ transaction: t });

        await t.commit();

        res.json({ message: 'Operativo y registros relacionados eliminados correctamente' });
    } catch (error) {
        await t.rollback();
        console.error('Error al eliminar operativo completo:', error);
        res.status(500).json({ message: 'Error al eliminar operativo completo', error });
    }
    
};

// GET /api/operativos/unidad/:unidadId?fechaInicio=YYYY-MM-DD&fechaFin=YYYY-MM-DD

exports.getOperativosByUnidad = async (req, res) => {
    const unidadId = Number(req.params.unidadId);
    const { fechaInicio, fechaFin } = req.query;
    const where = [
        sequelize.where(
            sequelize.cast(sequelize.col('unidades_regionales'), 'jsonb'),
            '@>',
            JSON.stringify([unidadId])
        )
    ];

    // Si se pasan fechas, agregamos la condición de rango
    if (fechaInicio && fechaFin) {
        where.push({
            [Op.or]: [
                {
                    fecha_desde: {
                        [Op.between]: [fechaInicio, fechaFin]
                    }
                },
                {
                    fecha_hasta: {
                        [Op.between]: [fechaInicio, fechaFin]
                    }
                }
            ]
        });
    }

    try {
        const operativos = await Operativo.findAll({
            where: { [Op.and]: where }
        });
        res.json(operativos);
    } catch (error) {
        console.error('Error al obtener operativos por unidad:', error);
        res.status(500).json({ message: 'Error al obtener operativos por unidad', error });
    }
};
exports.getOperativoByUltimos7Dias = async (req, res) => {
    const { fechaInicio, fechaFin } = req.query;
    let where = {};

    if (fechaInicio && fechaFin) {
        where = {
            [Op.or]: [
                {
                    fecha_desde: {
                        [Op.between]: [fechaInicio, fechaFin]
                    }
                },
                {
                    fecha_hasta: {
                        [Op.between]: [fechaInicio, fechaFin]
                    }
                },
                // Operativos que empiezan antes y terminan después del rango (están activos en el rango)
                {
                    fecha_desde: { [Op.lte]: fechaInicio },
                    fecha_hasta: { [Op.gte]: fechaFin }
                }
            ]
        };
    } else {
        // Últimos 7 días
        const today = new Date();
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(today.getDate() - 7);

        const fechaInicio7 = sevenDaysAgo.toISOString().slice(0, 10);
        const fechaFin7 = today.toISOString().slice(0, 10);

        where = {
            [Op.or]: [
                {
                    fecha_desde: {
                        [Op.between]: [fechaInicio7, fechaFin7]
                    }
                },
                {
                    fecha_hasta: {
                        [Op.between]: [fechaInicio7, fechaFin7]
                    }
                },
                {
                    fecha_desde: { [Op.lte]: fechaInicio7 },
                    fecha_hasta: { [Op.gte]: fechaFin7 }
                }
            ]
        };
    }

    try {
        const operativos = await Operativo.findAll({ where });
        res.json(operativos);
    } catch (error) {
        console.error('Error al obtener operativos por últimos 7 días:', error);
        res.status(500).json({ message: 'Error al obtener operativos por últimos 7 días', error });
    }
};
// GET /api/operativos/por-legajo/:legajo
exports.getOperativosPorLegajo = async (req, res) => {
    const { legajo } = req.params;
    try {
        // 1. Buscar todos los operativo_personal con ese legajo
        const relaciones = await OperativoPersonal.findAll({
            where: { personal_legajo: legajo },
            attributes: ['operativo_id'],
            group: ['operativo_id']
        });

        // 2. Extraer los IDs únicos
        const operativoIds = relaciones.map(r => r.operativo_id);

        if (operativoIds.length === 0) {
            return res.json([]); // No hay operativos para ese legajo
        }

        // 3. Buscar los operativos correspondientes
        const operativos = await Operativo.findAll({
            where: { id: operativoIds }
        });

        res.json(operativos);
    } catch (error) {
        console.error('Error al obtener operativos por legajo:', error);
        res.status(500).json({ message: 'Error al obtener operativos por legajo', error });
    }
};
// GET /api/operativos/:operativoId/personal/:legajo
// GET /api/op// GET /api/op// GET /api/operativos/:operativoId/personal/:legajo
exports.getPersonalDeOperativoPorLegajo = async (req, res) => {
  const { operativoId, legajo } = req.params;
  try {
    const personal = await OperativoPersonal.findOne({
      where: {
        operativo_id: operativoId,
        personal_legajo: legajo
      },
      include: [
        { model: Personal }, // Asegúrate de importar el modelo Personal
        { model: OperativoCuadrante } // Si necesitas el cuadrante
      ]
    });

    if (!personal) {
      return res.status(404).json({ message: 'No se encontró personal para ese operativo y legajo' });
    }

    res.json(personal);
  } catch (error) {
    console.error('Error al obtener personal por operativo y legajo:', error);
    res.status(500).json({ message: 'Error al obtener personal por operativo y legajo', error });
  }
};