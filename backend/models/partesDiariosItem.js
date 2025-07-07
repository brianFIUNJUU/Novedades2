const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const PartesDiarios = require('./partesDiarios');

const PartesDiariosItem = sequelize.define('PartesDiariosItem', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  parte_diario_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: PartesDiarios,
      key: 'id'
    }
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  hora: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'partes_diarios_items',
  timestamps: false
});

// Relación
PartesDiarios.hasMany(PartesDiariosItem, { foreignKey: 'parte_diario_id', as: 'items' });
PartesDiariosItem.belongsTo(PartesDiarios, { foreignKey: 'parte_diario_id', as: 'parteDiario' });

module.exports = PartesDiariosItem;