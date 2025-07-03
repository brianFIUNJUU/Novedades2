const NovedadElemento = require('../models/novedad_elemento');
const Elemento = require('../models/elementos');
const Novedades = require('../models/novedades');

// Obtener todos los elementos de una novedad (con include)
exports.getElementosByNovedad = async (req, res) => {
  try {
    const { novedad_id } = req.params;
    const elementos = await NovedadElemento.findAll({
      where: { novedad_id },
      include: [
        { model: Elemento, as: 'elemento' },
        { model: Novedades, as: 'novedad' }
      ]
    });
    res.json(elementos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener elementos de la novedad.' });
  }
};

// Agregar múltiples elementos a una novedad
exports.agregarElementosMultiplesANovedad = async (req, res) => {
  try {
    const { novedad_id, elementos } = req.body; // elementos: array de objetos
    if (!novedad_id || !Array.isArray(elementos)) {
      return res.status(400).json({ error: 'Datos inválidos.' });
    }
    const nuevos = await NovedadElemento.bulkCreate(
      elementos.map(e => ({ ...e, novedad_id }))
    );
    // Traer los elementos recién creados con include
    const ids = nuevos.map(e => e.id);
    const nuevosConInclude = await NovedadElemento.findAll({
      where: { id: ids },
      include: [
        { model: Elemento, as: 'elemento' },
        { model: Novedades, as: 'novedad' }
      ]
    });
    res.status(201).json(nuevosConInclude);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al agregar elementos.' });
  }
};

// Modificar un elemento de una novedad
exports.modificarElemento = async (req, res) => {
  try {
    const { id } = req.params;
    const cambios = req.body;
    const elemento = await NovedadElemento.findByPk(id);
    if (!elemento) return res.status(404).json({ error: 'Elemento no encontrado.' });
    await elemento.update(cambios);
    // Traer el elemento actualizado con include
    const actualizado = await NovedadElemento.findByPk(id, {
      include: [
        { model: Elemento, as: 'elemento' },
        { model: Novedades, as: 'novedad' }
      ]
    });
    res.json(actualizado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al modificar el elemento.' });
  }
};

// Borrar un elemento de una novedad
exports.borrarElemento = async (req, res) => {
  try {
    const { id } = req.params;
    const eliminado = await NovedadElemento.destroy({ where: { id } });
    if (!eliminado) return res.status(404).json({ error: 'Elemento no encontrado.' });
    res.json({ mensaje: 'Elemento eliminado.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al borrar el elemento.' });
  }
};

// Borrar todos los elementos de una novedad
exports.borrarElementosByNovedad = async (req, res) => {
  try {
    const { novedad_id } = req.params;
    await NovedadElemento.destroy({ where: { novedad_id } });
    res.json({ mensaje: 'Elementos eliminados para la novedad.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al borrar elementos.' });
  }
};

// Modificar múltiples elementos de una novedad
exports.modificarElementosMultiples = async (req, res) => {
  try {
    const { elementos } = req.body; // array de objetos con id y cambios
    if (!Array.isArray(elementos)) {
      return res.status(400).json({ error: 'Datos inválidos.' });
    }
    const resultados = [];
    for (const elem of elementos) {
      const elemento = await NovedadElemento.findByPk(elem.id);
      if (elemento) {
        await elemento.update(elem);
        // Traer el elemento actualizado con include
        const actualizado = await NovedadElemento.findByPk(elem.id, {
          include: [
            { model: Elemento, as: 'elemento' },
            { model: Novedades, as: 'novedad' }
          ]
        });
        resultados.push(actualizado);
      }
    }
    res.json(resultados);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al modificar elementos.' });
  }
};