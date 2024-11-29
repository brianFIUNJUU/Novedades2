const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Departamento = require('./departamento');
const Localidad = require('./localidad');

// Definir el modelo Personaaa
const Persona = sequelize.define('Persona', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,   
        autoIncrement: true 
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dni: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    telefono: {
        type: DataTypes.STRING,
    },
    provincia: {
        type: DataTypes.STRING,
    },
    departamento_id: { // Cambiar a departamento_id
        type: DataTypes.INTEGER,
        references: {
            model: Departamento,
            key: 'id'
        },
        allowNull: false // Relación con el modelo Departamento
    },
    localidad_id: { // Cambiar a localidad_id
        type: DataTypes.INTEGER,
        references: {
            model: Localidad,
            key: 'id'
        },
        allowNull: false // Relación con el modelo Localidad
    },
    codigoPostal: {
        type: DataTypes.STRING,
    },
    domicilio: {
        type: DataTypes.STRING, 
    },
    fechaNacimiento: {
        type: DataTypes.DATEONLY,
    },
    sexo: {
        type: DataTypes.STRING,
    },
    edad: {
        type: DataTypes.INTEGER,
    }
}, {
    tableName: 'personas', // nombre de la tabla en la BD
    timestamps: false      // Deshabilitar timestamps automáticos (createdAt, updatedAt)
});

// Definir las relaciones
Persona.belongsTo(Departamento, { foreignKey: 'departamento_id', as: 'departamento' });
Persona.belongsTo(Localidad, { foreignKey: 'localidad_id', as: 'localidad' });



module.exports = Persona;
