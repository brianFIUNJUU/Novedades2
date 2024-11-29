const Vigilancia = require('../models/vigilancia'); // Asegúrate de que la ruta sea correcta
const Dependencia = require('../models/dependencia'); //
const Departamento = require('../models/departamento'); 
const Localidad = require('../models/localidad'); 
const vigilanciaCtrl = {};
const path = require('path');
const fs = require('fs');
// Obtener la URL de un archivo 
vigilanciaCtrl.getFileUrl = (req, res) => {
    const { fileName } = req.params;
    const baseUrl = 'http://localhost:3000/uploads/';
    const encodedFileName = encodeURIComponent(fileName);
    const fileUrl = `${baseUrl}${encodedFileName}`;

    // Verificar si el archivo existe 
    const filePath = path.join(__dirname, '../uploads', fileName);
    if (fs.existsSync(filePath)) {
        res.json({ fileUrl });
    } else {
        res.status(404).json({
            status: '0',
            msg: 'Archivo no encontrado.',
        });
    }
};

vigilanciaCtrl.getVigilancias = async (req, res) => {
    try {
        const vigilancias = await Vigilancia.findAll({
            include: [
                {
                    model: Dependencia,
                    as: 'juridiccion',
                },
                {
                    model: Departamento,
                    as: 'departamento',
                },
                {
                    model: Localidad,
                    as: 'localidad',
                },
            ],
        });
        res.json(vigilancias);
    } catch (error) {
        console.error('Error al obtener vigilancias:', error);
        res.status(400).json({
            status: '0',
            msg: 'Error al obtener vigilancias.',
        });
    }
};

// Crear una nueva vigilancia 
vigilanciaCtrl.createVigilancia = async (req, res) => {
    const {
        unidad_solicitante,
        detalle_unidad_solicitante,
        cargo_solicitante,
        nro_oficio,
        expediente,
        caratula,
        unidad_regional_id,
        juridiccion_id,
        motivo_custodia,
        modalidad_custodia,
        observaciones,
        recorrido_inicio,
        recorrido_final,
        fecha_inicio,
        vigencia,
        fecha_limite,
        direccion_vigilancia,
        departamento_id,
        localidad_id,
        latitud_vigilancia,
        longitud_vigilancia,
        nombre_persona,
        nro_documento,
        edad,
        genero,
        sexo,
        telefono,
        nombre_victimario,
        nro_documento_victimario,
        edad_victimario,
        genero_victimario,
        sexo_victimario,
        vinculo,
        domicilio,
        juridiccion_correspondiente_id,
        unidad_operativa_mañana,
        unidad_operativa_tarde,
        unidad_operativa_noche,
        archivo_finalizar_objetivo,
        nombreArchivo_finalizar_objetivo,
        situacion_objetivo,
        tramite_levantamiento,
        estado,
        archivo,
        archivo1,
        archivo2,
        archivo3,
        archivo4,
        archivo5,
    } = req.body;

    if (!juridiccion_id || !departamento_id || !localidad_id) {
        return res.status(400).json({
            status: '0',
            msg: 'Los campos juridiccion_id, departamento_id y localidad_id son obligatorios.'
        });
    }

    try {
        const nuevaVigilancia = await Vigilancia.create({
            unidad_solicitante,
            detalle_unidad_solicitante,
            cargo_solicitante,
            nro_oficio,
            expediente,
            caratula,
            unidad_regional_id,
            juridiccion_id,
            motivo_custodia,
            modalidad_custodia,
            observaciones,
            recorrido_inicio,
            recorrido_final,
            fecha_inicio,
            vigencia,
            fecha_limite,
            direccion_vigilancia,
            departamento_id,
            localidad_id,
            latitud_vigilancia,
            longitud_vigilancia,
            nombre_persona,
            nro_documento,
            edad,
            genero,
            sexo,
            telefono,
            nombre_victimario,
            nro_documento_victimario,
            edad_victimario,
            genero_victimario,
            sexo_victimario,
            vinculo,
            domicilio,
            juridiccion_correspondiente_id,
            unidad_operativa_mañana,
            unidad_operativa_tarde,
            unidad_operativa_noche,
            archivo_finalizar_objetivo,
            nombreArchivo_finalizar_objetivo,
            situacion_objetivo,
            tramite_levantamiento,
            estado,
            archivo,
            archivo1,
            archivo2,
            archivo3,
            archivo4,
            archivo5,
            oficio: req.files && req.files['oficio'] ? req.files['oficio'][0].filename : null,
            oficioUrl: req.files && req.files['oficio'] ? `/uploads/${req.files['oficio'][0].filename}` : null,
            foto_persona: req.files && req.files['foto_persona'] ? req.files['foto_persona'][0].filename : null,
            foto_personaUrl: req.files && req.files['foto_persona'] ? `/uploads/${req.files['foto_persona'][0].filename}` : null,
        });

        res.json({
            status: '1',
            msg: 'Vigilancia guardada.',
            data: nuevaVigilancia,
        });
    } catch (error) {
        console.error('Error al guardar vigilancia:', error);
        res.status(400).json({
            status: '0',
            msg: 'Error al guardar vigilancia.',
        });
    }
};

// Obtener una vigilancia por ID
vigilanciaCtrl.getVigilancia = async (req, res) => {
    try {
        const vigilancia = await Vigilancia.findByPk(req.params.id, {
            include: [
                {
                    model: Dependencia,
                    as: 'juridiccion',
                },
                {
                    model: Departamento,
                    as: 'departamento',
                },
                {
                    model: Localidad,
                    as: 'localidad',
                },
            ],
        });
        if (!vigilancia) {
            return res.status(404).json({
                status: '0',
                msg: 'Vigilancia no encontrada.',
            });
        }

        // Verificar si se solicita un archivo específico
        const { archivo } = req.query;
        if (archivo) {
            let filePath;
            if (archivo === 'oficio' && vigilancia.oficio) {
                filePath = path.join(__dirname, '../uploads', vigilancia.oficio);
            } else if (archivo === 'foto_persona' && vigilancia.foto_persona) {
                filePath = path.join(__dirname, '../uploads', vigilancia.foto_persona);
            } else {
                return res.status(404).json({
                    status: '0',
                    msg: 'Archivo no encontrado.',
                });
            }

            if (fs.existsSync(filePath)) {
                return res.download(filePath);
            } else {
                return res.status(404).json({
                    status: '0',
                    msg: 'Archivo no encontrado.',
                });
            }
        }

        res.json(vigilancia);
    } catch (error) {
        console.error('Error al obtener la vigilancia:', error);
        res.status(400).json({
            status: '0',
            msg: 'Error al obtener la vigilancia.',
        });
    }
};

// Editar una vigilancia
vigilanciaCtrl.editVigilancia = async (req, res) => {
    const {
        unidad_solicitante,
        detalle_unidad_solicitante,
        cargo_solicitante,
        nro_oficio,
        expediente,
        caratula,
        unidad_regional_id,
        juridiccion_id,
        motivo_custodia,
        modalidad_custodia,
        observaciones,
        recorrido_inicio,
        recorrido_final,
        fecha_inicio,
        vigencia,
        fecha_limite,
        direccion_vigilancia,
        departamento_id,
        localidad_id,
        latitud_vigilancia,
        longitud_vigilancia,
        nombre_persona,
        nro_documento,
        edad,
        genero,
        sexo,
        telefono,
        nombre_victimario,
        nro_documento_victimario,
        edad_victimario,
        genero_victimario,
        sexo_victimario,
        vinculo,
        domicilio,
        juridiccion_correspondiente_id,
        unidad_operativa_mañana,
        unidad_operativa_tarde,
        unidad_operativa_noche,
        archivo_finalizar_objetivo,
        nombreArchivo_finalizar_objetivo,
        situacion_objetivo,
        tramite_levantamiento,
        estado,
        archivo,
        archivo1,
        archivo2,
        archivo3,
        archivo4,
        archivo5,
    } = req.body;

    try {
        const [updatedRows, [updatedVigilancia]] = await Vigilancia.update({
            unidad_solicitante,
            detalle_unidad_solicitante,
            cargo_solicitante,
            nro_oficio,
            expediente,
            caratula,
            unidad_regional_id,
            juridiccion_id,
            motivo_custodia,
            modalidad_custodia,
            observaciones,
            recorrido_inicio,
            recorrido_final,
            fecha_inicio,
            vigencia,
            fecha_limite,
            direccion_vigilancia,
            departamento_id,
            localidad_id,
            latitud_vigilancia,
            longitud_vigilancia,
            nombre_persona,
            nro_documento,
            edad,
            genero,
            sexo,
            telefono,
            nombre_victimario,
            nro_documento_victimario,
            edad_victimario,
            genero_victimario,
            sexo_victimario,
            vinculo,
            domicilio,
            juridiccion_correspondiente_id,
            unidad_operativa_mañana,
            unidad_operativa_tarde,
            unidad_operativa_noche,
            archivo_finalizar_objetivo,
            nombreArchivo_finalizar_objetivo,
            situacion_objetivo,
            tramite_levantamiento,
            estado,
            archivo,
            archivo1,
            archivo2,
            archivo3,
            archivo4,
            archivo5,
            oficio: req.files && req.files['oficio'] ? req.files['oficio'][0].filename : null,
            oficioUrl: req.files && req.files['oficio'] ? `/uploads/${req.files['oficio'][0].filename}` : null,
            foto_persona: req.files && req.files['foto_persona'] ? req.files['foto_persona'][0].filename : null,
            foto_personaUrl: req.files && req.files['foto_persona'] ? `/uploads/${req.files['foto_persona'][0].filename}` : null,
        }, {
            where: { id: req.params.id },
            returning: true, // Para obtener el registro actualizado
        });

        if (updatedRows === 0) {
            return res.status(404).json({
                status: '0',
                msg: 'Vigilancia no encontrada.',
            });
        }

        res.json({
            status: '1',
            msg: 'Vigilancia actualizada.',
            data: updatedVigilancia,
        });
    } catch (error) {
        console.error('Error al actualizar vigilancia:', error);
        res.status(400).json({
            status: '0',
            msg: 'Error al actualizar vigilancia.',
        });
    }
};

// Eliminar una vigilancia
vigilanciaCtrl.deleteVigilancia = async (req, res) => {
    try {

        // Primero, obtenemos la vigilancia para acceder a los nombres de los archivos
        const vigilancia = await Vigilancia.findByPk(req.params.id);
        if (!vigilancia) {
            return res.status(404).json({
                status: '0',
                msg: 'Vigilancia no encontrada.',
            });
        }

        // Eliminamos los archivos asociados si existen
        if (vigilancia.oficio) {
            const oficioPath = path.join(__dirname, '../uploads', vigilancia.oficio);
            if (fs.existsSync(oficioPath)) {
                fs.unlinkSync(oficioPath);
            }
        }

        if (vigilancia.foto_persona) {
            const fotoPersonaPath = path.join(__dirname, '../uploads', vigilancia.foto_persona);
            if (fs.existsSync(fotoPersonaPath)) {
                fs.unlinkSync(fotoPersonaPath);
            }
        }

        // Luego, eliminamos la vigilancia de la base de datos
        const deletedRows = await Vigilancia.destroy({
            where: { id: req.params.id },
        });

        if (deletedRows === 0) {
            return res.status(404).json({
                status: '0',
                msg: 'Vigilancia no encontrada.',
            });
        }

        res.json({
            status: '1',
            msg: 'Vigilancia eliminada.',
        });
    } catch (error) {
        console.error('Error al eliminar vigilancia:', error);
        res.status(400).json({
            status: '0',
            msg: 'Error al eliminar vigilancia.',
        });
    }
};

// Buscar vigilancia por unidad solicitante
vigilanciaCtrl.getVigilanciaByUnidad = async (req, res) => {
    try {
        const vigilancia = await Vigilancia.findOne({
            where: { unidad_solicitante: req.params.unidad_solicitante },
            include: [
                {
                    model: Persona,
                    as: 'persona',
                },
                {
                    model: Dependencia,
                    as: 'juridiccion',
                },
                {
                    model: Departamento,
                    as: 'departamento',
                },
                {
                    model: Localidad,
                    as: 'localidad',
                },
            ],
        });
        if (!vigilancia) {
            return res.status(404).json({
                status: '0',
                msg: 'Vigilancia no encontrada.',
            });
        }
        res.json(vigilancia);
    } catch (error) {
        console.error('Error al obtener la vigilancia por unidad solicitante:', error);
        res.status(400).json({
            status: '0',
            msg: 'Error al obtener la vigilancia por unidad solicitante.',
        });
    }
};

module.exports = vigilanciaCtrl;