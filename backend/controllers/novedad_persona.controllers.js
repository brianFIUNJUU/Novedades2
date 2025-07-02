const { sequelize, Persona, NovedadPersona } = require('../models');
const Novedades = require('../models/novedades');

// Agregar una persona a una novedad
// backend/controllers/novedad_persona.controllers.js
// backend/controllers/novedad_persona.controllers.js
exports.addPersonaToNovedad = async (req, res) => {
    try {
        const { novedad_id, persona_id, estado } = req.body;
        if (!novedad_id || !persona_id) {
            return res.status(400).json({ error: 'novedad_id y persona_id son requeridos' });
        }
        const existente = await NovedadPersona.findOne({ where: { novedad_id, persona_id } });
        if (existente) {
            await existente.update({ estado });
            return res.status(200).json(existente);
        }
        const novedadPersona = await NovedadPersona.create({ novedad_id, persona_id, estado });
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
// Obtener todas las personas de una novedad
exports.getPersonasByNovedadId = async (req, res) => {
    try {
        const { novedad_id } = req.params;
        const personas = await Persona.findAll({
            include: [{
                model: Novedades,
                as: 'novedades',
                where: { id: novedad_id },
                through: { attributes: [] }
            }]
        });
        res.status(200).json(personas);
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
// get de persona estado victimario 