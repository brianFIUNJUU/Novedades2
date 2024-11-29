const Personal = require('../models/personal'); // Asegúrate de que la ruta sea correcta
const Dependencia = require('../models/dependencia'); // Importa el modelo Dependencia
const Persona = require('../models/persona'); // Importa el modelo Persona
const personalCtrl = {};

// Obtener todos los personales
personalCtrl.getPersonales = async (req, res) => {
    try {
        const personales = await Personal.findAll({
            include: [
                {
                    model: Dependencia,
                    as: 'dependencia',
                    // include: [
                    //     {
                    //         model: UnidadRegional,
                    //         as: 'unidadRegional',
                    //     },
                    // ],
                },
                {
                    model: Persona,
                    as: 'persona',
                },
            ],
        });
        res.json(personales);
    } catch (error) {
        console.error('Error al obtener personales:', error); // Imprimir el error para depuración
        res.status(400).json({
            status: '0',
            msg: 'Error al obtener personales.',
        });
    }
};


// Crear un nuevo personal
// Crear un nuevo personal
// Crear un nuevo personal
// Crear un nuevo personal
personalCtrl.createPersonal = async (req, res) => {
    const { legajo, escalafon, jerarquia, dependenciaId, fechaIngreso, funcionario, cargo, jefe, personaId } = req.body;

    if (!dependenciaId || !personaId) {
        return res.status(400).json({
            'status': '0',
            'msg': 'Los campos dependenciaId y personaId son obligatorios.'
        });
    }

    try {
        // Obtener el siguiente ID disponible
        const maxId = await Personal.max('id');
        const newId = maxId !== null ? maxId + 1 : 1; // Obtener el siguiente ID

        // Verificar si el nuevo ID ya está en uso
        const existingPersonal = await Personal.findOne({ where: { id: newId } });
        if (existingPersonal) {
            // Aquí puedes implementar lógica para manejar el ID en uso
            // Por ejemplo, podrías buscar el ID más bajo disponible o lanzar un error
            return res.status(400).json({
                'status': '0',
                'msg': 'ID en uso, error al crear personal.'
            });
        }

        // Crear el nuevo registro de Personal con el ID generado
        const personal = await Personal.create({
            id: newId, // Asignar el nuevo ID
            legajo,
            escalafon,
            jerarquia,
            dependenciaId,
            fechaIngreso,
            funcionario,
            cargo,
            jefe,
            personaId
        });

        res.json({
            'status': '1',
            'msg': 'Personal guardado.',
            'data': personal // Opcional: enviar el objeto creado como respuesta
        });
    } catch (error) {
        console.error('Error al guardar personal:', error);
        res.status(400).json({
            'status': '0',
            'msg': 'Error al guardar personal.'
        });
    }
};




// Obtener un personal por ID
personalCtrl.getPersonal = async (req, res) => {
    try {
        const personal = await Personal.findByPk(req.params.id, {
            include: [
                {
                    model: Dependencia,
                    as: 'dependencia',
                },
                {
                    model: Persona,
                    as: 'persona',
                },
            ],
        });
        if (!personal) {
            return res.status(404).json({
                status: '0',
                msg: 'Personal no encontrado.',
            });
        }
        res.json(personal);
    } catch (error) {
        res.status(400).json({
            status: '0',
            msg: 'Error al obtener el personal.',
        });
    }
};

// Editar un personal
personalCtrl.editPersonal = async (req, res) => {
    try {
        const updatedPersonal = await Personal.update(req.body, {
            where: { id: req.params.id },
            returning: true, // Para obtener el registro actualizado
        });
        if (updatedPersonal[0] === 0) {
            return res.status(404).json({
                status: '0',
                msg: 'Personal no encontrado.',
            });
        }
        res.json({
            status: '1',
            msg: 'Personal actualizado.',
            data: updatedPersonal[1][0], // El registro actualizado
        });
    } catch (error) {
        res.status(400).json({
            status: '0',
            msg: 'Error al actualizar personal.',
        });
    }
};

// Eliminar un personal
personalCtrl.deletePersonal = async (req, res) => {
    try {
        const deletedPersonal = await Personal.destroy({
            where: { id: req.params.id },
        });
        if (deletedPersonal === 0) {
            return res.status(404).json({
                status: '0',
                msg: 'Personal no encontrado.',
            });
        }
        res.json({
            status: '1',
            msg: 'Personal eliminado.',
        });
    } catch (error) {
        res.status(400).json({
            status: '0',
            msg: 'Error al eliminar personal.',
        });
    }
};

// Buscar personal por legajo
personalCtrl.getPersonalByLegajo = async (req, res) => {
    try {
        const personal = await Personal.findOne({
            where: { legajo: req.params.legajo },
            include: [
                {
                    model: Dependencia,
                    as: 'dependencia',
                },
                {
                    model: Persona,
                    as: 'persona',
                },
            ],
        });
        if (!personal) {
            return res.status(404).json({
                status: '0',
                msg: 'Personal no encontrado.',
            });
        }
        res.json(personal);
    } catch (error) {
        res.status(400).json({
            status: '0',
            msg: 'Error al obtener el personal por legajo.',
        });
    }
};

module.exports = personalCtrl;
