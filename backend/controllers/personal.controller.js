const Personal = require('../models/personal'); // Asegúrate de que la ruta sea correcta
const Dependencia = require('../models/dependencia'); // Importa el modelo Dependencia
const UnidadRegional = require('../models/unidad_regional'); // Importa el modelo UnidadRegional
const personalCtrl = {};

// Obtener todos los personales
personalCtrl.getPersonales = async (req, res) => {
    try {
        const personales = await Personal.findAll({
            include: [
                {
                    model: Dependencia,
                    as: 'dependencia',
                    include: [
                        {
                            model: UnidadRegional,
                            as: 'unidadRegional',
                        },
                    ],
                },
            ],
        });
        console.log('Dependencias y Unidades Regionales:', personales.map(p => p.dependencia)); // Imprimir en consola
        res.json(personales);
    } catch (error) {
        console.error('Error al obtener personales:', error); // Imprimir el error para depuración
        res.status(400).json({
            status: '0',
            msg: 'Error al obtener personales.',
        });
    }
};

personalCtrl.createPersonal = async (req, res) => {
    const { legajo, jerarquia, nombre, apellido, dni, email, DependenciaId, unidad_regional_id } = req.body;

    if (!DependenciaId || !unidad_regional_id) {
        return res.status(400).json({
            'status': '0',
            'msg': 'Los campos DependenciaId y unidad_regional_id son obligatorios.'
        });
    }

    try {
        // Crear el nuevo registro de Personal
        const personal = await Personal.create({
            legajo,
            jerarquia,
            nombre,
            apellido,
            dni,
            email,
            DependenciaId,
            unidad_regional_id
        });

        // Obtener y mostrar Dependencia y UnidadRegional
        const dependencia = await Dependencia.findByPk(DependenciaId);
        const unidadRegional = await UnidadRegional.findByPk(unidad_regional_id);
        console.log('Dependencia:', dependencia);
        console.log('Unidad Regional:', unidadRegional);

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
                    include: [
                        {
                            model: UnidadRegional,
                            as: 'unidadRegional',
                        },
                    ],
                },
            ],
        });
        if (!personal) {
            return res.status(404).json({
                status: '0',
                msg: 'Personal no encontrado.',
            });
        }
        console.log('Dependencia:', personal.dependencia);
        console.log('Unidad Regional:', personal.dependencia.unidadRegional);
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
        const personal = updatedPersonal[1][0];
        const dependencia = await Dependencia.findByPk(personal.DependenciaId);
        const unidadRegional = await UnidadRegional.findByPk(personal.unidad_regional_id);
        console.log('Dependencia:', dependencia);
        console.log('Unidad Regional:', unidadRegional);
        res.json({
            status: '1',
            msg: 'Personal actualizado.',
            data: personal, // El registro actualizado
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
        const personal = await Personal.findByPk(req.params.id);
        if (!personal) {
            return res.status(404).json({
                status: '0',
                msg: 'Personal no encontrado.',
            });
        }
        const dependencia = await Dependencia.findByPk(personal.DependenciaId);
        const unidadRegional = await UnidadRegional.findByPk(personal.unidad_regional_id);
        console.log('Dependencia:', dependencia);
        console.log('Unidad Regional:', unidadRegional);
        await Personal.destroy({
            where: { id: req.params.id },
        });
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
                    include: [
                        {
                            model: UnidadRegional,
                            as: 'unidadRegional',
                        },
                    ],
                },
            ],
        });
        if (!personal) {
            return res.status(404).json({
                status: '0',
                msg: 'Personal no encontrado.',
            });
        }
        console.log('Dependencia:', personal.dependencia);
        console.log('Unidad Regional:', personal.dependencia.unidadRegional);
        res.json(personal);
    } catch (error) {
        res.status(400).json({
            status: '0',
            msg: 'Error al obtener el personal por legajo.',
        });
    }
};

module.exports = personalCtrl;