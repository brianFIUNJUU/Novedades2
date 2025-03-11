const { Novedades, Estado, Persona } = require('../models/associations');

// Obtener todos los estados
async function getEstados(req, res) {
    try {
        const estados = await Estado.findAll({
            include: [
                { model: Novedades, as: 'novedad' },
                { model: Persona, as: 'persona' }
            ]
        });
        res.json(estados);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
// Obtener estado por ID
async function getEstadoById(req, res) {
    const { id } = req.params;
    try {
        const estado = await Estado.findByPk(id, {
            include: [
                { model: Novedades, as: 'novedad' },
                { model: Persona, as: 'persona' }
            ]
        });
        if (estado) {
            res.json(estado);
        } else {
            res.status(404).json({ error: 'Estado no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
// Obtener estado por ID de novedad y persona
async function getEstadoByNovedadAndPersona(req, res) {
    const { novedadId, personaId } = req.params;
    try {
        const estado = await Estado.findOne({
            where: {
                novedad_id: novedadId,
                persona_id: personaId
            },
            include: [
                { model: Novedades, as: 'novedad' },
                { model: Persona, as: 'persona' }
            ]
        });
        if (estado) {
            res.json(estado);
        } else {
            res.status(404).json({ error: 'Estado no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Crear un nuevo estado
async function createEstado(req, res) {
    const { novedad_id, persona_id, estado } = req.body;
    try {
        const nuevoEstado = await Estado.create({
            novedad_id,
            persona_id,
            estado
        });
        res.status(201).json(nuevoEstado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Actualizar un estado
async function updateEstado(req, res) {
    const { id } = req.params;
    const { novedad_id, persona_id, estado } = req.body;
    try {
        const estadoExistente = await Estado.findByPk(id);
        if (estadoExistente) {
            estadoExistente.novedad_id = novedad_id;
            estadoExistente.persona_id = persona_id;
            estadoExistente.estado = estado;
            await estadoExistente.save();
            res.json(estadoExistente);
        } else {
            res.status(404).json({ error: 'Estado no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Eliminar un estado
// Eliminar un estado por ID de novedad y persona
async function deleteEstado(req, res) {
    const { novedad_id, persona_id } = req.params;
    try {
        const estadoExistente = await Estado.findOne({
            where: {
                novedad_id: novedad_id,
                persona_id: persona_id
            }
        });
        if (estadoExistente) {
            await estadoExistente.destroy();
            res.json({ message: 'Estado eliminado' });
        } else {
            res.status(404).json({ error: 'Estado no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getEstados,
    getEstadoByNovedadAndPersona,
    createEstado,
    updateEstado,
    getEstadoById,
    deleteEstado
};