// models/localidad.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Categoria = require('./categoria'); // Asegúrate de que la ruta sea correcta

const Elemento = sequelize.define('Elemento', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    elemento_nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
  
    categoria_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Categoria, // Nombre del modelo referenciado
            key: 'id'
        },
     }
}, 
{
    tableName: 'elemento', // Nombre de la tabla en la base de datos
    timestamps: false // Deshabilitar timestamps automáticos (createdAt, updatedAt)
});//sincronizar el modelo con la base de datos de posgrest
// Sincronizar el modelo con la base de datos
Elemento.sync({ alter: true })
    .then(() => {
        console.log("Tabla 'elemento' sincronizada correctamente.");
    })
    .catch((error) => {
        console.error("Error al sincronizar la tabla 'elemento':", error);
    });

// Definir la asociación
Elemento.belongsTo(Categoria, { foreignKey: 'categoria_id', as: 'categoria' }); // Puedes usar el alias que prefieras

module.exports = Elemento;
