const Tipo_hecho = require('../models/tipohecho'); // Asegúrate de que la ruta sea correcta
const tipoHechoCtrl = {};

// Obtener todos los tipos de hecho
tipoHechoCtrl.getTiposHecho = async (req, res) => {
    try {
        const tipos = await Tipo_hecho.findAll();
        res.json(tipos);
    } catch (error) {
        res.status(400).json({
            status: '0',
            msg: 'Error al obtener tipos de hecho.'
        });
    }
};

// Crear un nuevo tipo de hecho
tipoHechoCtrl.createTipoHecho = async (req, res) => {
    try {
        const tipo = await Tipo_hecho.create(req.body);
        res.json({
            status: '1',
            msg: 'Tipo de hecho guardado correctamente.',
            data: tipo
        });
    } catch (error) {
        res.status(400).json({
            status: '0',
            msg: 'Error al guardar tipo de hecho.'
        });
    }
};

// Obtener un tipo de hecho por ID
tipoHechoCtrl.getTipoHecho = async (req, res) => {
    try {
        const tipo = await Tipo_hecho.findByPk(req.params.id);
        if (tipo) {
            res.json(tipo);
        } else {
            res.status(404).json({
                msg: 'Tipo de hecho no encontrado.'
            });
        }
    } catch (error) {
        res.status(400).json({
            status: '0',
            msg: 'Error al obtener el tipo de hecho.'
        });
    }
};

// Editar un tipo de hecho
tipoHechoCtrl.editTipoHecho = async (req, res) => {
    try {
        const [updated] = await Tipo_hecho.update(req.body, {
            where: { id: req.body.id }
        });
        if (updated) {
            const updatedTipo = await Tipo_hecho.findByPk(req.body.id);
            res.json({
                status: '1',
                msg: 'Tipo de hecho actualizado correctamente.',
                data: updatedTipo
            });
        } else {
            res.status(404).json({
                msg: 'Tipo de hecho no encontrado.'
            });
        }
    } catch (error) {
        res.status(400).json({
            status: '0',
            msg: 'Error al actualizar el tipo de hecho.'
        });
    }
};

// Eliminar un tipo de hecho
tipoHechoCtrl.deleteTipoHecho = async (req, res) => {
    try {
        const deleted = await Tipo_hecho.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.json({
                status: '1',
                msg: 'Tipo de hecho eliminado correctamente.'
            });
        } else {
            res.status(404).json({
                msg: 'Tipo de hecho no encontrado.'
            });
        }
    } catch (error) {
        res.status(400).json({
            status: '0',
            msg: 'Error al eliminar el tipo de hecho.'
        });
    }
};

module.exports = tipoHechoCtrl;