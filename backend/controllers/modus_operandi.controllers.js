const Modus_operandi = require('../models/modus_operandi'); // Asegúrate de que la ruta sea correcta
const modusOperandiCtrl = {};

// Obtener todos los modus operandi
modusOperandiCtrl.getAllModusOperandi = async (req, res) => {
  try {
    const modusOperandi = await Modus_operandi.findAll();
    res.json(modusOperandi);
  } catch (error) {
    res.status(400).json({
      status: '0',
      msg: 'Error al obtener modus operandi.'
    });
  }
};

// Crear un nuevo modus operandi
modusOperandiCtrl.createModusOperandi = async (req, res) => {
  try {
    const modus = await Modus_operandi.create(req.body);
    res.json({
      status: '1',
      msg: 'Modus operandi guardado correctamente.',
      data: modus
    });
  } catch (error) {
    res.status(400).json({
      status: '0',
      msg: 'Error al guardar modus operandi.'
    });
  }
};

// Obtener un modus operandi por ID
modusOperandiCtrl.getModusOperandiById = async (req, res) => {
  try {
    const modus = await Modus_operandi.findByPk(req.params.id);
    if (modus) {
      res.json(modus);
    } else {
      res.status(404).json({
        msg: 'Modus operandi no encontrado.'
      });
    }
  } catch (error) {
    res.status(400).json({
      status: '0',
      msg: 'Error al obtener el modus operandi.'
    });
  }
};

// Editar un modus operandi
modusOperandiCtrl.editModusOperandi = async (req, res) => {
  try {
    const [updated] = await Modus_operandi.update(req.body, {
      where: { id: req.body.id }
    });
    if (updated) {
      const updatedModus = await Modus_operandi.findByPk(req.body.id);
      res.json({
        status: '1',
        msg: 'Modus operandi actualizado correctamente.',
        data: updatedModus
      });
    } else {
      res.status(404).json({
        msg: 'Modus operandi no encontrado.'
      });
    }
  } catch (error) {
    res.status(400).json({
      status: '0',
      msg: 'Error al actualizar el modus operandi.'
    });
  }
};

// Eliminar un modus operandi
modusOperandiCtrl.deleteModusOperandi = async (req, res) => {
  try {
    const deleted = await Modus_operandi.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.json({
        status: '1',
        msg: 'Modus operandi eliminado correctamente.'
      });
    } else {
      res.status(404).json({
        msg: 'Modus operandi no encontrado.'
      });
    }
  } catch (error) {
    res.status(400).json({
      status: '0',
      msg: 'Error al eliminar el modus operandi.'
    });
  }
};

module.exports = modusOperandiCtrl;