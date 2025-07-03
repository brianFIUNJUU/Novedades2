const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Novedades = require('./novedades');
const Elemento = require('./elementos');

const NovedadElemento = sequelize.define('NovedadElemento', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  novedad_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Novedades,
      key: 'id'
    },
    allowNull: false
  }, 
     elemento_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Elemento,
      key: 'id'
    },
    allowNull: false
  },
  elemento_nombre: {
    type: DataTypes.STRING,
    allowNull: true
  },
  categoria_nombre: {
    type: DataTypes.STRING,
    allowNull: true
  },

  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1
  },
  estado: {
    type: DataTypes.STRING, // 'recuperado', 'no recuperado', 'secuestrado', etc.
    allowNull: false
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: true
  },
  tipo: {
    type: DataTypes.STRING,
    allowNull: true
  }

}, {
  tableName: 'novedad_elemento',
  timestamps: false
});

// Asociaciones
NovedadElemento.belongsTo(Novedades, { foreignKey: 'novedad_id', as: 'novedad' });
NovedadElemento.belongsTo(Elemento, { foreignKey: 'elemento_id', as: 'elemento' });

module.exports = NovedadElemento;