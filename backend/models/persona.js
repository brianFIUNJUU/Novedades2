const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Departamento = require('./departamento');
const Localidad = require('./localidad');
const Estado = require('./estado');
const Persona = sequelize.define('Persona', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,   
        autoIncrement: true 
    },
    nombre: {
        type: DataTypes.STRING,
       
    },
    apellido: {
        type: DataTypes.STRING,
        
    },
    // ...existing code...
    dni: {
      type: DataTypes.STRING,
      allowNull: true, // <-- Permite nulos
      unique: false    // <-- No exige unicidad
    },
    // ...existing code...
    sexo: {
        type: DataTypes.STRING,
    },
   
    provincia: {
        type: DataTypes.STRING,
    },
    departamento_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Departamento,
            key: 'id'
        },
    },

    localidad_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Localidad,
            key: 'id'
        },
    },
  
    domicilio: {
        type: DataTypes.STRING, 
    },
// desde aqui agregue nuevos datos
        departamento_nombre: {
        type: DataTypes.STRING,
    },  
    localidad_nombre: {
        type: DataTypes.STRING,
    },
     genero:{    
        type: DataTypes.STRING,
    },
    numero:{
        type: DataTypes.STRING,
    },
    piso:{
        type: DataTypes.STRING,
    },  
  
    barrio:{
        type: DataTypes.STRING,
    } ,

    email:{
        type: DataTypes.STRING,
    },
    telefono:{
        type: DataTypes.STRING,
    },
    profesion:{
        type: DataTypes.STRING,
    },

    nacionalidad:{
        type: DataTypes.STRING,
    },


    fechaNacimiento: {
        type: DataTypes.STRING,
    },
    edad: {
        type: DataTypes.STRING,
    },
    comparendo: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    demorado:{
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    foto: {
        type: DataTypes.TEXT,
    },
    foto_tipo: {
        type: DataTypes.STRING,
    },
    foto_nombre: {
        type: DataTypes.STRING,
    },
    foto1: {
        type: DataTypes.TEXT,
    },
    foto_tipo1: {
        type: DataTypes.STRING,
    },
    foto_nombre1: {
        type: DataTypes.STRING,
    },
    foto2: {
        type: DataTypes.TEXT,
    },
    foto_tipo2: {
        type: DataTypes.STRING,
    },
    foto_nombre2: {
        type: DataTypes.STRING,
    }
}, {
    tableName: 'personas',
    timestamps: false
});

// Definir las relaciones
Persona.belongsTo(Departamento, { foreignKey: 'departamento_id', as: 'departamento' });
Persona.belongsTo(Localidad, { foreignKey: 'localidad_id', as: 'localidad' });

Persona.associate = function(models) {
    Persona.hasMany(models.Estado, { foreignKey: 'persona_id', as: 'estados' });
  };
// Sincronizar el modelo con la base de datos
Persona.sync()
    .then(() => {
        console.log('Tabla "personas" sincronizada correctamente.');
    })
    .catch((error) => {
        console.error('Error al sincronizar la tabla "personas":', error);
    });

module.exports = Persona;