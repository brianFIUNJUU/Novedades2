const Dependencia = require('../models/dependencia');
const UnidadRegional = require('../models/unidad_regional'); // Importar el modelo de UnidadRegional
const dependenciaCtrl = {};

// Obtener todas las dependencias
dependenciaCtrl.getDependencias = async (req, res) => {
    try {
        const dependencias = await Dependencia.findAll({
            include: [{
                model: UnidadRegional,
                as: 'unidadRegional' // Usar el alias que definiste en el modelo
            }]
        });
        res.json(dependencias);
    } catch (error) {
        console.error('Error al obtener dependencias:', error); // Log para depuración
        res.status(400).json({
            'status': '0',
            'msg': 'Error al obtener dependencias.'
        });
    }
};

// Crear una nueva dependencia
dependenciaCtrl.createDependencia = async (req, res) => {
    const { juridiccion, unidad_regional_id } = req.body; // Destructuración de campos

    // Validar datos
    if (!juridiccion || !unidad_regional_id) {
        return res.status(400).json({
            'status': '0',
            'msg': 'Todos los campos son obligatorios.'
        });
    }

    try {
        // Crear la nueva dependencia
        const dependencia = await Dependencia.create({
            juridiccion,
            unidad_regional_id
        });
        res.json({
            'status': '1',
            'msg': 'Dependencia guardada.',
            'data': dependencia
        });
    } catch (error) {
        console.error('Error al guardar dependencia:', error); // Log para depuración
        res.status(400).json({
            'status': '0',
            'msg': 'Error al guardar dependencia.'
        });
    }
};

// Obtener una dependencia por ID
dependenciaCtrl.getDependencia = async (req, res) => {
    try {
        const dependencia = await Dependencia.findByPk(req.params.id, {
            include: [{
                model: UnidadRegional,
                as: 'unidadRegional'
            }]
        });
        if (dependencia) {
            res.json(dependencia);
        } else {
            res.status(404).json({ msg: 'Dependencia no encontrada.' });
        }
    } catch (error) {
        console.error('Error al obtener la dependencia:', error); // Log para depuración
        res.status(400).json({
            'status': '0',
            'msg': 'Error al obtener la dependencia.'
        });
    }
};

// Obtener dependencias por unidad regional
dependenciaCtrl.getDependenciasByUnidadRegional = async (req, res) => {
    try {
        const dependencias = await Dependencia.findAll({
            where: { unidad_regional_id: req.params.unidadRegionalId }, // Cambiado a unidad_regional_id
            include: [{
                model: UnidadRegional,
                as: 'unidadRegional'
            }]
        });
        res.json(dependencias);
    } catch (error) {
        console.error('Error al obtener las dependencias por unidad regional:', error); // Log para depuración
        res.status(400).json({
            'status': '0',
            'msg': 'Error al obtener las dependencias por unidad regional.'
        });
    }
};

// Editar una dependencia
dependenciaCtrl.editDependencia = async (req, res) => {
    // Asegúrate de que el ID esté en el cuerpo de la solicitud
    const { id, juridiccion, unidad_regional_id } = req.body;

    // Validar datos
    if (!id || !juridiccion || !unidad_regional_id) {
        return res.status(400).json({
            'status': '0',
            'msg': 'Todos los campos son obligatorios.'
        });
    }

    try {
        const [updated] = await Dependencia.update(req.body, {
            where: { id }
        });
        if (updated) {
            const updatedDependencia = await Dependencia.findByPk(id, {
                include: [{
                    model: UnidadRegional,
                    as: 'unidadRegional'
                }]
            });
            res.json({
                'status': '1',
                'msg': 'Dependencia actualizada.',
                'data': updatedDependencia
            });
        } else {
            res.status(404).json({ msg: 'Dependencia no encontrada.' });
        }
    } catch (error) {
        console.error('Error al actualizar dependencia:', error);
        res.status(400).json({
            'status': '0',
            'msg': 'Error al actualizar dependencia.'
        });
    }
};

// Eliminar una dependencia
dependenciaCtrl.deleteDependencia = async (req, res) => {
    try {
        const deleted = await Dependencia.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.json({
                'status': '1',
                'msg': 'Dependencia eliminada.'
            });
        } else {
            res.status(404).json({ msg: 'Dependencia no encontrada.' });
        }
    } catch (error) {
        console.error('Error al eliminar dependencia:', error); // Log para depuración
        res.status(400).json({
            'status': '0',
            'msg': 'Error al eliminar dependencia.'
        });
    }
};

module.exports = dependenciaCtrl;