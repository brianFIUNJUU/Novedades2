const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const ArchivoPersona = require('../models/ArchivoPersona');

exports.subirArchivo = async (req, res) => {
  try {
    const personaId = req.params.id;
    const file = req.file;

    if (!file) {
      return res.status(400).json({ error: 'No se subió ningún archivo.' });
    }

    // Detecta si es imagen
    const esImagen = file.mimetype.startsWith('image/');
    let outputPath = path.join('uploads/personas', file.filename);

       if (esImagen) {
      outputPath = path.join('uploads/personas', `resized-${file.filename}`);
     try {
          await sharp(file.path)
            .resize(800)
            .toFile(outputPath);

          try {
            await fs.promises.unlink(file.path);
          } catch (unlinkErr) {
            console.warn('No se pudo borrar archivo temporal:', unlinkErr.message);
          }
        } catch (sharpError) {
          try {
            await fs.promises.unlink(file.path);
          } catch (unlinkErr) {
            console.warn('No se pudo borrar después del error de Sharp:', unlinkErr.message);
          }

          return res.status(400).json({ error: 'La imagen JPEG está corrupta o incompleta.' });
        }

    } else {
      outputPath = file.path;
    }
    const archivo = await ArchivoPersona.create({
      persona_id: personaId,
      nombre: file.originalname,
      ruta: outputPath,
      tipo: file.mimetype
    });

    res.status(201).json({ archivo });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al subir el archivo.' });
  }
};
exports.borrarArchivo = async (req, res) => {
  try {
    const archivoId = req.params.archivoId;
    const archivo = await ArchivoPersona.findByPk(archivoId);

    if (!archivo) {
      return res.status(404).json({ error: 'Archivo no encontrado.' });
    }

    // Borra el archivo físico si existe
    if (fs.existsSync(archivo.ruta)) {
      fs.unlinkSync(archivo.ruta);
    }

    // Borra el registro en la base de datos
    await archivo.destroy();

    res.json({ mensaje: 'Archivo borrado correctamente.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al borrar el archivo.' });
  }
};
exports.listarArchivosPorPersona = async (req, res) => {
  try {
    const personaId = req.params.personaId;
    const archivos = await ArchivoPersona.findAll({
      where: { persona_id: personaId },
      order: [['fecha_subida', 'DESC']]
    });
    res.json(archivos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los archivos.' });
  }
};
exports.eliminarArchivosByPersona = async (req, res) => {
  try {
    const personaId = req.params.personaId;
    const archivos = await ArchivoPersona.findAll({ where: { persona_id: personaId } });

    // Eliminar archivos físicos
    for (const archivo of archivos) {
      if (fs.existsSync(archivo.ruta)) {
        try {
          fs.unlinkSync(archivo.ruta);
        } catch (err) {
          console.warn(`No se pudo borrar el archivo físico: ${archivo.ruta}`);
        }
      }
    }

    // Eliminar registros en la base de datos
    await ArchivoPersona.destroy({ where: { persona_id: personaId } });

    res.json({ mensaje: 'Todos los archivos de la persona fueron eliminados correctamente.' });
  } catch (error) {
    console.error('Error al eliminar archivos por persona:', error);
    res.status(500).json({ error: 'Error al eliminar archivos por persona.' });
  }
};