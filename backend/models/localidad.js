// models/localidad.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Departamento = require('./departamento'); // Asegúrate de que la ruta sea correcta

const Localidad = sequelize.define('Localidad', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    latitud: {
        type: DataTypes.STRING,
     
    },
    longitud: {
        type: DataTypes.STRING,

    },
    departamento_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Departamento,
            key: 'id'
        },
        allowNull: false // Asegúrate de que sea obligatorio
    }
}, {
    tableName: 'localidades', // Nombre de la tabla en la base de datos
    timestamps: false // Deshabilitar timestamps automáticos (createdAt, updatedAt)
});//sincronizar el modelo con la base de datos de posgrest
// Sincronizar el modelo con la base de datos
Localidad.sync({ alter: true })
    .then(() => {
        console.log("Tabla 'localidades' sincronizada correctamente.");
    })
    .catch((error) => {
        console.error("Error al sincronizar la tabla 'localidades':", error);
    });

// Definir la asociación
Localidad.belongsTo(Departamento, { foreignKey: 'departamento_id', as: 'departamento' }); // Puedes usar el alias que prefieras

module.exports = Localidad;
