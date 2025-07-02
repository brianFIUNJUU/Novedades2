const OperativoCuadrante = require('../models/operativo_cuadrante');
const Operativo = require('../models/operativo.js');
const Cuadrante = require('../models/cuadrante.js');
const Unidad_regional = require('../models/unidad_regional.js');
const Personal = require('../models/personal.js'); // Asegúrate de que este modelo esté definido correctamente
const OperativoPersonal = require('../models/operativo_personal.js');
// bien ahora me falta Obtener todos los registros para modificacion, es decir darle funcion a editar , ya lo de operativo esta funcionando me faltaria la relacion con sus cuadrantes
exports.getAll = async (req, res) => {
    try {
        const datos = await OperativoCuadrante.findAll({
            include: [
                Operativo,
                Cuadrante,
                Unidad_regional,
                { model: Personal, as: 'jefeCuadrante' },
                { model: Personal, as: 'jefeSupervisor' }
              ]
              
        });
        res.json(datos);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los datos' });
    }
};

// Agregar un nuevo registro
exports.add = async (req, res) => {
    try {
        const nuevo = await OperativoCuadrante.create(req.body);
        res.status(201).json(nuevo);
    } catch (error) {
        res.status(500).json({ error: 'Error al agregar el registro' });
    }
};
// revisa que este completo el modelo operativo_cuadrante.js y que los campos que se envían en el body son correctos segun el modelo
// Eliminar un registro por ID
exports.delete = async (req, res) => {
  const { id } = req.params;
  try {
    // Elimina primero el personal asociado a este cuadrante
    await OperativoPersonal.destroy({ where: { operativo_cuadrante_id: id } });
    // Luego elimina el cuadrante
    await OperativoCuadrante.destroy({ where: { id } });
    res.json({ message: 'Cuadrante y personal asociado eliminados' });
  } catch (error) {
    console.error('Error al eliminar cuadrante:', error);
    res.status(500).json({ error: 'No se pudo eliminar el cuadrante' });
  }
};
// entonces con este controller de createmultiple podran guardarse todos los cuadrantes y datos relacionado de la tabla a la vez que guarda operativo osea con el mismo boton para, quizas en el metodo priumero se llama a createoperativo y luego a createMultiple no? de los datos que quiero relacionar verdad?
exports.createMultiple = async (req, res) => {
    console.log('Entró a createMultiple', req.body);

    try {
      // Verifica que req.body sea un arreglo
      if (!Array.isArray(req.body) || req.body.length === 0) {
        return res.status(400).json({ error: 'Se requiere un arreglo de vinculaciones' });
      }
  
      // Crea múltiples registros con bulkCreate
      const nuevasVinculaciones = await OperativoCuadrante.bulkCreate(req.body, {
        validate: true // Opcional: valida cada entrada según el modelo
      });
  
      res.status(201).json({
        message: 'Vinculaciones creadas correctamente',
        data: nuevasVinculaciones
      });
    } catch (error) {
      console.error('Error al crear vinculaciones:', error);
      res.status(500).json({ error: 'Error al guardar vínculos', detalles: error.message });
    }
  };
// 🔄 Actualizar múltiples registros existentes y agregar los nuevos que se deseeen agregar a la relacion operativos
exports.updateMultiple = async (req, res) => {
  try {
    const registros = req.body;

    if (!Array.isArray(registros) || registros.length === 0) {
      return res.status(400).json({ error: 'Se requiere un arreglo de datos a procesar' });
    }

    const resultados = await Promise.all(
      registros.map(async (item) => {
        if (item.id) {
          // Si tiene ID, intenta actualizar
          const [updatedCount] = await OperativoCuadrante.update(
            {
              jefe_cuadrante_id: item.jefe_cuadrante_id,
              jefe_supervisor_id: item.jefe_supervisor_id,
              unidad_regional_id: item.unidad_regional_id,
              unidad_regional_nombre: item.unidad_regional_nombre,
              cuadrante_id: item.cuadrante_id,
              cuadrante_nombre: item.cuadrante_nombre,
              operativo_id: item.operativo_id,
              cant_total_personal: item.cant_total_personal,
              cant_manos_libres: item.cant_manos_libres,
              cant_upcar: item.cant_upcar,
              cant_contravencional: item.cant_contravencional,
              cant_dinamicos: item.cant_dinamicos,
              cant_moviles: item.cant_moviles
            },
            {
              where: { id: item.id }
            }
          );

          if (updatedCount === 0) {
            // Si no encontró nada para actualizar, lo crea
            const nuevo = await OperativoCuadrante.create(item);
            return { accion: 'creado', registro: nuevo };
          }
          return { accion: 'actualizado', id: item.id };
        } else {
          // Si no tiene ID, crea el registro nuevo
          const nuevo = await OperativoCuadrante.create(item);
          return { accion: 'creado', registro: nuevo };
        }
      })
    );

    res.status(200).json({ message: 'Registros procesados correctamente', resultados });
  } catch (error) {
    console.error('Error al procesar registros:', error);
    res.status(500).json({ message: 'Error en procesamiento de registros', error });
  }
};
exports.getCuadrantesByOperativo = async (req, res) => {
  const { operativoId } = req.params;
  try {
    const cuadrantes = await OperativoCuadrante.findAll({
      where: { operativo_id: operativoId },
      include: [
        Cuadrante,
        Unidad_regional,
        { model: Personal, as: 'jefeCuadrante' },
        { model: Personal, as: 'jefeSupervisor' }
      ]
    });
    res.status(200).json(cuadrantes);
  } catch (error) {
    console.error('Error al obtener cuadrantes por operativo:', error);
    res.status(500).json({ error: 'Error al obtener los cuadrantes del operativo' });
  }
};