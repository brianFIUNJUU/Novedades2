const Departamento = require('../models/departamento'); // Asegúrate de que la ruta sea correcta

// Obtener todos los departamentos
exports.getDepartamentos = async (req, res) => {
    try {
        const departamentos = await Departamento.findAll();
        res.json(departamentos);
    } catch (error) {
        console.error('Error al obtener departamentos:', error);
        res.status(500).json({
            status: '0',
            msg: 'Error al obtener departamentos.',
        });
    }
};

// Crear un nuevo departamento
exports.createDepartamento = async (req, res) => {
    const { nombre } = req.body;

    if (!nombre) {
        return res.status(400).json({
            status: '0',
            msg: 'El campo nombre es obligatorio.',
        });
    }

    try {
        const departamento = await Departamento.create({ nombre });
        res.status(201).json({
            status: '1',
            msg: 'Departamento guardado.',
            data: departamento,
        });
    } catch (error) {
        console.error('Error al guardar departamento:', error);
        res.status(500).json({
            status: '0',
            msg: 'Error al guardar departamento.',
        });
    }
};

// Obtener un departamento por ID
exports.getDepartamentoById = async (req, res) => {
    const { id } = req.params;

    try {
        const departamento = await Departamento.findByPk(id);
        if (!departamento) {
            return res.status(404).json({
                status: '0',
                msg: 'Departamento no encontrado.',
            });
        }
        res.json(departamento);
    } catch (error) {
        console.error('Error al obtener departamento:', error);
        res.status(500).json({
            status: '0',
            msg: 'Error al obtener departamento.',
        });
    }
};

// Actualizar un departamento por ID
exports.updateDepartamento = async (req, res) => {
    const { id } = req.params;
    const { nombre } = req.body;

    if (!nombre) {
        return res.status(400).json({
            status: '0',
            msg: 'El campo nombre es obligatorio.',
        });
    }

    try {
        const [updated] = await Departamento.update({ nombre }, { where: { id } });
        if (updated) {
            const updatedDepartamento = await Departamento.findByPk(id);
            res.json({
                status: '1',
                msg: 'Departamento actualizado.',
                data: updatedDepartamento,
            });
        } else {
            res.status(404).json({
                status: '0',
                msg: 'Departamento no encontrado.',
            });
        }
    } catch (error) {
        console.error('Error al actualizar departamento:', error);
        res.status(500).json({
            status: '0',
            msg: 'Error al actualizar departamento.',
        });
    }
};

// Eliminar un departamento por ID
exports.deleteDepartamento = async (req, res) => {
    const { id } = req.params;

    try {
        const deleted = await Departamento.destroy({ where: { id } });
        if (deleted) {
            res.json({
                status: '1',
                msg: 'Departamento eliminado.',
            });
        } else {
            res.status(404).json({
                status: '0',
                msg: 'Departamento no encontrado.',
            });
        }
    } catch (error) {
        console.error('Error al eliminar departamento:', error);
        res.status(500).json({
            status: '0',
            msg: 'Error al eliminar departamento.',
        });
    }
};
