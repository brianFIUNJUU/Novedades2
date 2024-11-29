const Novedades = require('../models/novedades');
const Unidad_regional = require('../models/unidad_regional');
const Dependencia = require('../models/dependencia');
const Departamento = require('../models/departamento');
const Localidad = require('../models/localidad');

// Obtener todas las novedades
exports.getAllNovedades = async (req, res) => {
    try {
        const novedades = await Novedades.findAll({
            include: [
                { model: Unidad_regional, as: 'unidad_regional' },
                { model: Dependencia, as: 'juridiccion' },
                { model: Departamento, as: 'departamento' },
                { model: Localidad, as: 'localidad' }
            ]
        });
        console.log('Unidad Regional:', Unidad_regional.rawAttributes);
        console.log('Juridiccion:', Dependencia.rawAttributes);
        console.log('Departamento:', Departamento.rawAttributes);
        console.log('Localidad:', Localidad.rawAttributes);
        res.json(novedades);
    } catch (error) {
        console.error('Error al obtener novedades:', error);
        res.status(500).json({ error: 'Error al obtener novedades' });
    }
};

// Obtener una novedad por ID
exports.getNovedadById = async (req, res) => {
    try {
        const novedad = await Novedades.findByPk(req.params.id, {
            include: [
                { model: Unidad_regional, as: 'unidad_regional' },
                { model: Dependencia, as: 'juridiccion' },
                { model: Departamento, as: 'departamento' },
                { model: Localidad, as: 'localidad' }
            ]
        });
        if (novedad) {
            console.log('Unidad Regional:', Unidad_regional.rawAttributes);
            console.log('Juridiccion:', Dependencia.rawAttributes);
            console.log('Departamento:', Departamento.rawAttributes);
            console.log('Localidad:', Localidad.rawAttributes);
            res.json(novedad);
        } else {
            res.status(404).json({ error: 'Novedad no encontrada' });
        }
    } catch (error) {
        console.error('Error al obtener novedad:', error);
        res.status(500).json({ error: 'Error al obtener novedad' });
    }
};

// Crear una nueva novedad
exports.createNovedad = async (req, res) => {
    try {
        const nuevaNovedad = await Novedades.create(req.body);
        console.log('Unidad Regional:', Unidad_regional.rawAttributes);
        console.log('Juridiccion:', Dependencia.rawAttributes);
        console.log('Departamento:', Departamento.rawAttributes);
        console.log('Localidad:', Localidad.rawAttributes);
        res.status(201).json(nuevaNovedad);
    } catch (error) {
        console.error('Error al crear novedad:', error);
        res.status(500).json({ error: 'Error al crear novedad' });
    }
};

// Actualizar una novedad por ID
exports.updateNovedad = async (req, res) => {
    try {
        const [updated] = await Novedades.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedNovedad = await Novedades.findByPk(req.params.id, {
                include: [
                    { model: Unidad_regional, as: 'unidad_regional' },
                    { model: Dependencia, as: 'juridiccion' },
                    { model: Departamento, as: 'departamento' },
                    { model: Localidad, as: 'localidad' }
                ]
            });
            console.log('Unidad Regional:', Unidad_regional.rawAttributes);
            console.log('Juridiccion:', Dependencia.rawAttributes);
            console.log('Departamento:', Departamento.rawAttributes);
            console.log('Localidad:', Localidad.rawAttributes);
            res.json(updatedNovedad);
        } else {
            res.status(404).json({ error: 'Novedad no encontrada' });
        }
    } catch (error) {
        console.error('Error al actualizar novedad:', error);
        res.status(500).json({ error: 'Error al actualizar novedad' });
    }
};

// Eliminar una novedad por ID
exports.deleteNovedad = async (req, res) => {
    try {
        const deleted = await Novedades.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            console.log('Unidad Regional:', Unidad_regional.rawAttributes);
            console.log('Juridiccion:', Dependencia.rawAttributes);
            console.log('Departamento:', Departamento.rawAttributes);
            console.log('Localidad:', Localidad.rawAttributes);
            res.status(204).json();
        } else {
            res.status(404).json({ error: 'Novedad no encontrada' });
        }
    } catch (error) {
        console.error('Error al eliminar novedad:', error);
        res.status(500).json({ error: 'Error al eliminar novedad' });
    }
};