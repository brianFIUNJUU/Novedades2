const Cuadrante = require('../models/cuadrante');
const UnidadRegional = require('../models/unidad_regional'); // Importar el modelo de UnidadRegional
const cuadranteCtrl = {};

// Obtener todos los cuadrantes
cuadranteCtrl.getCuadrantes = async (req, res) => {
    try {
        const cuadrantes = await Cuadrante.findAll({
            include: [{
                model: UnidadRegional,
                as: 'unidadRegional' // Usar el alias que definiste en el modelo
            }]
        });
        res.json(cuadrantes);
    } catch (error) {
        console.error('Error al obtener cuadrantes:', error); // Log para depuración
        res.status(400).json({
            'status': '0',
            'msg': 'Error al obtener cuadrantes.'
        });
    }
};

// Crear un nuevo cuadrante
cuadranteCtrl.createCuadrante = async (req, res) => {
    const { nombre, unidad_regional_id } = req.body; // Destructuración de campos

    // Validar datos
    if (!nombre || !unidad_regional_id) {
        return res.status(400).json({
            'status': '0',
            'msg': 'Todos los campos son obligatorios.'
        });
    }

    try {
        // Crear el nuevo cuadrante
        const cuadrante = await Cuadrante.create({
            nombre,
            unidad_regional_id
        });
        res.json({
            'status': '1',
            'msg': 'Cuadrante guardado.',
            'data': cuadrante
        });
    } catch (error) {
        console.error('Error al guardar cuadrante:', error); // Log para depuración
        res.status(400).json({
            'status': '0',
            'msg': 'Error al guardar cuadrante.'
        });
    }
};

// Obtener un cuadrante por ID
cuadranteCtrl.getCuadrante = async (req, res) => {
    try {
        const cuadrante = await Cuadrante.findByPk(req.params.id, {
            include: [{
                model: UnidadRegional,
                as: 'unidadRegional'
            }]
        });
        if (cuadrante) {
            res.json(cuadrante);
        } else {
            res.status(404).json({ msg: 'Cuadrante no encontrado.' });
        }
    } catch (error) {
        console.error('Error al obtener el cuadrante:', error); // Log para depuración
        res.status(400).json({
            'status': '0',
            'msg': 'Error al obtener el cuadrante.'
        });
    }
};

// Obtener cuadrantes por unidad regional
cuadranteCtrl.getCuadrantesByUnidadRegional = async (req, res) => {
    try {
        const cuadrantes = await Cuadrante.findAll({
            where: { unidad_regional_id: req.params.unidadRegionalId }, // Cambiado a unidad_regional_id
            include: [{
                model: UnidadRegional,
                as: 'unidadRegional'
            }]
        });
        res.json(cuadrantes);
    } catch (error) {
        console.error('Error al obtener los cuadrantes por unidad regional:', error); // Log para depuración
        res.status(400).json({
            'status': '0',
            'msg': 'Error al obtener los cuadrantes por unidad regional.'
        });
    }
};

// Editar un cuadrante
cuadranteCtrl.editCuadrante = async (req, res) => {
    // Asegúrate de que el ID esté en el cuerpo de la solicitud
    const { id, nombre, unidad_regional_id } = req.body;

    // Validar datos
    if (!id || !nombre || !unidad_regional_id) {
        return res.status(400).json({
            'status': '0',
            'msg': 'Todos los campos son obligatorios.'
        });
    }

    try {
        const [updated] = await Cuadrante.update(req.body, {
            where: { id }
        });
        if (updated) {
            const updatedCuadrante = await Cuadrante.findByPk(id, {
                include: [{
                    model: UnidadRegional,
                    as: 'unidadRegional'
                }]
            });
            res.json({
                'status': '1',
                'msg': 'Cuadrante actualizado.',
                'data': updatedCuadrante
            });
        } else {
            res.status(404).json({ msg: 'Cuadrante no encontrado.' });
        }
    } catch (error) {
        console.error('Error al actualizar cuadrante:', error);
        res.status(400).json({
            'status': '0',
            'msg': 'Error al actualizar cuadrante.'
        });
    }
};

// Eliminar un cuadrante
cuadranteCtrl.deleteCuadrante = async (req, res) => {
    try {
        const deleted = await Cuadrante.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.json({
                'status': '1',
                'msg': 'Cuadrante eliminado.'
            });
        } else {
            res.status(404).json({ msg: 'Cuadrante no encontrado.' });
        }
    } catch (error) {
        console.error('Error al eliminar cuadrante:', error); // Log para depuración
        res.status(400).json({
            'status': '0',
            'msg': 'Error al eliminar cuadrante.'
        });
    }
};

module.exports = cuadranteCtrl;