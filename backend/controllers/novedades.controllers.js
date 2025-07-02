const Novedades = require('../models/novedades');
const Unidad_regional = require('../models/unidad_regional');
const Persona = require('../models/persona');
const Personal = require('../models/personal');
const Tipo_hecho = require('../models/tipohecho');
const Subtipo_hecho = require('../models/subtipohecho');
const Descripcion_hecho = require('../models/descripcion_hecho');
const Modus_operandi = require('../models/modus_operandi');
const Operativo = require('../models/operativo'); // Agrega esta línea

const { Op } = require('sequelize');

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
        { model: Modus_operandi, as: 'modus_operandi' },
            { model: Operativo, as: 'operativo' } // <-- Agrega esto en todos los métodos que retornan novedades

      ]
    });


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
        { model: Modus_operandi, as: 'modus_operandi' },
            { model: Operativo, as: 'operativo' } // <-- Agrega esto en todos los métodos que retornan novedades

      ]
    });
    if (novedad) {


      res.json(novedad);
    } else {
      res.status(404).json({ error: 'Novedad no encontrada' });
    }
  } catch (error) {
    console.error('Error al obtener novedad:', error);
    res.status(500).json({ error: 'Error al obtener novedad' });
  }
};
// Obtener novedades solo del día de hoy


// Crear una nueva novedad
exports.createNovedad = async (req, res) => {
  try {
    const { personas, ...novedadData } = req.body;

    // Convertir campos vacíos a null para los campos enteros
    const camposEnteros = ['unidad_regional_id', 'cuadrante_id', 'personal_autor_id', 'oficial_cargo_id', 'tipo_hecho_id', 'subtipo_hecho_id', 'descripcion_hecho_id', 'modus_operandi_id',  'operativo_id' ];
    camposEnteros.forEach(campo => {
      if (novedadData[campo] === '') {
        novedadData[campo] = null;
      }
    });

    // Obtener el ID máximo actual
    const maxId = await Novedades.max('id');
    const newId = maxId !== null ? maxId + 1 : 1;

    // Crear la novedad con el nuevo ID
    const nuevaNovedad = await Novedades.create({ ...novedadData, id: newId });

    if (personas && personas.length > 0) {
      const personasInstances = await Persona.findAll({
        where: {
          id: personas
        }
      });
      await nuevaNovedad.addPersonas(personasInstances);
    }

    res.status(201).json(nuevaNovedad);
  } catch (error) {
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
          { model: Modus_operandi, as: 'modus_operandi' },
              { model: Operativo, as: 'operativo' } // <-- Agrega esto en todos los métodos que retornan novedades

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
      }

      res.status(200).json(updatedNovedad);
    } else {
      res.status(404).json({ error: 'Novedad no encontrada' });
    }
  } catch (error) {
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
    res.status(500).send('Error al obtener personas por novedad');
  }
};
exports.getPersonalByNovedadId = async (req, res) => {
  try {

    const novedad = await Novedades.findByPk(req.params.id, {
      include: [{ model: Personal, as: 'personales' }] // Usa el alias correcto
    });

    if (novedad) {
      res.json(novedad.personales);
    } else {
      res.status(404).json({ error: 'Novedad no encontrada' });
    }
  } catch (error) {
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
        { model: Modus_operandi, as: 'modus_operandi' },
            { model: Operativo, as: 'operativo' } // <-- Agrega esto en todos los métodos que retornan novedades

      ]
    });
    res.json(novedades);
  } catch (error) {
    console.error('Error al obtener novedades por legajo del personal autor:', error);
    res.status(500).json({ error: 'Error al obtener novedades por legajo del personal autor' });
  }
};
exports.getNovedadByToday = async (req, res) => {
  try {
    // Obtener la fecha de hoy en formato YYYY-MM-DD
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const todayStr = `${yyyy}-${mm}-${dd}`;

    const novedades = await Novedades.findAll({
      where: { fecha: todayStr },
      include: [
        { model: Unidad_regional, as: 'unidad_regional' },
        { model: Persona, as: 'personas' },
        { model: Personal, as: 'personal_autor' },
        { model: Personal, as: 'oficial_cargo' },
        { model: Tipo_hecho, as: 'tipoHecho' },
        { model: Subtipo_hecho, as: 'subtipoHecho' },
        { model: Descripcion_hecho, as: 'descripcionHecho' },
        { model: Modus_operandi, as: 'modus_operandi' },
            { model: Operativo, as: 'operativo' } // <-- Agrega esto en todos los métodos que retornan novedades

      ]
    });
    res.json(novedades);
  } catch (error) {
    console.error('Error al obtener novedades de hoy:', error);
    res.status(500).json({ error: 'Error al obtener novedades de hoy' });
  }
};
exports.getNovedadesByLegajoByToday = async (req, res) => {
  try {
    const { legajo } = req.params;
    // Obtener la fecha de hoy en formato YYYY-MM-DD
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const todayStr = `${yyyy}-${mm}-${dd}`;

    const novedades = await Novedades.findAll({
      where: {
        personal_autor_legajo: legajo,
        fecha: todayStr
      },
      include: [
        { model: Unidad_regional, as: 'unidad_regional' },
        { model: Persona, as: 'personas' },
        { model: Personal, as: 'personal_autor' },
        { model: Personal, as: 'oficial_cargo' },
        { model: Tipo_hecho, as: 'tipoHecho' },
        { model: Subtipo_hecho, as: 'subtipoHecho' },
        { model: Descripcion_hecho, as: 'descripcionHecho' },
        { model: Modus_operandi, as: 'modus_operandi' },
        { model: Operativo, as: 'operativo' } // <-- Agrega esto en todos los métodos que retornan novedades

      ]
    });
    res.json(novedades);
  } catch (error) {
    console.error('Error al obtener novedades de hoy por legajo:', error);
    res.status(500).json({ error: 'Error al obtener novedades de hoy por legajo' });
  }
};

exports.getNovedadByRangoFecha = async (req, res) => {
  try {
    const { fechaInicio, fechaFin } = req.query;

    if (!fechaInicio || !fechaFin) {
      return res.status(400).json({ error: 'Debe proporcionar fechaInicio y fechaFin en el query string' });
    }

    const novedades = await Novedades.findAll({
      where: {
        fecha: {
          [require('sequelize').Op.between]: [fechaInicio, fechaFin]
        }
      },
      include: [
        { model: Unidad_regional, as: 'unidad_regional' },
        { model: Persona, as: 'personas' },
        { model: Personal, as: 'personal_autor' },
        { model: Personal, as: 'oficial_cargo' },
        { model: Tipo_hecho, as: 'tipoHecho' },
        { model: Subtipo_hecho, as: 'subtipoHecho' },
        { model: Descripcion_hecho, as: 'descripcionHecho' },
        { model: Modus_operandi, as: 'modus_operandi' },
            { model: Operativo, as: 'operativo' } // <-- Agrega esto en todos los métodos que retornan novedades

      ]
    });
    res.json(novedades);
  } catch (error) {
    console.error('Error al obtener novedades por rango de fecha:', error);
    res.status(500).json({ error: 'Error al obtener novedades por rango de fecha' });
  }
};


exports.getNovedadByLegajoByRangoFecha = async (req, res) => {
  try {
    const { legajo } = req.params;
    const { fechaInicio, fechaFin } = req.query;

    if (!fechaInicio || !fechaFin) {
      return res.status(400).json({ error: 'Debe proporcionar fechaInicio y fechaFin en el query string' });
    }

    const novedades = await Novedades.findAll({
      where: {
        personal_autor_legajo: legajo,
        fecha: {
          [Op.between]: [fechaInicio, fechaFin]
        }
      },
      include: [
        { model: Unidad_regional, as: 'unidad_regional' },
        { model: Persona, as: 'personas' },
        { model: Personal, as: 'personal_autor' },
        { model: Personal, as: 'oficial_cargo' },
        { model: Tipo_hecho, as: 'tipoHecho' },
        { model: Subtipo_hecho, as: 'subtipoHecho' },
        { model: Descripcion_hecho, as: 'descripcionHecho' },
        { model: Modus_operandi, as: 'modus_operandi' },
            { model: Operativo, as: 'operativo' } // <-- Agrega esto en todos los métodos que retornan novedades

      ]
    });
    res.json(novedades);
  } catch (error) {
    console.error('Error al obtener novedades por legajo y rango de fecha:', error);
    res.status(500).json({ error: 'Error al obtener novedades por legajo y rango de fecha' });
  }
};
exports.getNovedadByUnidadRegional = async (req, res) => {
  try {
    const { unidad_regional_id } = req.params;
    const novedades = await Novedades.findAll({
      where: { unidad_regional_id },
      include: [
        { model: Unidad_regional, as: 'unidad_regional' },
        { model: Persona, as: 'personas' },
        { model: Personal, as: 'personal_autor' },
        { model: Personal, as: 'oficial_cargo' },
        { model: Tipo_hecho, as: 'tipoHecho' },
        { model: Subtipo_hecho, as: 'subtipoHecho' },
        { model: Descripcion_hecho, as: 'descripcionHecho' },
        { model: Modus_operandi, as: 'modus_operandi' },
            { model: Operativo, as: 'operativo' } // <-- Agrega esto en todos los métodos que retornan novedades

      ]
    });
    res.json(novedades);
  } catch (error) {
    console.error('Error al obtener novedades por unidad regional:', error);
    res.status(500).json({ error: 'Error al obtener novedades por unidad regional' });
  }
};

exports.getNovedadByUnidadRegionalByToday = async (req, res) => {
  try {
    const { unidad_regional_id } = req.params;
    // Obtener la fecha de hoy en formato YYYY-MM-DD
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const todayStr = `${yyyy}-${mm}-${dd}`;

    const novedades = await Novedades.findAll({
      where: {
        unidad_regional_id,
        fecha: todayStr
      },
      include: [
        { model: Unidad_regional, as: 'unidad_regional' },
        { model: Persona, as: 'personas' },
        { model: Personal, as: 'personal_autor' },
        { model: Personal, as: 'oficial_cargo' },
        { model: Tipo_hecho, as: 'tipoHecho' },
        { model: Subtipo_hecho, as: 'subtipoHecho' },
        { model: Descripcion_hecho, as: 'descripcionHecho' },
        { model: Modus_operandi, as: 'modus_operandi' },
            { model: Operativo, as: 'operativo' } // <-- Agrega esto en todos los métodos que retornan novedades

      ]
    });
    res.json(novedades);
  } catch (error) {
    console.error('Error al obtener novedades de hoy por unidad regional:', error);
    res.status(500).json({ error: 'Error al obtener novedades de hoy por unidad regional' });
  }
};
 // Obtener novedades por unidad regional y rango de fecha
exports.getNovedadByUnidadRegionalByRangoFecha = async (req, res) => {
  try {
    const { unidad_regional_id } = req.params;
    const { fechaInicio, fechaFin } = req.query;

    if (!fechaInicio || !fechaFin) {
      return res.status(400).json({ error: 'Debe proporcionar fechaInicio y fechaFin en el query string' });
    }

    const novedades = await Novedades.findAll({
      where: {
        unidad_regional_id,
        fecha: {
          [Op.between]: [fechaInicio, fechaFin]
        }
      },
      include: [
        { model: Unidad_regional, as: 'unidad_regional' },
        { model: Persona, as: 'personas' },
        { model: Personal, as: 'personal_autor' },
        { model: Personal, as: 'oficial_cargo' },
        { model: Tipo_hecho, as: 'tipoHecho' },
        { model: Subtipo_hecho, as: 'subtipoHecho' },
        { model: Descripcion_hecho, as: 'descripcionHecho' },
        { model: Modus_operandi, as: 'modus_operandi' },
            { model: Operativo, as: 'operativo' } // <-- Agrega esto en todos los métodos que retornan novedades


      ]
    });
    res.json(novedades);
  } catch (error) {
    console.error('Error al obtener novedades por unidad regional y rango de fecha:', error);
    res.status(500).json({ error: 'Error al obtener novedades por unidad regional y rango de fecha' });
  }
};
// ...existing code...

// Obtener novedades por operativo_id
exports.getNovedadesByOperativo = async (req, res) => {
  try {
    const { operativo_id } = req.params;
    const novedades = await Novedades.findAll({
      where: { operativo_id },
      include: [
        { model: Unidad_regional, as: 'unidad_regional' },
        { model: Persona, as: 'personas' },
        { model: Personal, as: 'personal_autor' },
        { model: Personal, as: 'oficial_cargo' },
        { model: Tipo_hecho, as: 'tipoHecho' },
        { model: Subtipo_hecho, as: 'subtipoHecho' },
        { model: Descripcion_hecho, as: 'descripcionHecho' },
        { model: Modus_operandi, as: 'modus_operandi' },
        { model: Operativo, as: 'operativo' }
      ]
    });
    res.json(novedades);
  } catch (error) {
    console.error('Error al obtener novedades por operativo:', error);
    res.status(500).json({ error: 'Error al obtener novedades por operativo' });
  }
};
// 9111 es la incidencia que debe buscar ´pr n de incidncia dependiendo la incidencia que fue guardada, quizas podria hacer obligatorio el campo de incidencia para que no se pueda guardar una novedad sin una incidencia

// Obtener novedades por n_incidencia
exports.getNovedadesByNIncidencia = async (req, res) => {
  try {
    const { n_incidencia } = req.params;
    const novedades = await Novedades.findAll({
      where: { n_incidencia },
     
    });
    res.json(novedades);
  } catch (error) {
    console.error('Error al obtener novedades por n_incidencia:', error);
    res.status(500).json({ error: 'Error al obtener novedades por n_incidencia' });
  }
};

// Obtener novedades por origen_novedad
exports.getNovedadesByOrigen = async (req, res) => {
  try {
    const { origen } = req.params;
    const novedades = await Novedades.findAll({
      where: { origen_novedad: origen },
      include: [
        { model: Unidad_regional, as: 'unidad_regional' },
        { model: Persona, as: 'personas' },
        { model: Personal, as: 'personal_autor' },
        { model: Personal, as: 'oficial_cargo' },
        { model: Tipo_hecho, as: 'tipoHecho' },
        { model: Subtipo_hecho, as: 'subtipoHecho' },
        { model: Descripcion_hecho, as: 'descripcionHecho' },
        { model: Modus_operandi, as: 'modus_operandi' },
        { model: Operativo, as: 'operativo' }
      ]
    });
    res.json(novedades);
  } catch (error) {
    console.error('Error al obtener novedades por origen:', error);
    res.status(500).json({ error: 'Error al obtener novedades por origen' });
  }
};
