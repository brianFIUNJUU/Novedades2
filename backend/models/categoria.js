const { DataTypes } = require('sequelize');
const sequelize = require('../database'); // Asegúrate de que la ruta sea correcta

// Definir el modelo Departamento
const Categoria = sequelize.define('Categoria', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    categoria_nombre: {
        type: DataTypes.STRING,
        allowNull: false, // Si deseas que este campo sea requeridos
    },
}, {
    tableName: 'categoria', // Nombre de la tabla en la base de datos
    timestamps: false, // Deshabilitar timestamps automáticos (createdAt, updatedAt)
});

// Sincronizar el modelo con la base de datos para crear la tabla solo si no existe
Categoria.sync({ alter: true }) // Puedes usar { force: false } para no sobreescribir
    .then(() => {
        console.log("Tabla 'Categoria' sincronizada correctamente.");
    })
    .catch((error) => {
        console.error("Error al sincronizar la tabla 'categoria':", error);
    });

module.exports = Categoria;
