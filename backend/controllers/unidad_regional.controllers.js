const Unidad_regional = require('../models/unidad_regional'); // Asegúrate de que la ruta sea correcta
const unidadRegionalCtrl = {};

// Obtener todas las unidades regionales
unidadRegionalCtrl.getUnidadesRegionales = async (req, res) => {
    try {
        const unidades = await Unidad_regional.findAll();
        res.json(unidades);
    } catch (error) {
        res.status(400).json({
            status: '0',
            msg: 'Error al obtener unidades regionales.'
        });
    }
};

// Crear una nueva unidad regional
unidadRegionalCtrl.createUnidadRegional = async (req, res) => {
    try {
        const unidad = await Unidad_regional.create(req.body);
        res.json({
            status: '1',
            msg: 'Unidad regional guardada correctamente.',
            data: unidad
        });
    } catch (error) {
        res.status(400).json({
            status: '0',
            msg: 'Error al guardar unidad regional.'
        });
    }
};

// Obtener una unidad regional por ID
unidadRegionalCtrl.getUnidadRegional = async (req, res) => {
    try {
        const unidad = await Unidad_regional.findByPk(req.params.id);
        if (unidad) {
            res.json(unidad);
        } else {
            res.status(404).json({
                msg: 'Unidad regional no encontrada.'
            });
        }
    } catch (error) {
        res.status(400).json({
            status: '0',
            msg: 'Error al obtener la unidad regional.'
        });
    }
};

// Editar una unidad regional
unidadRegionalCtrl.editUnidadRegional = async (req, res) => {
    try {
        const [updated] = await Unidad_regional.update(req.body, {
            where: { id: req.body.id }
        });
        if (updated) {
            const updatedUnidad = await Unidad_regional.findByPk(req.body.id);
            res.json({
                status: '1',
                msg: 'Unidad regional actualizada correctamente.',
                data: updatedUnidad
            });
        } else {
            res.status(404).json({
                msg: 'Unidad regional no encontrada.'
            });
        }
    } catch (error) {
        res.status(400).json({
            status: '0',
            msg: 'Error al actualizar la unidad regional.'
        });
    }
};

// Eliminar una unidad regional
unidadRegionalCtrl.deleteUnidadRegional = async (req, res) => {
    try {
        const deleted = await Unidad_regional.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.json({
                status: '1',
                msg: 'Unidad regional eliminada correctamente.'
            });
        } else {
            res.status(404).json({
                msg: 'Unidad regional no encontrada.'
            });
        }
    } catch (error) {
        res.status(400).json({
            status: '0',
            msg: 'Error al eliminar la unidad regional.'
        });
    }
};

module.exports = unidadRegionalCtrl;
