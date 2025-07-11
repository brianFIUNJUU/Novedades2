const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const PartesDiarios = require('./partesDiarios');
const Novedades = require('./novedades');

const PartesDiariosNovedad = sequelize.define('PartesDiariosNovedad', {
  parte_diario_id: {
    type: DataTypes.INTEGER,
    references: {
      model: PartesDiarios,
      key: 'id'
    },
    allowNull: false
  },
  novedad_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Novedades,
      key: 'id'
    },
    allowNull: false
  }
}, {
  tableName: 'partesdiarios_novedad',
  timestamps: false
});
PartesDiariosNovedad.sync({ alter: true })
  .then(() => {
    console.log("Tabla 'partes_diarios_nov' sincronizada correctamente.");
  })
  .catch((error) => {
    console.error("Error al sincronizar la tabla 'partes_diarios_nov':", error);
  });
// En partesDiarios.js
PartesDiarios.belongsToMany(Novedades, { through: 'PartesDiariosNovedad', foreignKey: 'parte_diario_id', otherKey: 'novedad_id', as: 'novedades' });

// En novedades.js
Novedades.belongsToMany(PartesDiarios, { through: 'PartesDiariosNovedad', foreignKey: 'novedad_id', otherKey: 'parte_diario_id', as: 'partesDiarios' });
module.exports = PartesDiariosNovedad;