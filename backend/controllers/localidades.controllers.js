// controllers/localidadController.js
const Localidad = require('../models/localidad');
const Departamento = require('../models/departamento'); // Asegúrate de que la ruta sea correcta

const localidadCtrl = {};

// Obtener todas las localidades
localidadCtrl.getLocalidades = async (req, res) => {
    try {
        const localidades = await Localidad.findAll({
            include: [
                {
                    model: Departamento,
                    as: 'departamento',
                },
            ],
        });
        res.json(localidades);
    } catch (error) {
        res.status(400).json({
            status: '0',
            msg: 'Error al obtener localidades.',
        });
    }
};

// Obtener localidades por departamento
localidadCtrl.getLocalidadesByDepartamento = async (req, res) => {
    const { departamentoId } = req.params; // Suponiendo que el ID del departamento se pasa como parámetro

    try {
        const localidades = await Localidad.findAll({
            where: { departamento_id: departamentoId },
            include: [
                {
                    model: Departamento,
                    as: 'departamento',
                },
            ],
        });
        res.json(localidades);
    } catch (error) {
        res.status(400).json({
            status: '0',
            msg: 'Error al obtener localidades por departamento.',
        });
    }
};
// Obtener una localidad por ID
localidadCtrl.getLocalidadById = async (req, res) => {
    const { id } = req.params;

    try {
        // Buscar localidad por ID
        const localidad = await Localidad.findOne({
            where: { id },
            include: [
                {
                    model: Departamento,
                    as: 'departamento',
                },
            ],
        });

        if (!localidad) {
            return res.status(404).json({
                status: '0',
                msg: 'Localidad no encontrada.',
            });
        }

        res.json(localidad);
    } catch (error) {
        res.status(400).json({
            status: '0',
            msg: 'Error al obtener la localidad.',
        });
    }
};

  
// Crear una nueva localidad
localidadCtrl.createLocalidad = async (req, res) => {
    const { nombre, latitud, longitud, departamento_id } = req.body;

    if (!nombre || !departamento_id) {
        return res.status(400).json({
            status: '0',
            msg: 'Los campos nombre y departamento_id son obligatorios.',
        });
    }

    try {
        // Obtener el máximo ID actual
        const maxId = await Localidad.max('id');
        const newId = maxId !== null ? maxId + 1 : 1; // Obtener el siguiente ID

        // Verificar si el nuevo ID ya está en uso
        const existingLocalidad = await Localidad.findOne({ where: { id: newId } });
        if (existingLocalidad) {
            // Lógica para manejar el ID en uso
            // Esto podría incluir encontrar el ID más bajo disponible
            // Por simplicidad, en este ejemplo se utiliza el nuevo ID
            console.error('ID en uso, se asignará el ID más bajo disponible');
        }

        const localidad = await Localidad.create({ id: newId, nombre, latitud, longitud, departamento_id });
        res.json({
            status: '1',
            msg: 'Localidad guardada.',
            data: localidad,
        });
    } catch (error) {
        console.error('Error al guardar localidad:', error);
        res.status(400).json({
            status: '0',
            msg: 'Error al guardar localidad.',
        });
    }
};


// Actualizar una localidad
localidadCtrl.updateLocalidad = async (req, res) => {
    const { id } = req.params;
    const { nombre, latitud, longitud, departamento_id } = req.body;

    try {
        const [updated] = await Localidad.update(
            { nombre, latitud, longitud, departamento_id },
            { where: { id } }
        );

        if (updated) {
            const updatedLocalidad = await Localidad.findOne({ where: { id } });
            return res.status(200).json({ updatedLocalidad });
        }
        throw new Error('Localidad no encontrada');
    } catch (error) {
        res.status(400).json({
            status: '0',
            msg: 'Error al actualizar localidad.',
        });
    }
};

// Eliminar una localidad
localidadCtrl.deleteLocalidad = async (req, res) => {
    const { id } = req.params;

    try {
        const deleted = await Localidad.destroy({ where: { id } });

        if (deleted) {
            return res.status(204).send();
        }
        throw new Error('Localidad no encontrada');
    } catch (error) {
        res.status(400).json({
            status: '0',
            msg: 'Error al eliminar localidad.',
        });
    }
};

module.exports = localidadCtrl;
