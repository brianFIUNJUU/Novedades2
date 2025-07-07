const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Unidad_regional = require('./unidad_regional');
const Dependencia = require('./dependencia');
const Personal = require('./personal');

const PartesDiarios = sequelize.define('PartesDiarios', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  tipoHora: {
    type: DataTypes.STRING,
    allowNull: false
  },
  dependencia_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Dependencia,
      key: 'id'
    },
    allowNull: false
  },
  dependencia_nombre: {
    type: DataTypes.STRING,
    allowNull: true
  },
  unidad_regional_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Unidad_regional,
      key: 'id'
    },
    allowNull: false
  },
  unidad_regional_nombre: {
    type: DataTypes.STRING,
    allowNull: true
  },
  remitente: {
    type: DataTypes.STRING,
    allowNull: false
  },
  hora_desde: {
    type: DataTypes.STRING,
    allowNull: false
  },
  hora_hasta: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lapso: {
    type: DataTypes.STRING,
    allowNull: true
  },
  jefe: {
    type: DataTypes.STRING,
    allowNull: true
  },
  jefe_op: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'partes_diarios',
  timestamps: false
});

// Asociaciones
PartesDiarios.belongsTo(Unidad_regional, { foreignKey: 'unidad_regional_id', as: 'unidad_regional' });
PartesDiarios.belongsTo(Dependencia, { foreignKey: 'dependencia_id', as: 'dependencia' });

PartesDiarios.sync({ alter: true })
  .then(() => {
    console.log("Tabla 'partes_diarios' sincronizada correctamente.");
  })
  .catch((error) => {
    console.error("Error al sincronizar la tabla 'partes_diarios':", error);
  });

module.exports = PartesDiarios;