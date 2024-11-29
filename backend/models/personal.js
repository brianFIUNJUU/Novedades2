const { DataTypes } = require('sequelize');
const sequelize = require('../database'); // Asegúrate de que la ruta sea correcta
const Dependencia = require('./dependencia'); // Importar el modelo Dependencia
const Persona = require('./persona'); // Importar el modelo Persona

const Personal = sequelize.define('Personal', {
    legajo: {
        type: DataTypes.STRING,
        allowNull: false, // Requerido
    },
    escalafon: {
        type: DataTypes.STRING,
        allowNull: false, // Requerido
    },
    jerarquia: {
        type: DataTypes.STRING,
        allowNull: false, // Requerido
    },
    fechaIngreso: {
        type: DataTypes.DATE,
        allowNull: false, // Requerido
    },
    funcionario: {
        type: DataTypes.BOOLEAN,
        allowNull: false, // Requerido
    },
    cargo: {
        type: DataTypes.STRING,
        allowNull: false, // Requerido
    },
    jefe: {
        type: DataTypes.BOOLEAN,
        allowNull: false, // Requerido
    },
    dependenciaId: {
        type: DataTypes.INTEGER,
        references: {
            model: Dependencia, // Nombre del modelo al que se refiere
            key: 'id', // Campo en la tabla de dependencia
        },
        allowNull: false, // Asegúrate de que este campo no sea nulo
    },  
    personaId: {
        type: DataTypes.INTEGER,
        references: {
            model: Persona, // Nombre del modelo al que se refiere
            key: 'id', // Campo en la tabla de persona
        },
        allowNull: false, // Asegúrate de que este campo no sea nulo
    },
}, {
    tableName: 'personal', // Nombre de la tabla en la base de datos
    timestamps: false, // Deshabilitar timestamps automáticos (createdAt, updatedAt)
});

// Definir las relaciones
Personal.belongsTo(Dependencia, { foreignKey: 'dependenciaId', as: 'dependencia' });
Personal.belongsTo(Persona, { foreignKey: 'personaId', as: 'persona' });

// Sincronizar el modelo
Personal.sync({ alter: true }) // Puedes usar { force: false } para no sobreescribir
    .then(() => {
        console.log("Tabla 'personal' sincronizada correctamente.");
    })
    .catch((error) => {
        console.error("Error al sincronizar la tabla 'personal':", error);
    });

module.exports = Personal;
