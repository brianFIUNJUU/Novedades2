const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Tipo_hecho = require('./tipohecho'); // Importar el modelo de UnidadRegional

const Subtipohecho = sequelize.define('Subtipohecho', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    subtipohecho: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tipo_hecho_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Tipo_hecho,
            key: 'id'
        },
        allowNull: false
    }
}, {
    tableName: 'subtipohecho',
    timestamps: false
});

// Sincronizar el modelo con la base de datos
Subtipohecho.sync({ alter: true })
    .then(() => {
        console.log("Tabla 'Subtipohecho' sincronizada correctamente.");
    })
    .catch((error) => {
        console.error("Error al sincronizar la tabla 'Subtipohecho':", error);
    });

// Definir las asociaciones
Subtipohecho.belongsTo(Tipo_hecho, { foreignKey: 'tipo_hecho_id', as: 'tipo_hecho' });

module.exports = Subtipohecho; 