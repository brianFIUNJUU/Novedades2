const Persona = require('../models/persona');
const Departamento = require('../models/departamento');
const Localidad = require('../models/localidad');
const personaCtrl = {};

// Obtener todas las personas
personaCtrl.getPersonas = async (req, res) => {
    try {
        const personas = await Persona.findAll({
            include: [
                { model: Departamento, as: 'departamento' },
                { model: Localidad, as: 'localidad' }
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

        const persona = await Persona.create({ ...req.body, id: newId });
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
                { model: Localidad, as: 'localidad' }
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
        await Persona.update(req.body, { where: { id: req.params.id } });
        res.json({
            'status': '1',
            'msg': 'Persona actualizada.'
        });
    } catch (error) {
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
                { model: Localidad, as: 'localidad' }
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
        res.status(400).json({
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
