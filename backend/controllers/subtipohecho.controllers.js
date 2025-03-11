const Subtipo_hecho = require('../models/subtipohecho'); // Asegúrate de que la ruta sea correcta
const Tipo_hecho = require('../models/tipohecho'); // Asegúrate de que la ruta sea correcta
const subtipoHechoCtrl = {};

// Obtener todos los subtipos de hecho
subtipoHechoCtrl.getSubtiposHecho = async (req, res) => {
    try {
        const subtipos = await Subtipo_hecho.findAll({
            include: [{ model: Tipo_hecho, as: 'tipo_hecho' }]
        });
        res.json(subtipos);
    } catch (error) {
        res.status(400).json({
            status: '0',
            msg: 'Error al obtener subtipos de hecho.'
        });
    }
};

// Crear un nuevo subtipo de hecho
subtipoHechoCtrl.createSubtipoHecho = async (req, res) => {
    try {
        const subtipo = await Subtipo_hecho.create(req.body);
        res.json({
            status: '1',
            msg: 'Subtipo de hecho guardado correctamente.',
            data: subtipo
        });
    } catch (error) {
        res.status(400).json({
            status: '0',
            msg: 'Error al guardar subtipo de hecho.'
        });
    }
};

// Obtener un subtipo de hecho por ID
subtipoHechoCtrl.getSubtipoHecho = async (req, res) => {
    try {
        const subtipo = await Subtipo_hecho.findByPk(req.params.id, {
            include: [{ model: Tipo_hecho, as: 'tipo_hecho' }]
        });
        if (subtipo) {
            res.json(subtipo);
        } else {
            res.status(404).json({
                msg: 'Subtipo de hecho no encontrado.'
            });
        }
    } catch (error) {
        res.status(400).json({
            status: '0',
            msg: 'Error al obtener el subtipo de hecho.'
        });
    }
};

// Editar un subtipo de hecho
subtipoHechoCtrl.editSubtipoHecho = async (req, res) => {
    try {
        const [updated] = await Subtipo_hecho.update(req.body, {
            where: { id: req.body.id }
        });
        if (updated) {
            const updatedSubtipo = await Subtipo_hecho.findByPk(req.body.id, {
                include: [{ model: Tipo_hecho, as: 'tipo_hecho' }]
            });
            res.json({
                status: '1',
                msg: 'Subtipo de hecho actualizado correctamente.',
                data: updatedSubtipo
            });
        } else {
            res.status(404).json({
                msg: 'Subtipo de hecho no encontrado.'
            });
        }
    } catch (error) {
        res.status(400).json({
            status: '0',
            msg: 'Error al actualizar el subtipo de hecho.'
        });
    }
};

// Eliminar un subtipo de hecho
subtipoHechoCtrl.deleteSubtipoHecho = async (req, res) => {
    try {
        const deleted = await Subtipo_hecho.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.json({
                status: '1',
                msg: 'Subtipo de hecho eliminado correctamente.'
            });
        } else {
            res.status(404).json({
                msg: 'Subtipo de hecho no encontrado.'
            });
        }
    } catch (error) {
        res.status(400).json({
            status: '0',
            msg: 'Error al eliminar el subtipo de hecho.'
        });
    }
};
// Obtener subtipos de hecho por tipo de hecho
subtipoHechoCtrl.getSubtiposHechoByTipoHecho = async (req, res) => {
    try {
        const subtipos = await Subtipo_hecho.findAll({
            where: { tipo_hecho_id: req.params.tipoHechoId },
            include: [{ model: Tipo_hecho, as: 'tipo_hecho' }]
        });
        res.json(subtipos);
    } catch (error) {
        res.status(400).json({
            status: '0',
            msg: 'Error al obtener subtipos de hecho por tipo de hecho.'
        });
    }
};

module.exports = subtipoHechoCtrl;