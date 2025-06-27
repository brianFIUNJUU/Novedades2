const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Persona = require('./persona');

const ArchivoPersona = sequelize.define('ArchivoPersona', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  persona_id: {
    type: DataTypes.INTEGER,
    references: { model: Persona, key: 'id' }
  },
  nombre: { type: DataTypes.STRING },
  ruta: { type: DataTypes.STRING }, // ruta o url del archivo
  tipo: { type: DataTypes.STRING },
  fecha_subida: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, {
  tableName: 'archivos_persona',
  timestamps: false
});

ArchivoPersona.belongsTo(Persona, { foreignKey: 'persona_id', as: 'persona' });
Persona.hasMany(ArchivoPersona, { foreignKey: 'persona_id', as: 'archivos' });
ArchivoPersona.sync()
    .then(() => {
        console.log('Tabla "archivo_persona" sincronizada correctamente.');
    })
    .catch((error) => {
        console.error('Error al sincronizar la tabla "archivo_persona":', error);
    });

module.exports = ArchivoPersona;