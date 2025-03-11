const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Personal = require('./personal');
const Novedades = require('./novedades');

const NovedadPersonal = sequelize.define('NovedadPersonal', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  novedad_id: {  // 💡 Asegurar que este campo existe
    type: DataTypes.INTEGER,
    references: {
      model: Novedades,
      key: 'id'
    },
    allowNull: false
  },
  personal_id: {  // 💡 Asegurar que este campo existe
    type: DataTypes.INTEGER,
    references: {
      model: Personal,
      key: 'id'
    },
    allowNull: false
  }
}, {
  tableName: 'novedad_personal',
  timestamps: false
});

module.exports = NovedadPersonal;



NovedadPersonal.sync()
    .then(() => {
        console.log('Tabla "novedad_personal" sincronizada correctamente.');
    })
    .catch((error) => {
        console.error('Error al sincronizar la tabla "novedad_personal":', error);
    });

