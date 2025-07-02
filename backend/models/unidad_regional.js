const { DataTypes } = require('sequelize');
const sequelize = require('../database'); // Asegúrate de que la ruta sea correcta

const Unidad_regional = sequelize.define('Unidad_regional', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    unidad_regional: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'unidad_regional', // Nombre de la tabla en la base de datos (en minúsculas)
    timestamps: false // Deshabilitar timestamps automáticos (createdAt, updatedAt)
});

// Sincronizar el modelo con la base de datos para crear la tabla solo si no existe
Unidad_regional.sync({ alter: true }) // Puedes usar { force: false } para no sobreescribir la tabla
    .then(() => {
        console.log("Tabla 'unidad_regional' sincronizada correctamente.");
    })
    .catch((error) => {
        console.error("Error al sincronizar la tabla 'unidad_regional':", error);
    });

module.exports = Unidad_regional;
