    const { DataTypes } = require('sequelize');
    const sequelize = require('../database');
    const Dependencia = require('./dependencia'); // Asegúrate de que la ruta sea correcta
    const Departamento = require('./departamento');
    const Localidad = require('./localidad');
    const Unidad_regional = require('./unidad_regional');
    
    // Definir el modelo Vigilancia
    const Vigilancia = sequelize.define('Vigilancia', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        unidad_solicitante: {
            type: DataTypes.STRING,
        },
        detalle_unidad_solicitante: {
            type: DataTypes.STRING,
        },
        cargo_solicitante: {
            type: DataTypes.STRING,
        }, // Cargo (Juez, Fiscal), Apellido y Nombre

        nro_oficio: {
            type: DataTypes.STRING,
        }, // N° de oficio
        
        oficio: {
            type: DataTypes.STRING,
        }, // nombre de archivo
        oficioUrl: {
            type: DataTypes.STRING,
        }, // este es el nombre archivo de oficio 
        
        expediente: {
            type: DataTypes.STRING,
        }, // N° de expediente
        caratula: {
            type: DataTypes.STRING,
        }, // Caratula 
        unidad_regional_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Unidad_regional,
                key: 'id'
            },
            allowNull: false        
        }, // Relación con el modelo Unidad_regional
        juridiccion_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Dependencia,
                key: 'id'
            },
            allowNull: false // Relación con el modelo Dependencia
        },
        motivo_custodia: {
            type: DataTypes.STRING,
            allowNull: false
        },
        modalidad_custodia: {
            type: DataTypes.STRING,
        },
        observaciones: {
            type: DataTypes.STRING,
        },
        recorrido_inicio: {
            type: DataTypes.STRING,
        }, // este dato no es obligatorio y solo se llena si es que existe una ronda
        recorrido_final: {
            type: DataTypes.STRING,
        },// este dato no es obligatorio y solo se llena si es que existe una ronda
        fecha_inicio: {
            type: DataTypes.DATEONLY,
          
        }, // esta es la fecha del inicio de servicio
        vigencia: {
            type: DataTypes.STRING,
           
        }, // aquí se carga la vigencia que tendrá la vigilancia pero es solo de tipo string 
        fecha_limite: {
            type: DataTypes.DATEONLY,
           
        }, // fecha límite es otra string que nos marcará la fecha o un string que diga hasta nueva disposición
        direccion_vigilancia: {
            type: DataTypes.STRING,
        }, // dirección de la vigilancia
        departamento_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Departamento,
                key: 'id'
            },
            allowNull: false // Relación con el modelo Departamento
        },
        localidad_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Localidad,
                key: 'id'
            },
            allowNull: false // Relación con el modelo Localidad
        },
        latitud_vigilancia: {
            type: DataTypes.STRING,
        }, // latitud de la vigilancia
        longitud_vigilancia: {
            type: DataTypes.STRING,
        }, // longitud de la vigilancia

        //estos son datos la victima 
        foto_persona: {
            type: DataTypes.STRING,
        }, // este campo es para un archivo de foto de la persona custodiada
        nombre_persona: {
            type: DataTypes.STRING,
        }, // bueno desde aquí esto va a quedar en suspenso por lo menos hasta que se hable con el cliente
        nro_documento: {
            type: DataTypes.STRING,
        },
        edad: {
            type: DataTypes.INTEGER,
        },
        genero: {
            type: DataTypes.STRING,
        },
        sexo: {
            type: DataTypes.STRING,
        },
        telefono: {
            type: DataTypes.STRING,
        },
        // datos del victimario
        nombre_victimario: {
            type: DataTypes.STRING,
        },
        foto_victimario: {
            type: DataTypes.STRING,
        },
        nro_documento_victimario: {
            type: DataTypes.STRING,
        },
        edad_victimario: {
            type: DataTypes.INTEGER,
        },
        genero_victimario: {
            type: DataTypes.STRING,
        },
        sexo_victimario: {
            type: DataTypes.STRING,
        },
        domicilio: {
            type: DataTypes.STRING,
        },
        vinculo: {
            type: DataTypes.STRING,
        },
        
        juridiccion_correspondiente_id: {
            type: DataTypes.INTEGER,
        },
        unidad_operativa_mañana: {
            type: DataTypes.STRING,
        }, // unidad operativa que estará en la mañana
        unidad_operativa_tarde: {   
            type: DataTypes.STRING,
        }, // unidad operativa que estará en la tarde
        unidad_operativa_noche: {
            type: DataTypes.STRING,
        }, // unidad operativa que estará en la noche
        archivo_finalizar_objetivo: {
            type: DataTypes.STRING,
        },
        nombreArchivo_finalizar_objetivo: {
            type: DataTypes.STRING,
        },
        situacion_objetivo: {
            type: DataTypes.STRING,
        },
        tramite_levantamiento: {
            type: DataTypes.STRING,
        },
        estado:{
            type: DataTypes.STRING,
        },
        // Campos para archivos
        archivo: {
            type: DataTypes.STRING, // Contenido del archivo en base64
        },
        archivo1: {
            type: DataTypes.STRING,
        },
        archivo2: {
            type: DataTypes.STRING,
        },
        archivo3: {
            type: DataTypes.STRING,
        },
        archivo4: {
            type: DataTypes.STRING,
        },
        archivo5: {
            type: DataTypes.STRING,
        }
    }, {
        tableName: 'vigilancias', // nombre de la tabla en la BD
        timestamps: false // Deshabilitar timestamps automáticos (createdAt, updatedAt)
    });
    
    // Sincronizar el modelo con la base de datos
    Vigilancia.sync({ alter: true })
        .then(() => {
            console.log("Tabla 'vigilancias' sincronizada correctamente.");
        })
        .catch((error) => {
            console.error("Error al sincronizar la tabla 'vigilancias':", error);
        });
    
    // Definir las asociaciones
    Vigilancia.belongsTo(Dependencia, { foreignKey: 'juridiccion_id', as: 'juridiccion' });
    Vigilancia.belongsTo(Departamento, { foreignKey: 'departamento_id', as: 'departamento' });
    Vigilancia.belongsTo(Localidad, { foreignKey: 'localidad_id', as: 'localidad' });
    
    module.exports = Vigilancia;