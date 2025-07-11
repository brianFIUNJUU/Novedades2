const PartesDiariosNovedad = require('../models/partesDiarios_Novedad');
const { NovedadPersona, Persona } = require('../models');
const NovedadElemento= require('../models/novedad_elemento'); // <-- AGREGA ESTA LÍNEA
// Agregar múltiples relaciones
exports.addMultiple = async (req, res) => {
  try {
    const relaciones = req.body; // [{ parte_diario_id, novedad_id }, ...]
    if (!Array.isArray(relaciones) || relaciones.length === 0) {
      return res.status(400).json({ error: 'Debe enviar un array de relaciones' });
    }
    const result = await PartesDiariosNovedad.bulkCreate(relaciones, { ignoreDuplicates: true });
    res.json({ message: 'Relaciones agregadas correctamente', result });
  } catch (error) {
    res.status(500).json({ error: 'Error al agregar relaciones', details: error.message });
  }
};

// Modificar múltiples relaciones (elimina todas las actuales y agrega las nuevas para un parte_diario_id)
exports.updateMultiple = async (req, res) => {
  try {
    const { parte_diario_id, novedades } = req.body;
    // novedades: [novedad_id, ...]
    if (!parte_diario_id || !Array.isArray(novedades)) {
      return res.status(400).json({ error: 'Debe enviar parte_diario_id y un array de novedades' });
    }
    // Elimina todas las relaciones actuales para ese parte_diario_id
    await PartesDiariosNovedad.destroy({ where: { parte_diario_id } });
    // Agrega las nuevas
    const nuevasRelaciones = novedades.map(novedad_id => ({ parte_diario_id, novedad_id }));
    await PartesDiariosNovedad.bulkCreate(nuevasRelaciones);
    res.json({ message: 'Relaciones actualizadas correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al modificar relaciones', details: error.message });
  }
};

// Eliminar múltiples relaciones (por array de objetos)
exports.deleteMultiple = async (req, res) => {
  try {
    const relaciones = req.body; // [{ parte_diario_id, novedad_id }, ...]
    if (!Array.isArray(relaciones) || relaciones.length === 0) {
      return res.status(400).json({ error: 'Debe enviar un array de relaciones' });
    }
    for (const rel of relaciones) {
      await PartesDiariosNovedad.destroy({
        where: {
          parte_diario_id: rel.parte_diario_id,
          novedad_id: rel.novedad_id
        }
      });
    }
    res.json({ message: 'Relaciones eliminadas correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar relaciones', details: error.message });
  }
};
// backend/controllers/partes_diarios.controllers.js

exports.getPersonasDemoradasPorNovedades = async (req, res) => {
    try {
        // Recibe un array de IDs de novedades por body
        const { novedadesIds } = req.body;
        if (!Array.isArray(novedadesIds) || novedadesIds.length === 0) {
            return res.status(400).json({ error: 'Debe enviar un array de IDs de novedades' });
        }

        // Buscar personas demoradas en esas novedades
        const demorados = await NovedadPersona.findAll({
            where: {
                novedad_id: novedadesIds,
                demorado: true
            },
            include: [{
                model: Persona,
                as: 'persona'
            }]
        });

        // Separar mayores y menores
        const mayores = demorados.filter(d => {
            const edad = parseInt((d.persona.edad || '0').toString().split(' ')[0]);
            return edad >= 18;
        });
        const menores = demorados.filter(d => {
            const edad = parseInt((d.persona.edad || '0').toString().split(' ')[0]);
            return edad < 18;
        });

        res.json({
            mayores: mayores.length,
            menores: menores.length
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener demorados por novedades' });
    }
};

// backend/controllers/partesDiarios_Novedad.controller.js

exports.contarElementosSecuestradosVehiculosPorNovedades = async (req, res) => {
    try {
        const { novedadesIds } = req.body;
        // IDs de elementos que son vehículos
        const idsVehiculos = [779, 781, 782];
        if (!Array.isArray(novedadesIds) || novedadesIds.length === 0) {
            return res.status(400).json({ error: 'Debe enviar un array de IDs de novedades' });
        }

        // Buscar elementos secuestrados de tipo vehículo
        const totalVehiculos = await NovedadElemento.count({
            where: {
                novedad_id: novedadesIds,
                elemento_id: idsVehiculos
            }
        });

        res.json({ totalVehiculos });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al contar vehículos secuestrados' });
    }
};

// backend/controllers/partesDiarios_Novedad.controller.js

exports.contarElementosSecuestradosMotosPorNovedades = async (req, res) => {
    try {
        const { novedadesIds } = req.body;
        // IDs de elementos que son motos
        const idsMotos = [788, 786, 784];
        if (!Array.isArray(novedadesIds) || novedadesIds.length === 0) {
            return res.status(400).json({ error: 'Debe enviar un array de IDs de novedades' });
        }

        // Buscar elementos secuestrados de tipo moto
        const totalMotos = await NovedadElemento.count({
            where: {
                novedad_id: novedadesIds,
                elemento_id: idsMotos
            }
        });

        res.json({ totalMotos });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al contar motos secuestradas' });
    }
};