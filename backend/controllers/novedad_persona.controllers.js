const { sequelize, Persona, NovedadPersona } = require('../models');
const Novedades = require('../models/novedades');

// Agregar una persona a una novedad
// backend/controllers/novedad_persona.controllers.js
// backend/controllers/novedad_persona.controllers.js
exports.addPersonaToNovedad = async (req, res) => {
    try {
        const { novedad_id, persona_id, estado, demorado } = req.body;
        if (!novedad_id || !persona_id) {
            return res.status(400).json({ error: 'novedad_id y persona_id son requeridos' });
        }
        const existente = await NovedadPersona.findOne({ where: { novedad_id, persona_id } });
        if (existente) {
            await existente.update({ estado, demorado });
            return res.status(200).json(existente);
        }
        const novedadPersona = await NovedadPersona.create({ novedad_id, persona_id, estado, demorado });
        res.status(201).json(novedadPersona);
    } catch (error) {
        console.error('Error al agregar persona a la novedad:', error);
        res.status(400).json({ error: 'Error al agregar persona a la novedad' });
    }
};
// Eliminar una persona de una novedad
exports.removePersonaFromNovedad = async (req, res) => {
    try {
        const { novedad_id, persona_id } = req.params;
        await NovedadPersona.destroy({
            where: { novedad_id, persona_id }
        });
        res.status(204).send();
    } catch (error) {
        console.error('Error al eliminar persona de la novedad:', error);
        res.status(400).json({ error: 'Error al eliminar persona de la novedad' });
    }
};
// Actualizar el estado de una persona en una novedad
exports.updateEstadoPersonaNovedad = async (req, res) => {
    try {
        const { novedad_id, persona_id } = req.params;
        const { estado } = req.body;
        const result = await NovedadPersona.update(
            { estado },
            { where: { novedad_id, persona_id } }
        );
        res.status(200).json({ updated: result[0] });
    } catch (error) {
        console.error('Error al actualizar estado:', error);
        res.status(400).json({ error: 'Error al actualizar estado' });
    }
};
// backend/controllers/novedad_persona.controllers.js
exports.getPersonasByNovedadId = async (req, res) => {
    try {
        const { novedad_id } = req.params;
        const relaciones = await NovedadPersona.findAll({
            where: { novedad_id },
            include: [{
                model: Persona,
                as: 'persona'
            }]
        });
        // Devuelve la estructura que tu frontend espera
        res.status(200).json(relaciones.map(r => ({
            ...r.persona.dataValues,
            estado: r.estado,
            demorado: r.demorado
        })));
    } catch (error) {
        console.error('Error al obtener personas de la novedad:', error);
        res.status(400).json({ error: 'Error al obtener personas de la novedad' });
    }
};
// backend/controllers/novedad_persona.controllers.js
// Obtener todos los victimarios ordenados por cantidad descendente
exports.getVictimarios = async (req, res) => {
    try {
        const victimarios = await NovedadPersona.findAll({
            where: { estado: 'victimario' },
            attributes: [
                'persona_id',
                [sequelize.fn('COUNT', sequelize.col('novedad_id')), 'cantidad'],
                [sequelize.fn('STRING_AGG', sequelize.cast(sequelize.col('novedad_id'), 'text'), ','), 'novedades_ids']
            ],
            group: ['persona_id', 'persona.id'],
            include: [{
                model: Persona,
                as: 'persona'
            }],
            order: [[sequelize.literal('cantidad'), 'DESC']]
        });
        res.status(200).json(victimarios);
    } catch (error) {
        console.error('Error al obtener victimarios:', error);
        res.status(400).json({ error: 'Error al obtener victimarios' });
    }
};
// Obtener todas las novedades asociadas a una persona
exports.getNovedadesByPersona = async (req, res) => {
    try {
        const { persona_id } = req.params;
        const persona = await Persona.findByPk(persona_id, {
            include: [{
                model: Novedades,
                as: 'novedades',
                through: { attributes: [] }
            }]
        });
        if (!persona) {
            return res.status(404).json({ error: 'Persona no encontrada' });
        }
        res.status(200).json(persona.novedades);
    } catch (error) {
        console.error('Error al obtener novedades de la persona:', error);
        res.status(400).json({ error: 'Error al obtener novedades de la persona' });
    }
};

// Obtener victimarios residentes (persona.extranjero = false)
exports.getResidenteVictimario = async (req, res) => {
    try {
        const victimarios = await NovedadPersona.findAll({
            where: { estado: 'victimario' },
            attributes: [
                'persona_id',
                [sequelize.fn('COUNT', sequelize.col('novedad_id')), 'cantidad'],
                [sequelize.fn('STRING_AGG', sequelize.cast(sequelize.col('novedad_id'), 'text'), ','), 'novedades_ids']
            ],
            group: ['persona_id', 'persona.id'],
            include: [{
                model: Persona,
                as: 'persona',
                where: { extranjero: false }
            }],
            order: [[sequelize.literal('cantidad'), 'DESC']]
        });
        res.status(200).json(victimarios);
    } catch (error) {
        console.error('Error al obtener victimarios residentes:', error);
        res.status(400).json({ error: 'Error al obtener victimarios residentes' });
    }
};
// Obtener victimarios extranjeros (persona.extranjero = true)
// Obtener victimarios extranjeros (persona.extranjero = true)
exports.getExtranjeroVictimario = async (req, res) => {
    try {
        const victimarios = await NovedadPersona.findAll({
            where: { estado: 'victimario' },
            attributes: [
                'persona_id',
                [sequelize.fn('COUNT', sequelize.col('novedad_id')), 'cantidad'],
                [sequelize.fn('STRING_AGG', sequelize.cast(sequelize.col('novedad_id'), 'text'), ','), 'novedades_ids']
            ],
            group: ['persona_id', 'persona.id'],
            include: [{
                model: Persona,
                as: 'persona',
                where: { extranjero: true }
            }],
            order: [[sequelize.literal('cantidad'), 'DESC']]
        });
        res.status(200).json(victimarios);
    } catch (error) {
        console.error('Error al obtener victimarios extranjeros:', error);
        res.status(400).json({ error: 'Error al obtener victimarios extranjeros' });
    }
};
// Obtener personas demoradas mayores de 18 años (usando novedad_persona)
exports.getPersonasDemoradasMayores = async (req, res) => {
    try {
        const personas = await NovedadPersona.findAll({
            where: { demorado: true },
            include: [{
                model: Persona,
                as: 'persona',
                where: { edad: { [require('sequelize').Op.gte]: 18 } }
            }]
        });
        res.status(200).json(personas);
    } catch (error) {
        console.error('Error al obtener personas demoradas mayores de 18 años:', error);
        res.status(400).json({ error: 'Error al obtener personas demoradas mayores de 18 años' });
    }
};
// Obtener personas demoradas menores de 18 años (usando novedad_persona)
exports.getPersonasDemoradasMenores = async (req, res) => {
    try {
        const personas = await NovedadPersona.findAll({
            where: { demorado: true },
            include: [{
                model: Persona,
                as: 'persona',
                where: { edad: { [require('sequelize').Op.lte]: 17 } }
            }]
        });
        res.status(200).json(personas);
    } catch (error) {
        console.error('Error al obtener personas demoradas menores de 18 años:', error);
        res.status(400).json({ error: 'Error al obtener personas demoradas menores de 18 años' });
    }
};
// backend/controllers/novedad_persona.controllers.js

exports.updatePersonasNovedadMultiple = async (req, res) => {
    const { novedad_id, personas } = req.body;
    // personas: array de objetos { persona_id, estado, demorado }
    if (!novedad_id || !Array.isArray(personas)) {
        return res.status(400).json({ error: 'Datos inválidos' });
    }
    try {
        // 1. Obtener los persona_id actuales en la novedad
        const actuales = await NovedadPersona.findAll({ where: { novedad_id } });
        const actualesIds = actuales.map(np => np.persona_id);

        // 2. Eliminar los que ya no están
        const nuevosIds = personas.map(p => p.persona_id);
        const aEliminar = actualesIds.filter(id => !nuevosIds.includes(id));
        if (aEliminar.length > 0) {
            await NovedadPersona.destroy({ where: { novedad_id, persona_id: aEliminar } });
        }

        // 3. Agregar o actualizar los que están en la lista
        for (const p of personas) {
            const existente = actuales.find(np => np.persona_id === p.persona_id);
            if (existente) {
                // Actualizar estado y demorado
                await existente.update({ estado: p.estado, demorado: p.demorado });
            } else {
                // Crear nueva relación
                await NovedadPersona.create({
                    novedad_id,
                    persona_id: p.persona_id,
                    estado: p.estado,
                    demorado: p.demorado
                });
            }
        }

        res.json({ success: true });
    } catch (error) {
        console.error('Error en actualización múltiple:', error);
        res.status(500).json({ error: 'Error en actualización múltiple' });
    }
};