const Items = require('../models/Items');
const PartesDiarios = require('../models/partesDiarios');

// Crear un item
exports.addItem = async (req, res) => {
  try {
    const { parte_diario_id, fecha, hora, titulo, descripcion } = req.body;

    if (!parte_diario_id || !fecha || !hora || !titulo || !descripcion) {
      return res.status(400).json({ error: 'Faltan datos obligatorios' });
    }

    const nuevoItem = await Items.create({
      parte_diario_id,
      fecha,
      hora,
      titulo,
      descripcion
    });

    res.status(201).json(nuevoItem);
  } catch (error) {
    console.error('Error al agregar item:', error);
    res.status(400).json({ error: 'Error al agregar item' });
  }
};

exports.getItemsByParteDiarioId = async (req, res) => {
  try {
    const { parte_diario_id } = req.params;
    const items = await Items.findAll({
      where: { parte_diario_id },
      order: [
        ['fecha', 'ASC'],
        ['hora', 'ASC']
      ]
    });
    res.status(200).json(items);
  } catch (error) {
    console.error('Error al obtener items:', error);
    res.status(400).json({ error: 'Error al obtener items' });
  }
};

// Obtener un item por id
exports.getItemById = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await Items.findByPk(id);
    if (!item) {
      return res.status(404).json({ error: 'Item no encontrado' });
    }
    res.status(200).json(item);
  } catch (error) {
    console.error('Error al obtener el item:', error);
    res.status(400).json({ error: 'Error al obtener el item' });
  }
};

// Actualizar un item
exports.updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { parte_diario_id, fecha, hora, titulo, descripcion } = req.body;

    const item = await Items.findByPk(id);
    if (!item) {
      return res.status(404).json({ error: 'Item no encontrado' });
    }

    await item.update({
      parte_diario_id,
      fecha,
      hora,
      titulo,
      descripcion
    });

    res.status(200).json(item);
  } catch (error) {
    console.error('Error al actualizar el item:', error);
    res.status(400).json({ error: 'Error al actualizar el item' });
  }
};

// Eliminar un item
exports.deleteItem = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Items.destroy({ where: { id } });
    if (!deleted) {
      return res.status(404).json({ error: 'Item no encontrado' });
    }
    res.status(204).send();
  } catch (error) {
    console.error('Error al eliminar el item:', error);
    res.status(400).json({ error: 'Error al eliminar el item' });
  }
};

// Agregar múltiples items
exports.addMultipleItems = async (req, res) => {
  try {
    const { items } = req.body; // Espera un array de objetos con los campos necesarios

    if (!Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: 'Debe enviar un array de items' });
    }

    // Validar que cada objeto tenga los campos obligatorios
    for (const item of items) {
      if (!item.parte_diario_id || !item.fecha || !item.hora || !item.titulo || !item.descripcion) {
        return res.status(400).json({ error: 'Faltan datos obligatorios en uno de los items' });
      }
    }

    const nuevosItems = await Items.bulkCreate(items);

    res.status(201).json(nuevosItems);
  } catch (error) {
    console.error('Error al agregar múltiples items:', error);
    res.status(400).json({ error: 'Error al agregar múltiples items' });
  }
};