const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Cuadrante = require('./cuadrante');
const Operativo = require('./operativo'); // Asegúrate de que este modelo esté definido correctamente
const Personal = require('./personal'); // Asegúrate de que este modelo esté definido correctamente
const Unidad_regional = require('./unidad_regional');

const OperativoCuadrante = sequelize.define('OperativoCuadrante', {
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
  unidad_regional_id: {  // 💡 Asegurar que este campo existe
    type: DataTypes.INTEGER,
    references: {
      model: Unidad_regional,
      key: 'id'
    },
    allowNull: false
  },
  unidad_regional_nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cuadrante_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Cuadrante, // ✅ CORRECTO
      key: 'id'
    },
    allowNull: false
  },
  cuadrante_nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  jefe_cuadrante_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Personal, // ✅ CORRECTO
      key: 'id'
    },
  },
  jefe_cuadrante_nombre: {
    type: DataTypes.STRING,
  },
  jefe_supervisor_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Personal, // ✅ CORRECTO
      key: 'id'
    },
  },
  jefe_supervisor_nombre: {
    type: DataTypes.STRING,
    allowNull: true
  },
  cant_total_personal: {
    type: DataTypes.INTEGER,
  },
  cant_manos_libres: {
    type: DataTypes.INTEGER,
  },
  cant_upcar: {
    type: DataTypes.INTEGER,
  },
  cant_contravencional: {
    type: DataTypes.INTEGER,
  },
  cant_dinamicos: {
    type: DataTypes.INTEGER,
  },
  cant_moviles: {
    type: DataTypes.INTEGER,
  },


}, {
  tableName: 'operativo_cuadrante', // ✅ Aquí está bien
  timestamps: false  // ✅ Aquí sí está bien
});

module.exports = OperativoCuadrante;


OperativoCuadrante.sync()
    .then(() => {
        console.log('Tabla "operativo_cuadrante" sincronizada correctamente.');
    })
    .catch((error) => {
        console.error('Error al sincronizar la tabla "operativo_cuadrante":', error);
    });

