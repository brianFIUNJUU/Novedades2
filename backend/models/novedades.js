const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Unidad_regional = require('./unidad_regional');
const Personal = require('./personal');
const Persona = require('./persona');
const NovedadPersona = require('./novedad_persona');
const Cuadrante = require('./cuadrante');
const Estado = require('./estado');
const Dependencia = require('./dependencia');
const Tipo_hecho = require('./tipohecho');
const Subtipo_hecho = require('./subtipohecho');
const Descripcion_hecho = require('./descripcion_hecho');
const Modus_operandi = require('./modus_operandi');
const NovedadPersonal = require('./novedad_personal');
const Operativo = require('./operativo');

const Novedades = sequelize.define('Novedades', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  operativo_id: {
  type: DataTypes.INTEGER,
  references: {
    model:Operativo, // nombre de la tabla, no del modelo
    key: 'id'
  },
  allowNull: true // o true si quieres que sea opcional
},
operativo_nombre: {
  type: DataTypes.STRING,
  allowNull: true // o true si quieres que sea opcional
},
  fecha: {
    type: DataTypes.STRING,
  },
  horario: {
    type: DataTypes.STRING,
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
  },
  cuadrante_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Cuadrante,
      key: 'id'
    }
  },
  cuadrante_nombre: {
    type: DataTypes.STRING,
  },
  lugar_hecho: {
    type: DataTypes.STRING,
  },
  latitud: {
    type: DataTypes.STRING,
  },
  longitud: {
    type: DataTypes.STRING,
  },
  origen_novedad: {
    type: DataTypes.STRING,
  },
  horaIncidencia: {
    type: DataTypes.STRING,
  },
  n_incidencia: {
    type: DataTypes.INTEGER,
  },
  unidad_interviniente: {
    type: DataTypes.STRING,
  },
  tipo_hecho_id: {  
    type: DataTypes.INTEGER,
    references: {
      model: Tipo_hecho,
      key: 'id'
    },
  },
  tipo_hecho: {
    type: DataTypes.STRING,
  },
  subtipo_hecho_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Subtipo_hecho,
      key: 'id'
    },
  },
  subtipo_hecho: {
    type: DataTypes.STRING,
  },
  descripcion_hecho_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Descripcion_hecho,
      key: 'id'
    },
  },
  descripcion_hecho: {
    type: DataTypes.STRING,
  },
  codigo: {
    type: DataTypes.STRING,
  },
  modus_operandi_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Modus_operandi,
      key: 'id'
    },
  },
  modus_operandi_nombre: { // Cambiar el nombre del atributo para evitar colisión
    type: DataTypes.STRING,
  },
  descripcion: {
    type: DataTypes.TEXT,
  },
  tipo_lugar: {
    type: DataTypes.STRING,
  },
  personal_autor_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Personal,
      key: 'id'
    }
  },
  personal_autor_nombre: { 
    type: DataTypes.STRING,
  },
  personal_autor_legajo: {
    type: DataTypes.STRING,
  },
  personas_involucrados: {
    type: DataTypes.JSONB,
    allowNull: true,
    defaultValue: []
  },
  elemento_secuestrado: {
    type: DataTypes.JSONB,
    allowNull: true,
    defaultValue: []
  },
  bien_recuperado_no: {
    type: DataTypes.JSONB,
    allowNull: true,
    defaultValue: []
  },
  bien_recuperado: {
    type: DataTypes.JSONB,
    allowNull: true,
    defaultValue: []
  },
  observaciones: {
    type: DataTypes.STRING,
  },
  unidad_actuante: {
    type: DataTypes.STRING
  },
  oficial_cargo_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Personal,
      key: 'id'
    }
  },
  oficial_cargo_nombre: {
    type: DataTypes.STRING,
  },
  estado: {
    type: DataTypes.BOOLEAN,
  }
}, {
  tableName: 'novedades',
  timestamps: false
});

// Crear tablas de manera automatica
Novedades.sync({ alter: true })
  .then(() => {
    console.log("Tabla 'novedades' sincronizada correctamente.");
  })
  .catch((error) => {
    console.error("Error al sincronizar la tabla 'novedades':", error);
  });

// Definir las asociaciones
Novedades.belongsTo(Unidad_regional, { foreignKey: 'unidad_regional_id', as: 'unidad_regional' });
Novedades.belongsTo(Cuadrante, { foreignKey: 'cuadrante_id', as: 'cuadrante' });
Novedades.belongsTo(Modus_operandi, { foreignKey: 'modus_operandi_id', as: 'modus_operandi' });
Novedades.belongsTo(Tipo_hecho, { foreignKey: 'tipo_hecho_id', as: 'tipoHecho' }); // Cambiar alias a 'tipoHecho'
Novedades.belongsTo(Subtipo_hecho, { foreignKey: 'subtipo_hecho_id', as: 'subtipoHecho' }); // Cambiar alias a 'subtipoHecho'
Novedades.belongsTo(Descripcion_hecho, { foreignKey: 'descripcion_hecho_id', as: 'descripcionHecho' }); // Cambiar alias a 'descripcionHecho'
// Asociaciones con el modelo Personal
Novedades.belongsTo(Personal, { foreignKey: 'personal_autor_id', as: 'personal_autor' });
Novedades.belongsTo(Personal, { foreignKey: 'oficial_cargo_id', as: 'oficial_cargo' });
Novedades.belongsToMany(Persona, { through: NovedadPersona, as: 'personas', foreignKey: 'novedad_id' });
Persona.belongsToMany(Novedades, { through: NovedadPersona, as: 'novedades', foreignKey: 'persona_id' });
Novedades.belongsToMany(Personal, { through: NovedadPersonal, as: 'personales', foreignKey: 'novedad_id' });
Personal.belongsToMany(Novedades, { through: NovedadPersonal, as: 'novedades', foreignKey: 'personal_id' });
Novedades.belongsTo(Operativo, {foreignKey: 'operativo_id',as: 'operativo'});

Novedades.associate = function(models) {
  Novedades.hasMany(models.Estado, { foreignKey: 'novedad_id', as: 'estados' });
};

module.exports = Novedades;