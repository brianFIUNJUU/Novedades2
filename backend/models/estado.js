const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database'); // Asegúrate de que la ruta sea correcta

class Estado extends Model {}

Estado.init({
  // Definir los atributos del modelo
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  novedad_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  persona_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  estado: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Estado',
  tableName: 'estados',
  timestamps: false
});

Estado.associate = function(models) {
  Estado.belongsTo(models.Novedades, { foreignKey: 'novedad_id', as: 'novedad' });
  Estado.belongsTo(models.Persona, { foreignKey: 'persona_id', as: 'persona' });
};
Estado.sync({ alter: true })
  .then(() => {
    console.log("Tabla 'estados' sincronizada correctamente.");
  })
  .catch((error) => {
    console.error("Error al sincronizar la tabla 'estados':", error);
  });

module.exports = Estado;