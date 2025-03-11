const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const NovedadPersona = sequelize.define('NovedadPersona', {
    novedad_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: 'Novedades',
            key: 'id'
        }
    },
    persona_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: 'Personas',
            key: 'id'
        }
    }
}, {
    tableName: 'novedad_persona',
    timestamps: false
});


NovedadPersona.sync()
    .then(() => {
        console.log('Tabla "novedad_persona" sincronizada correctamente.');
    })
    .catch((error) => {
        console.error('Error al sincronizar la tabla "novedad_persona":', error);
    });

module.exports = NovedadPersona;