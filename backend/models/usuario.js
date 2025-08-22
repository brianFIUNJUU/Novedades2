const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Usuario = sequelize.define('Usuario', {
    uid: { 
        type: DataTypes.STRING,
        primaryKey: true 
    },
    id: { // ID de Firestore (No es clave primaria)
        type: DataTypes.STRING,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
    },
    legajo: {
        type: DataTypes.STRING
    },
    perfil: {
        type: DataTypes.STRING
    },
    usuario: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.BOOLEAN,
    }
}, {
    timestamps: false
       , tableName: 'Usuarios' // <-- ¡Esto es lo importante!

});

Usuario.sync({ alter: true })
  .then(() => {
      console.log("Tabla 'usuario' sincronizada correctamente.");
  })
  .catch((error) => {
      console.error("Error al sincronizar la tabla 'usuario':", error);
  });

module.exports = Usuario;
