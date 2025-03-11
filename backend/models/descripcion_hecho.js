const { DataTypes } = require('sequelize');
const sequelize = require('../database'); // Asegúrate de que la ruta sea correcta
const Tipo_hecho = require('./tipohecho'); // Importar el modelo de UnidadRegional
const Subtipohecho = require('./subtipohecho'); 
const Descripcion_hecho = sequelize.define('Descripcion_hecho', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    descripcion_hecho: {
        type: DataTypes.STRING,
        allowNull: false
    },
    codigo: { 
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
    },
    subtipohecho_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Subtipohecho,
            key: 'id'
        },
        allowNull: false
    }
    
}, {
    tableName: 'descripcion_hecho', // Nombre de la tabla en la base de datos (en minúsculas)
    timestamps: false // Deshabilitar timestamps automáticos (createdAt, updatedAt)
});

// Sincronizar el modelo con la base de datos para crear la tabla solo si no existe
Descripcion_hecho.sync({ alter: true }) // Puedes usar { force: false } para no sobreescribir la tabla
    .then(() => {
        console.log("Tabla 'Descripcion_hecho' sincronizada correctamente.");
    })
    .catch((error) => {
        console.error("Error al sincronizar la tabla 'descripcion_hecho':", error);
    });
Descripcion_hecho.belongsTo(Tipo_hecho, { foreignKey: 'tipo_hecho_id', as: 'tipo_hecho' });
Descripcion_hecho.belongsTo(Subtipohecho, { foreignKey: 'subtipohecho_id', as: 'subtipo_hecho' });

module.exports = Descripcion_hecho;
