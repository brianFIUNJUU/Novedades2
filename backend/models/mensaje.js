const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Usuario = require('./usuario');

const Mensaje = sequelize.define('Mensaje', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    remitenteUid: { // Usuario que envía el mensaje
        type: DataTypes.STRING,
        references: {
            model: Usuario,
            key: 'uid' // Referencia al campo uid de Usuario
        }
    },
    destinatarioUid: { // Usuario que recibe el mensaje
        type: DataTypes.STRING,
        references: {
            model: Usuario,
            key: 'uid' // Referencia al campo uid de Usuario
        }
    },
    mensaje: {
        type: DataTypes.TEXT,
    },
    // leido: {
    //     type: DataTypes.BOOLEAN,
       
    // },
    fecha: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    timestamps: false
});

// Relaciones en Sequelize
Mensaje.belongsTo(Usuario, { foreignKey: 'remitenteUid', targetKey: 'uid', as: 'remitente' });
Mensaje.belongsTo(Usuario, { foreignKey: 'destinatarioUid', targetKey: 'uid', as: 'destinatario' });

module.exports = Mensaje;

Mensaje.sync({ alter: true })
    .then(() => {
        console.log("Tabla 'mensaje' sincronizada correctamente.");
    })
    .catch((error) => {
        console.error("Error al sincronizar la tabla 'mensaje':", error);
    });
