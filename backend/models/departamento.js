const { DataTypes } = require('sequelize');
const sequelize = require('../database'); // Asegúrate de que la ruta sea correcta

// Definir el modelo Departamento
const Departamento = sequelize.define('Departamento', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false, // Si deseas que este campo sea requeridos
    },
}, {
    tableName: 'departamentos', // Nombre de la tabla en la base de datos
    timestamps: false, // Deshabilitar timestamps automáticos (createdAt, updatedAt)
});

// Sincronizar el modelo con la base de datos para crear la tabla solo si no existe
Departamento.sync({ alter: true }) // Puedes usar { force: false } para no sobreescribir
    .then(() => {
        console.log("Tabla 'departamentos' sincronizada correctamente.");
    })
    .catch((error) => {
        console.error("Error al sincronizar la tabla 'departamentos':", error);
    });

module.exports = Departamento;
