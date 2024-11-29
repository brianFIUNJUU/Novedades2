const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Dependencia = require('./dependencia'); // Asegúrate de que la ruta sea correcta
const Departamento = require('./departamento');
const Localidad = require('./localidad');
const Unidad_regional = require('./unidad_regional');

// Definir el modelo Novedades
const Novedades = sequelize.define('Novedades', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
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
    fecha: {
        type: DataTypes.DATEONLY,
    }, // esta es la fecha del inicio de servicio
    horario: {
        type: DataTypes.DATEONLY,
    }, // esta es la fecha del inicio de servicio
    lugar_hecho: {
        type: DataTypes.STRING,
    }, // Lugar donde ocurrió el hecho
    latitud: {
        type: DataTypes.STRING,
    }, // latitud de la vigilancia
    longitud: {
        type: DataTypes.STRING,
    }, // longitud de la vigilancia
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
    origen_novedad: {
        type: DataTypes.STRING,
    }, 
    unidad_interviniente: {
        type: DataTypes.STRING,
    },
    tipo_hecho: {
        type: DataTypes.STRING,
    }, // tipo de hecho
    modus_operandi: {
        type: DataTypes.STRING,
    }, // Modo de operar el delito
    personal_policial_nombre: {
        type: DataTypes.STRING,
    }, // Nombre y Apellido del personal policial
    personal_policial_legajo: {
        type: DataTypes.STRING,
    }, // Legajo del personal policial
    descripcion: {  
        type: DataTypes.STRING,
    },
    victima_nombre: {
        type: DataTypes.STRING,
    }, // Nombre de la víctima
    victima_dni: {
        type: DataTypes.STRING,
    }, // DNI de la víctima
    victima_edad: {
        type: DataTypes.STRING,
    }, // Edad de la víctima
    victima_sexo: {
        type: DataTypes.STRING,
    }, // Sexo de la víctima
    inculpado_cantidad: {
        type: DataTypes.STRING,
    }, // Cantidad de inculpados
    inculpado_nombre: {
        type: DataTypes.STRING,
    }, // Nombre del inculpado
    inculpado_dni: {
        type: DataTypes.STRING,
    }, // DNI del inculpado
    inculpado_edad: {
        type: DataTypes.STRING,
    }, // Edad del inculpado
    inculpado_sexo: {
        type: DataTypes.STRING,
    }, // Sexo del inculpado
    inculpado_domicilio: {
        type: DataTypes.STRING,
    }, // Domicilio del inculpado
    inculpado_nacionalidad: {
        type: DataTypes.STRING,
    }, // Nacionalidad del inculpado
    vinculo_victima_inculpado: {
        type: DataTypes.STRING,
    }, // Vínculo entre la víctima y el inculpado
    demorado: {
        type: DataTypes.BOOLEAN,
    }, // Demorado
    comparendo: {
        type: DataTypes.BOOLEAN,
    }, // Comparendo
    elemento_secuestrado: {
        type: DataTypes.BOOLEAN,
    }, // Elemento secuestrado
    elemento_secuestrado_descripcion: {
        type: DataTypes.STRING,
    }, // Descripción del elemento secuestrado
    bien_recuperado: {
        type: DataTypes.BOOLEAN,
    }, // Bien recuperado
    bien_recuperado_descripcion: {
        type: DataTypes.STRING,
    }, // Descripción del bien recuperado
    tipo_lugar_hecho: {
        type: DataTypes.STRING,
    }, // Tipo de lugar donde ocurrió el hecho
    oficial_cargo: {
        type: DataTypes.STRING,
    }, // oficial a cargo nombre y apellido
    legajo: {    
        type: DataTypes.STRING,
    },
    observaciones: { 
        type: DataTypes.STRING,
    },
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
    tableName: 'novedades', // nombre de la tabla en la BD
    timestamps: false // Deshabilitar timestamps automáticos (createdAt, updatedAt)
});

// Sincronizar el modelo con la base de datos
Novedades.sync({ alter: true })
    .then(() => {
        console.log("Tabla 'novedades' sincronizada correctamente.");
    })
    .catch((error) => {
        console.error("Error al sincronizar la tabla 'novedades':", error);
    });

// Definir las asociaciones
Novedades.belongsTo(Dependencia, { foreignKey: 'juridiccion_id', as: 'juridiccion' });
Novedades.belongsTo(Departamento, { foreignKey: 'departamento_id', as: 'departamento' });
Novedades.belongsTo(Localidad, { foreignKey: 'localidad_id', as: 'localidad' });
Novedades.belongsTo(Unidad_regional, { foreignKey: 'unidad_regional_id', as: 'unidad_regional' });

module.exports = Novedades;