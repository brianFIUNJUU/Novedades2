const PartesDiariosPersonal = require('../models/partesDiarios_personal');
const PartesDiarios = require('../models/partesDiarios');
const Personal = require('../models/personal');

// Agregar un personal a un parte diario
exports.addPersonalToParteDiario = async (req, res) => {
    try {
        const { parte_diario_id, personal_id, personal_datos, rol, situacion, tipo_personal } = req.body;

        if (!parte_diario_id || !personal_id || !personal_datos || !tipo_personal) {
            return res.status(400).json({ error: 'Faltan datos obligatorios' });
        }

        const nuevoRegistro = await PartesDiariosPersonal.create({
            parte_diario_id,
            personal_id,
            personal_datos,
            rol,
            situacion,
            tipo_personal
        });

        res.status(201).json(nuevoRegistro);
    } catch (error) {
        console.error('Error al agregar personal al parte diario:', error);
        res.status(400).json({ error: 'Error al agregar personal al parte diario' });
    }
};

// Eliminar un personal de un parte diario
exports.removePersonalFromParteDiario = async (req, res) => {
    try {
        const { parte_diario_id, personal_id } = req.params;

        await PartesDiariosPersonal.destroy({
            where: { parte_diario_id, personal_id }
        });

        res.status(204).send();
    } catch (error) {
        console.error('Error al eliminar personal del parte diario:', error);
        res.status(400).json({ error: 'Error al eliminar personal del parte diario' });
    }
};

// Obtener todos los personales de un parte diario
// Obtener todos los personales de un parte diario (con datos completos de la tabla intermedia)
// Obtener todos los personales de un parte diario (con datos completos de la tabla intermedia)
exports.getPersonalesByParteDiarioId = async (req, res) => {
    try {
        const { parte_diario_id } = req.params;

              const personales = await PartesDiariosPersonal.findAll({
          where: { parte_diario_id },
          include: [{ model: Personal, as: 'personal' }]
        });

        res.status(200).json(personales);
    } catch (error) {
        console.error('Error al obtener personales del parte diario:', error);
        res.status(400).json({ error: 'Error al obtener personales del parte diario' });
    }
};
// Eliminar todos los personales de un parte diario
exports.removeAllPersonalFromParteDiario = async (req, res) => {
    try {
        const { parte_diario_id } = req.params;

        const deleted = await PartesDiariosPersonal.destroy({
            where: { parte_diario_id }
        });

        res.status(200).json({ message: `Se eliminaron ${deleted} registros de personal para el parte diario.` });
    } catch (error) {
        console.error('Error al eliminar todos los personales del parte diario:', error);
        res.status(400).json({ error: 'Error al eliminar todos los personales del parte diario' });
    }
};
// Obtener un registro específico por id
exports.getPersonalParteDiarioById = async (req, res) => {
    try {
        const { id } = req.params;
        const registro = await PartesDiariosPersonal.findByPk(id, {
            include: [{ model: Personal, as: 'personal' }]
        });
        
        if (!registro) {
            return res.status(404).json({ error: 'Registro no encontrado' });
        }
        res.status(200).json(registro);
    } catch (error) {
        console.error('Error al obtener el registro:', error);
        res.status(400).json({ error: 'Error al obtener el registro' });
    }
};
// Modificar un registro de personal en un parte diario
exports.updatePersonalParteDiario = async (req, res) => {
    try {
        const { id } = req.params;
        const { parte_diario_id, personal_id, personal_datos, rol, situacion, tipo_personal } = req.body;

        const registro = await PartesDiariosPersonal.findByPk(id);
        if (!registro) {
            return res.status(404).json({ error: 'Registro no encontrado' });
        }

        await registro.update({
            parte_diario_id,
            personal_id,
            personal_datos,
            rol,
            situacion,
            tipo_personal
        });

        res.status(200).json(registro);
    } catch (error) {
        console.error('Error al modificar el registro:', error);
        res.status(400).json({ error: 'Error al modificar el registro' });
    }
};

// Agregar múltiples personales a un parte diario
exports.addMultiplePersonalToParteDiario = async (req, res) => {
    try {
        const { personales } = req.body; // Espera un array de objetos con los campos necesarios

        if (!Array.isArray(personales) || personales.length === 0) {
            return res.status(400).json({ error: 'Debe enviar un array de personales' });
        }

        // Validar que cada objeto tenga los campos obligatorios
        for (const p of personales) {
            if (!p.parte_diario_id || !p.personal_id || !p.personal_datos || !p.tipo_personal) {
                return res.status(400).json({ error: 'Faltan datos obligatorios en uno de los registros' });
            }
        }

        const nuevosRegistros = await PartesDiariosPersonal.bulkCreate(personales);

        res.status(201).json(nuevosRegistros);
    } catch (error) {
        console.error('Error al agregar múltiples personales al parte diario:', error);
        res.status(400).json({ error: 'Error al agregar múltiples personales al parte diario' });
    }
};