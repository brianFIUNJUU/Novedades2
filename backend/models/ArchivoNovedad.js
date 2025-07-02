const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Novedad = require('./novedades');

const ArchivoNovedad = sequelize.define('ArchivoNovedad', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  novedad_id: {
    type: DataTypes.INTEGER,
    references: { model: Novedad, key: 'id' }
  },
  nombre: { type: DataTypes.STRING },
  ruta: { type: DataTypes.STRING },
  tipo: { type: DataTypes.STRING },
  fecha_subida: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, {
  tableName: 'archivos_novedad',
  timestamps: false
});

ArchivoNovedad.belongsTo(Novedad, { foreignKey: 'novedad_id', as: 'novedad' });
Novedad.hasMany(ArchivoNovedad, { foreignKey: 'novedad_id', as: 'archivos' });

ArchivoNovedad.sync()
  .then(() => console.log('Tabla archivos_novedad sincronizada.'))
  .catch((err) => console.error('Error al sincronizar archivos_novedad:', err));

module.exports = ArchivoNovedad;
