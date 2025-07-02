const { DataTypes } = require('sequelize');
const sequelize = require('../database'); // Asegúrate de que la ruta sea correcta

const Tipo_hecho = sequelize.define('Tipo_hecho', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    tipo_hecho: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'tipo_hecho', // Nombre de la tabla en la base de datos (en minúsculas)
    timestamps: false // Deshabilitar timestamps automáticos (createdAt, updatedAt)
});

// Sincronizar el modelo con la base de datos para crear la tabla solo si no existe
Tipo_hecho.sync({ alter: true }) // Puedes usar { force: false } para no sobreescribir la tabla
    .then(() => {
        console.log("Tabla 'Tipo_hecho' sincronizada correctamente.");
    })
    .catch((error) => {
        console.error("Error al sincronizar la tabla 'Tipo_hecho':", error);
    });

module.exports = Tipo_hecho;
