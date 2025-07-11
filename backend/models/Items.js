const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const PartesDiarios = require('./partesDiarios');

const Items = sequelize.define('Items', {
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
  fecha: {
    type: DataTypes.STRING,
    allowNull: false
  },
  hora: {
    type: DataTypes.STRING,
    allowNull: false
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  tableName: 'items',
  timestamps: false
});

// Asociación
Items.belongsTo(PartesDiarios, { foreignKey: 'parte_diario_id', as: 'parte_diario' });

// ...definición y asociación...

Items.sync({ alter: true })
  .then(() => {
    console.log("Tabla 'items' sincronizada correctamente.");
  })
  .catch((error) => {
    console.error("Error al sincronizar la tabla 'items':", error);
  });

module.exports = Items;

module.exports = Items;