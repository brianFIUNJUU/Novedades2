const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const UnidadRegional = require('./unidad_regional'); // Importar el modelo de UnidadRegional

const Dependencia = sequelize.define('Dependencia', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    juridiccion: {
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
    tableName: 'dependencias',
    timestamps: false
});

// Sincronizar el modelo con la base de datos
Dependencia.sync({ alter: true })
    .then(() => {
        console.log("Tabla 'dependencias' sincronizada correctamente.");
    })
    .catch((error) => {
        console.error("Error al sincronizar la tabla 'dependencias':", error);
    });

// Definir las asociaciones
Dependencia.belongsTo(UnidadRegional, { foreignKey: 'unidad_regional_id', as: 'unidadRegional' });

module.exports = Dependencia;