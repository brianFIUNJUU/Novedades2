const { DataTypes } = require('sequelize');
const sequelize = require('../database'); // Asegúrate de que la ruta sea correcta
const Dependencia = require('./dependencia'); // Importar el modelo de Dependencia
const Unidad_regional = require('./unidad_regional');

const Personal = sequelize.define('Personal', {
    legajo: {
        type: DataTypes.STRING,
        allowNull: false, // Requerido
    },
    jerarquia: {
        type: DataTypes.STRING,
        allowNull: false, // Requerido
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false, // Requerido
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false, // Requerido
    },
    dni: {
        type: DataTypes.STRING,
        allowNull: false, // Requerido
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
        references: {
            model: Dependencia,
            key: 'id'
        },
        allowNull: false
    },
    unidad_regional_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Unidad_regional,
            key: 'id'
        },
        allowNull: false        
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