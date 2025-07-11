const NovedadPersonal = require('../models/novedad_personal');
const Novedades = require('../models/novedades');
const Personal = require('../models/personal');

// Agregar un personal a una novedad
exports.addPersonalToNovedad = async (req, res) => {
    try {
        const { novedad_id, personal_id } = req.body;

        if (!novedad_id || !personal_id) {
            return res.status(400).json({ error: 'novedad_id y personal_id son requeridos' });
        }

        const novedadPersonal = await NovedadPersonal.create({ novedad_id, personal_id });
        res.status(201).json(novedadPersonal);
    } catch (error) {
        console.error('Error al agregar personal a la novedad:', error);
        res.status(400).json({ error: 'Error al agregar personal a la novedad' });
    }
};

// Eliminar un personal de una novedad
exports.removePersonalFromNovedad = async (req, res) => {
    try {
        const { novedad_id, personal_id } = req.params;

        await NovedadPersonal.destroy({
            where: { novedad_id, personal_id }
        });

        res.status(204).send();
    } catch (error) {
        console.error('Error al eliminar personal de la novedad:', error);
        res.status(400).json({ error: 'Error al eliminar personal de la novedad' });
    }
};
//dame el get add y delete e el controllers para estos modelos y tambien el achivo routes para luego llamarlo en el index
// Obtener todos los personales de una novedad
exports.getPersonalesByNovedadId = async (req, res) => {
    try {
        const { novedad_id } = req.params;

        const personales = await Personal.findAll({
            include: [{
                model: Novedades,
                as: 'novedades',
                where: { id: novedad_id },
                through: { attributes: [] }
            }]
        });

        res.status(200).json(personales);
    } catch (error) {
        console.error('Error al obtener personales de la novedad:', error);
        res.status(400).json({ error: 'Error al obtener personales de la novedad' });
    }
};
// Obtener personas demoradas mayores de 18 años
exports.getPersonasDemoradasMayores = async (req, res) => {
    try {
        const personas = await Personal.findAll({
            where: {
                edad: { [require('sequelize').Op.gte]: 18 },
                demorado: true
            }
        });
        res.status(200).json(personas);
    } catch (error) {
        console.error('Error al obtener personas demoradas mayores de 18 años:', error);
        res.status(400).json({ error: 'Error al obtener personas demoradas mayores de 18 años' });
    }
};