const { DataTypes } = require('sequelize');
const sequelize = require('../database'); // Asegúrate de que la ruta sea correcta
const Dependencia = require('./dependencia'); // Importar el modelo de Dependencia
const Unidad_regional = require('./unidad_regional');

const Personal = sequelize.define('Personal', {
    id: {
  type: DataTypes.INTEGER,
  primaryKey: true,
  autoIncrement: true
},
    legajo: {
        type: DataTypes.STRING,
        allowNull: false, // Requerido
    },
    jerarquia: {
        type: DataTypes.STRING,
    },
    nombre: {
        type: DataTypes.STRING,
    },
    apellido: {
        type: DataTypes.STRING,
    },
    dni: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false, // Requerido
        validate: {
            isEmail: true // Validar que sea un email
        }
    },
       DependenciaId: {
        type: DataTypes.INTEGER,
        allowNull: true, // <-- esto permite null
        references: {
            model: Dependencia,
            key: 'id'
        },
    },
    dependencia_nombre: {
        type: DataTypes.STRING,
    },
    unidad_regional_nombre: {
        type: DataTypes.STRING,
    },

    unidad_regional_id: {
        type: DataTypes.INTEGER,
          allowNull: true,

        references: {
            model: Unidad_regional,
            key: 'id'
        },
    },
}, {
    tableName: 'personal', // Nombre de la tabla en la base de datos
    timestamps: false, // Deshabilitar timestamps automáticos (createdAt, updatedAt)
});

// Sincronizar el modelo
Personal.sync({ alter: true }) // Puedes usar { force: false } para no sobreescribir
    .then(() => {
        console.log("Tabla 'personal' sincronizada correctamente.");
    })
    .catch((error) => {
        console.error("Error al sincronizar la tabla 'personal':", error);
    });

// Definir las relaciones
Personal.belongsTo(Unidad_regional, { foreignKey: 'unidad_regional_id', as: 'unidad_regional' });
Personal.belongsTo(Dependencia, { foreignKey: 'DependenciaId', as: 'dependencia' });

module.exports = Personal;