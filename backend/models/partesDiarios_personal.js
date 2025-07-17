const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const PartesDiarios = require('./partesDiarios');
const Personal = require('./personal');

const PartesDiariosPersonal = sequelize.define('PartesDiariosPersonal', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  parte_diario_id: {
    type: DataTypes.INTEGER,
    references: {
      model: PartesDiarios,
      key: 'id'
    },
    allowNull: false
  },
  personal_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Personal,
      key: 'id'
    },
    allowNull: false
  },
  personal_datos  : {
    type: DataTypes.STRING,

  },
  // Puedes agregar más campos aquí, por ejemplo:
  rol: {
    type: DataTypes.STRING,
  },
  situacion: {
    type: DataTypes.STRING,
  },
  tipo_personal: {
    type: DataTypes.STRING,
   
  }
}, {
  tableName: 'partes_diarios_personal',
  timestamps: false
});

PartesDiariosPersonal.sync({ alter: true })
  .then(() => {
    console.log("Tabla 'partes_diarios_personal' sincronizada correctamente.");
  })
  .catch((error) => {
    console.error("Error al sincronizar la tabla 'partes_diarios':", error);
  });


// Relaciones
PartesDiarios.belongsToMany(Personal, { through: PartesDiariosPersonal, foreignKey: 'parte_diario_id', as: 'personal' });
Personal.belongsToMany(PartesDiarios, { through: PartesDiariosPersonal, foreignKey: 'personal_id', as: 'partesDiarios' });
PartesDiariosPersonal.belongsTo(Personal, {foreignKey: 'personal_id', as: 'personal' });

module.exports = PartesDiariosPersonal;