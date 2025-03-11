const NovedadPersona = require('../models/novedad_persona');
const Novedades = require('../models/novedades');
const Persona = require('../models/persona');

// Agregar una persona a una novedad// Agregar una persona a una novedad 
exports.addPersonaToNovedad = async (req, res) => {
    try {
        const { novedad_id, persona_id } = req.body;
        if (!novedad_id || !persona_id) {
            return res.status(400).json({ error: 'novedad_id y persona_id son requeridos' });
        }
        const novedadPersona = await NovedadPersona.create({ novedad_id, persona_id });
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