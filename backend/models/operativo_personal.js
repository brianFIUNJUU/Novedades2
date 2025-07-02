const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Personal = require('./personal');
const Operativo = require('./operativo');
const OperativoCuadrante = require('./operativo_cuadrante'); // Asegúrate de que este modelo esté definido correctamente

const OperativoPersonal = sequelize.define('OperativoPersonal', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  operativo_id: {  // 💡 Asegurar que este campo existe
    type: DataTypes.INTEGER,
    references: {
      model: Operativo,
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
  },
  personal_datos: {
    type: DataTypes.STRING,
    allowNull: true
  },
  personal_legajo: {
    type: DataTypes.STRING,
    allowNull: true
  },
  personal_nombre: {
    type: DataTypes.STRING,
    allowNull: true
  },
  personal_jerarquia: {
    type: DataTypes.STRING,
    allowNull: true
  },
  operativo_cuadrante_id: {
    type: DataTypes.INTEGER,
    references: {
      model: OperativoCuadrante,
      key: 'id'
    },
    allowNull: false
  },
  operativo_cuadrante_nombre: {
    type: DataTypes.STRING,
    allowNull: true
  },

  grupo:{
    type: DataTypes.STRING,

  },
  latitud: {
    type: DataTypes.STRING
  },
    longitud: {
        type: DataTypes.STRING
    },
      asistencia: {
    type: DataTypes.STRING,
  },
  observaciones: {
    type: DataTypes.TEXT,
    allowNull: true
  }

}, {
  tableName: 'operativo_personal',
  timestamps: false
});

module.exports = OperativoPersonal;

OperativoPersonal.belongsTo(Operativo, { foreignKey: 'operativo_id' });
OperativoPersonal.belongsTo(Personal, { foreignKey: 'personal_id' });
OperativoPersonal.belongsTo(OperativoCuadrante, { foreignKey: 'operativo_cuadrante_id' });


OperativoPersonal.sync()
    .then(() => {
        console.log('Tabla "operativo_personal" sincronizada correctamente.');
    })
    .catch((error) => {
        console.error('Error al sincronizar la tabla "operativo_personal":', error);
    });

