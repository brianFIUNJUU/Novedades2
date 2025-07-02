const sequelize = require('../database');

const Operativo = require('./operativo');
const OperativoCuadrante = require('./operativo_cuadrante');
const Cuadrante = require('./cuadrante');
const Unidad_regional = require('./unidad_regional');
const Personal = require('./personal');
const OperativoPersonal = require('./operativo_personal');
const Persona = require('./persona');
const NovedadPersona = require('./novedad_persona');

// Relaciones
Operativo.hasMany(OperativoCuadrante, { foreignKey: 'operativo_id' });
OperativoCuadrante.belongsTo(Operativo, { foreignKey: 'operativo_id' });

OperativoCuadrante.belongsTo(Unidad_regional, { foreignKey: 'unidad_regional_id' });
OperativoCuadrante.belongsTo(Cuadrante, { foreignKey: 'cuadrante_id' });
OperativoCuadrante.belongsTo(Personal, { as: 'jefeCuadrante', foreignKey: 'jefe_cuadrante_id' });
OperativoCuadrante.belongsTo(Personal, { as: 'jefeSupervisor', foreignKey: 'jefe_supervisor_id' });
OperativoPersonal.belongsTo(Operativo, { foreignKey: 'operativo_id' });
OperativoPersonal.belongsTo(Personal, { foreignKey: 'personal_id' });
OperativoPersonal.belongsTo(OperativoCuadrante, { foreignKey: 'operativo_cuadrante_id' });
// Aquí defines las asociaciones
NovedadPersona.belongsTo(Persona, { foreignKey: 'persona_id', as: 'persona' });
Persona.hasMany(NovedadPersona, { foreignKey: 'persona_id', as: 'novedadPersonas' });

module.exports = {
  sequelize,
  Operativo,
  OperativoCuadrante,
  Cuadrante,
  Unidad_regional,
  Personal,
  OperativoPersonal,
  Persona,
  NovedadPersona,
};

