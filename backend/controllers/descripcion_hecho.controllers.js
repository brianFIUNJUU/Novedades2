const Descripcion_hecho = require('../models/descripcion_hecho'); // Asegúrate de que la ruta sea correcta
const { Sequelize } = require('sequelize');
const sequelize = require('../database'); // Asegúrate de que la ruta sea correcta
const Tipo_hecho = require('../models/tipohecho'); // Asegúrate de que la ruta sea correcta
const Subtipo_hecho = require('../models/subtipohecho'); // Asegúrate de que la ruta sea correcta
const descripcionHechoCtrl = {};

// Obtener todas las descripciones de hecho
descripcionHechoCtrl.getDescripcionesHecho = async (req, res) => {
    try {
        const descripciones = await Descripcion_hecho.findAll({
            include: [
                { model: Tipo_hecho, as: 'tipo_hecho' },
                { model: Subtipo_hecho, as: 'subtipo_hecho' }
            ]
        });
        res.json(descripciones);
    } catch (error) {
        res.status(400).json({
            status: '0',
            msg: 'Error al obtener descripciones de hecho.'
        });
    }
};

// Crear una nueva descripción de hecho
descripcionHechoCtrl.createDescripcionHecho = async (req, res) => {
    try {
        const descripcion = await Descripcion_hecho.create(req.body);
        res.json({
            status: '1',
            msg: 'Descripción de hecho guardada correctamente.',
            data: descripcion
        });
    } catch (error) {
        res.status(400).json({
            status: '0',
            msg: 'Error al guardar descripción de hecho.'
        });
    }
};

// Obtener una descripción de hecho por ID
descripcionHechoCtrl.getDescripcionHecho = async (req, res) => {
    try {
        const descripcion = await Descripcion_hecho.findByPk(req.params.id, {
            include: [
                { model: Tipo_hecho, as: 'tipo_hecho' },
                { model: Subtipo_hecho, as: 'subtipo_hecho' }
            ]
        });
        if (descripcion) {
            res.json(descripcion);
        } else {
            res.status(404).json({
                msg: 'Descripción de hecho no encontrada.'
            });
        }
    } catch (error) {
        res.status(400).json({
            status: '0',
            msg: 'Error al obtener la descripción de hecho.'
        });
    }
};

// Editar una descripción de hecho
descripcionHechoCtrl.editDescripcionHecho = async (req, res) => {
    try {
        const [updated] = await Descripcion_hecho.update(req.body, {
            where: { id: req.body.id }
        });
        if (updated) {
            const updatedDescripcion = await Descripcion_hecho.findByPk(req.body.id, {
                include: [
                    { model: Tipo_hecho, as: 'tipo_hecho' },
                    { model: Subtipo_hecho, as: 'subtipo_hecho' }
                ]
            });
            res.json({
                status: '1',
                msg: 'Descripción de hecho actualizada correctamente.',
                data: updatedDescripcion
            });
        } else {
            res.status(404).json({
                msg: 'Descripción de hecho no encontrada.'
            });
        }
    } catch (error) {
        res.status(400).json({
            status: '0',
            msg: 'Error al actualizar la descripción de hecho.'
        });
    }
};

// Eliminar una descripción de hecho
descripcionHechoCtrl.deleteDescripcionHecho = async (req, res) => {
    try {
        const deleted = await Descripcion_hecho.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.json({
                status: '1',
                msg: 'Descripción de hecho eliminada correctamente.'
            });
        } else {
            res.status(404).json({
                msg: 'Descripción de hecho no encontrada.'
            });
        }
    } catch (error) {
        res.status(400).json({
            status: '0',
            msg: 'Error al eliminar la descripción de hecho.'
        });
    }
};

descripcionHechoCtrl.getDescripcionesHechoBySubtipoHecho = async (req, res) => {
    try {
        const descripciones = await Descripcion_hecho.findAll({
            where: { subtipohecho_id: req.params.subtipoHechoId },
            include: [
                { model: Tipo_hecho, as: 'tipo_hecho' },
                // Corregir aquí: usar Subtipo_hecho en lugar de Subtipohecho
                { model: Subtipo_hecho, as: 'subtipo_hecho' }
            ]
        });
        res.json(descripciones);
    } catch (error) {
        console.error(error);
        res.status(400).json({
            status: '0',
            msg: 'Error al obtener descripciones de hecho por subtipo de hecho.',
            error: error.message
        });
    }
};

// Obtener Subtipo de Hecho basado en una Descripción de Hecho
descripcionHechoCtrl.getSubtipoHechoByDescripcion = async (req, res) => {
    try {
        const { descripcion_hecho_id } = req.params;

        // Buscar la descripción de hecho con los modelos relacionados
        const descripcion = await Descripcion_hecho.findByPk(descripcion_hecho_id, {
            include: [
                { model: Tipo_hecho, as: 'tipo_hecho' },
                { model: Subtipo_hecho, as: 'subtipo_hecho' }
            ]
        });

        // Si la descripción no es encontrada
        if (!descripcion) {
            return res.status(404).json({ message: 'Descripción de Hecho no encontrada' });
        }

        // Devolver solo los datos necesarios (tipo y subtipo)
        res.json({
            descripcion_hecho: descripcion.descripcion_hecho,
            tipo_hecho: descripcion.tipo_hecho,
            subtipo_hecho: descripcion.subtipo_hecho
        });
    } catch (error) {
        console.error('Error al obtener subtipos por descripción de hecho:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};




module.exports = descripcionHechoCtrl;