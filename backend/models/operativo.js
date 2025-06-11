const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Unidad_regional = require('./unidad_regional');
const Novedades = require('./novedades'); // Asegúrate de importar el modelo


const Operativo = sequelize.define('Operativo', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre_operativo: {
        type: DataTypes.STRING,
        allowNull: false
    },

    turno: {
        type: DataTypes.STRING
    },
    observaciones: { 
        type: DataTypes.STRING
    },
    fecha_desde: {
        type: DataTypes.DATEONLY,
        
    },
    fecha_hasta: {
        type: DataTypes.DATEONLY,
        
    },

    horario_desde: {
        type: DataTypes.STRING
    },
    horario_hasta: {
        type: DataTypes.STRING
    },
    cant_total_personal: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
     unidades_regionales: {
        type: DataTypes.JSON,
        allowNull: true
    },
}, {
    tableName: 'operativo',
    timestamps: false
});


module.exports = Operativo;
// Sincronizar el modelo con la base de datos
Operativo.sync()
    .then(() => {
        console.log('Tabla "operativo" sincronizada correctamente.');
    })
    .catch((error) => {
        console.error('Error al sincronizar la tabla "operativo":', error);
});

// Operativo.hasMany(Novedades, {
//   foreignKey: 'operativo_id',
//   as: 'novedades'
// });

  Operativo.associate = function(models) {
    Operativo.hasMany(models.Novedades, {
      foreignKey: 'operativo_id', // clave foránea en Novedades
      as: 'novedades'
    });
  };