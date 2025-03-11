const Novedades = require('./novedades');
const Persona = require('./persona');
const Estado = require('./estado');

const models = {
  Novedades,
  Persona,
  Estado
};

// Definir las relaciones
Object.keys(models).forEach(modelName => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

module.exports = models;