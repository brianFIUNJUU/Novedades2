const { DataTypes } = require('sequelize');
const sequelize = require('../database'); // Asegúrate de que la ruta sea correcta

const Modus_operandi = sequelize.define('Modus_Operandi', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    modus_operandi: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: ' modus_operandi', // Nombre de la tabla en la base de datos (en minúsculas)
    timestamps: false // Deshabilitar timestamps automáticos (createdAt, updatedAt)
});

// Sincronizar el modelo con la base de datos para crear la tabla solo si no existe
Modus_operandi.sync({ alter: true }) // Puedes usar { force: false } para no sobreescribir la tabla
    .then(() => {
        console.log("Tabla ' modus_operandi' sincronizada correctamente.");
    })
    .catch((error) => {
        console.error("Error al sincronizar la tabla ' modus_operandi':", error);
    });

module.exports =  Modus_operandi;
