const Persona = require('../models/persona');
const Departamento = require('../models/departamento');
const Localidad = require('../models/localidad');
const Novedades = require('../models/novedades');
const personaCtrl = {};

// Obtener todas las personas
personaCtrl.getPersonas = async (req, res) => {
    try {
        const personas = await Persona.findAll({
            include: [
                { model: Departamento, as: 'departamento' },
                { model: Localidad, as: 'localidad' },
                { model: Novedades, as: 'novedades' }
            ]
        });
        res.json(personas);
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error al obtener personas.'
        });
    }
};

// Crear una nueva persona
personaCtrl.createPersona = async (req, res) => {   
    try {
        const maxId = await Persona.max('id');
        const newId = maxId !== null ? maxId + 1 : 1;

        const { novedades, ...personaData } = req.body;
        const persona = await Persona.create({ ...personaData, id: newId });

        if (novedades && novedades.length > 0) {
            await persona.setNovedades(novedades);
        }

        res.json({
            'status': '1',
            'msg': 'Persona guardada.'
        });
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error al guardar persona.'
        });
    }
};

// Obtener una persona por ID
personaCtrl.getPersona = async (req, res) => {
    try {
        const persona = await Persona.findByPk(req.params.id, {
            include: [
                { model: Departamento, as: 'departamento' },
                { model: Localidad, as: 'localidad' },
                { model: Novedades, as: 'novedades' }
            ]
        });
        res.json(persona);
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error al obtener la persona.'
        });
    }
};

// Editar una persona
personaCtrl.editPersona = async (req, res) => {
    try {
        const { novedades, ...personaData } = req.body;
        console.log('Datos recibidos para actualizar persona:', JSON.stringify(personaData, null, 2)); // Agregar un log para ver los datos recibidos

        const [updated] = await Persona.update(personaData, { where: { id: req.params.id } });

        if (updated) {
            const updatedPersona = await Persona.findByPk(req.params.id);

            if (novedades && novedades.length > 0) {
                const novedadesIds = novedades.map(novedad => novedad.id); // Asegúrate de que solo se pasen los IDs
                const novedadesInstances = await Novedades.findAll({
                    where: {
                        id: novedadesIds
                    }
                });
                await updatedPersona.setNovedades(novedadesInstances);
            }

            res.json({
                'status': '1',
                'msg': 'Persona actualizada.'
            });
        } else {
            res.status(404).json({ error: 'Persona no encontrada' });
        }
    } catch (error) {
        console.error('Error al actualizar persona:', error);
        res.status(400).json({
            'status': '0',
            'msg': 'Error al actualizar persona.'
        });
    }
};

// Obtener una persona por DNI
personaCtrl.getPersonaByDni = async (req, res) => {
    try {
        const persona = await Persona.findOne({
            where: { dni: req.params.dni },
            include: [
                { model: Departamento, as: 'departamento' },
                { model: Localidad, as: 'localidad' },
                { model: Novedades, as: 'novedades' }
            ]
        });
        if (persona) {
            res.json(persona);
        } else {
            res.status(404).json({
                'status': '0',
                'msg': 'Persona no encontrada.'
            });
        }
    } catch (error) {
        console.error('Error al obtener la persona por DNI:', error);
        res.status(500).json({
            'status': '0',
            'msg': 'Error al obtener la persona por DNI.'
        });
    }
};
// Eliminar una persona
personaCtrl.deletePersona = async (req, res) => {
    try {
        await Persona.destroy({ where: { id: req.params.id } });
        res.json({
            'status': '1',
            'msg': 'Persona eliminada.'
        });
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error al eliminar persona.'
        });
    }
};

module.exports = personaCtrl;