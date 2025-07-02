const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const UnidadRegional = require('./unidad_regional');

const Cuadrante = sequelize.define('Cuadrante', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
   nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    unidad_regional_id: {
        type: DataTypes.INTEGER,
        references: {
            model: UnidadRegional,
            key: 'id'
        },
        allowNull: false
    }
}, {
    tableName: 'cuadrante',
    timestamps: false
});

// Definir las asociaciones
Cuadrante.belongsTo(UnidadRegional, { foreignKey: 'unidad_regional_id', as: 'unidadRegional' });

// Sincronizar el modelo con la base de datos
Cuadrante.sync({ alter: true })
    .then(() => {
        console.log("Tabla 'cuadrante' sincronizada correctamente.");
    })
    .catch((error) => {
        console.error("Error al sincronizar la tabla 'cuadrante':", error);
    });

module.exports = Cuadrante;