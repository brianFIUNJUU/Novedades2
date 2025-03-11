const Novedades = require('../models/novedades');
const Unidad_regional = require('../models/unidad_regional');
const Persona = require('../models/persona');
const Personal = require('../models/personal');
const Tipo_hecho = require('../models/tipohecho');
const Subtipo_hecho = require('../models/subtipohecho');
const Descripcion_hecho = require('../models/descripcion_hecho');
const Modus_operandi = require('../models/modus_operandi');

// Obtener todas las novedades
exports.getAllNovedades = async (req, res) => {
  try {
    const novedades = await Novedades.findAll({
      include: [
        { model: Unidad_regional, as: 'unidad_regional' },
        { model: Persona, as: 'personas' },
        { model: Personal, as: 'personal_autor' },
        { model: Personal, as: 'oficial_cargo' },
        { model: Tipo_hecho, as: 'tipoHecho' },
        { model: Subtipo_hecho, as: 'subtipoHecho' },
        { model: Descripcion_hecho, as: 'descripcionHecho' },
        { model: Modus_operandi, as: 'modus_operandi' }
      ]
    });

    console.log('Unidad Regional:', Unidad_regional.rawAttributes);
    res.json(novedades);
  } catch (error) {
    console.error('Error al obtener novedades:', error);
    res.status(500).json({ error: 'Error al obtener novedades' });
  }
};

// Obtener una novedad por ID
exports.getNovedadById = async (req, res) => {
  try {
    const novedad = await Novedades.findByPk(req.params.id, {
      include: [
        { model: Persona, as: 'personas' },
        { model: Unidad_regional, as: 'unidad_regional' },
        { model: Personal, as: 'personal_autor' },
        { model: Personal, as: 'oficial_cargo' },
        { model: Tipo_hecho, as: 'tipoHecho' },
        { model: Subtipo_hecho, as: 'subtipoHecho' },
        { model: Descripcion_hecho, as: 'descripcionHecho' },
        { model: Modus_operandi, as: 'modus_operandi' }
      ]
    });
    if (novedad) {
      console.log('Unidad Regional:', Unidad_regional.rawAttributes);
      console.log('Personas asociadas a la novedad:', JSON.stringify(novedad.personas, null, 2)); // Agregar un log para ver las personas asociadas

      res.json(novedad);
    } else {
      res.status(404).json({ error: 'Novedad no encontrada' });
    }
  } catch (error) {
    console.error('Error al obtener novedad:', error);
    res.status(500).json({ error: 'Error al obtener novedad' });
  }
};

// Crear una nueva novedad
exports.createNovedad = async (req, res) => {
  try {
    const { personas, ...novedadData } = req.body;

    // Convertir campos vacíos a null para los campos enteros
    const camposEnteros = ['unidad_regional_id', 'cuadrante_id', 'personal_autor_id', 'oficial_cargo_id', 'tipo_hecho_id', 'subtipo_hecho_id', 'descripcion_hecho_id', 'modus_operandi_id'];
    camposEnteros.forEach(campo => {
      if (novedadData[campo] === '') {
        novedadData[campo] = null;
      }
    });

    console.log('Datos recibidos para crear novedad:', JSON.stringify(novedadData, null, 2)); // Agregar un log para ver los datos recibidos

    const nuevaNovedad = await Novedades.create(novedadData);

    if (personas && personas.length > 0) {
      const personasInstances = await Persona.findAll({
        where: {
          id: personas
        }
      });
      await nuevaNovedad.addPersonas(personasInstances);
      console.log('Personas asociadas a la novedad:', JSON.stringify(personasInstances, null, 2)); // Agregar un log para ver las personas asociadas
    }

    res.status(201).json(nuevaNovedad);
  } catch (error) {
    console.error('Error al crear la novedad:', error);
    res.status(400).json({ error: 'Error al crear la novedad' });
  }
};

// Actualizar una novedad
exports.updateNovedad = async (req, res) => {
  try {
    const { personas, ...novedadData } = req.body;
    const [updated] = await Novedades.update(novedadData, {
      where: { id: req.params.id }
    });

    if (updated) {
      const updatedNovedad = await Novedades.findByPk(req.params.id, {
        include: [
          { model: Unidad_regional, as: 'unidad_regional' },
          { model: Persona, as: 'personas' },
          { model: Personal, as: 'personal_autor' },
          { model: Personal, as: 'oficial_cargo' },
          { model: Tipo_hecho, as: 'tipoHecho' },
          { model: Subtipo_hecho, as: 'subtipoHecho' },
          { model: Descripcion_hecho, as: 'descripcionHecho' },
          { model: Modus_operandi, as: 'modus_operandi' }
        ]
      });

      if (personas && personas.length > 0) {
        const personasIds = personas.map(persona => persona.id); // Asegúrate de que solo se pasen los IDs
        const personasInstances = await Persona.findAll({
          where: {
            id: personasIds
          }
        });
        await updatedNovedad.setPersonas(personasInstances);
        console.log('Personas asociadas a la novedad:', JSON.stringify(personasInstances, null, 2)); // Agregar un log para ver las personas asociadas
      }

      res.status(200).json(updatedNovedad);
    } else {
      res.status(404).json({ error: 'Novedad no encontrada' });
    }
  } catch (error) {
    console.error('Error al actualizar la novedad:', error);
    res.status(400).json({ error: 'Error al actualizar la novedad' });
  }
};

// Eliminar una novedad
exports.deleteNovedad = async (req, res) => {
  try {
    const deleted = await Novedades.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Novedad no encontrada' });
    }
  } catch (error) {
    console.error('Error al eliminar la novedad:', error);
    res.status(400).json({ error: 'Error al eliminar la novedad' });
  }
};

// Obtener personas asociadas a una novedad específica
exports.getPersonasByNovedadId = async (req, res) => {
  try {
    const novedad = await Novedades.findByPk(req.params.id, {
      include: [{ model: Persona, as: 'personas' }]
    });
    if (novedad) {
      res.json(novedad.personas);
    } else {
      res.status(404).json({ error: 'Novedad no encontrada' });
    }
  } catch (error) {
    console.error('Error al obtener personas por novedad:', error);
    res.status(500).send('Error al obtener personas por novedad');
  }
};
exports.getPersonalByNovedadId = async (req, res) => {
  try {
    console.log(`Buscando personal de la novedad ID: ${req.params.id}`);

    const novedad = await Novedades.findByPk(req.params.id, {
      include: [{ model: Personal, as: 'personales' }] // Usa el alias correcto
    });

    if (novedad) {
      console.log('Datos encontrados:', novedad.personales); // Cambia 'personal' a 'personales'
      res.json(novedad.personales);
    } else {
      console.log('Novedad no encontrada');
      res.status(404).json({ error: 'Novedad no encontrada' });
    }
  } catch (error) {
    console.error('Error al obtener personal por novedad:', error);
    res.status(500).json({ error: 'Error al obtener personal por novedad' });
  }
};



// Eliminar una persona de una novedad
exports.deletePersonaFromNovedad = async (req, res) => {
  try {
    const { novedadId, personaId } = req.params;
    const novedad = await Novedades.findByPk(novedadId);
    if (novedad) {
      const persona = await Persona.findByPk(personaId);
      if (persona) {
        await novedad.removePersona(persona);
        res.status(200).json({ msg: 'Persona eliminada de la novedad' });
      } else {
        res.status(404).json({ error: 'Persona no encontrada' });
      }
    } else {
      res.status(404).json({ error: 'Novedad no encontrada' });
    }
  } catch (error) {
    console.error('Error al eliminar persona de la novedad:', error);
    res.status(500).json({ error: 'Error al eliminar persona de la novedad' });
  }
};

// Obtener novedades por legajo del personal autor
exports.getNovedadByPersonalAutorByLegajo = async (req, res) => {
  try {
    const { legajo } = req.params;
    const novedades = await Novedades.findAll({
      where: { personal_autor_legajo: legajo },
      include: [
        { model: Unidad_regional, as: 'unidad_regional' },
        { model: Persona, as: 'personas' },
        { model: Personal, as: 'personal_autor' },
        { model: Personal, as: 'oficial_cargo' },
        { model: Tipo_hecho, as: 'tipoHecho' },
        { model: Subtipo_hecho, as: 'subtipoHecho' },
        { model: Descripcion_hecho, as: 'descripcionHecho' },
        { model: Modus_operandi, as: 'modus_operandi' }
      ]
    });
    res.json(novedades);
  } catch (error) {
    console.error('Error al obtener novedades por legajo del personal autor:', error);
    res.status(500).json({ error: 'Error al obtener novedades por legajo del personal autor' });
  }
};