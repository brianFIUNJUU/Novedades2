const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const ArchivoNovedad = require('../models/ArchivoNovedad');

exports.subirArchivo = async (req, res) => {
  try {
    const novedadId = req.params.id;
    const file = req.file;

    if (!file) {
      return res.status(400).json({ error: 'No se subió ningún archivo.' });
    }

    // Detecta si es una imagen
    const esImagen = file.mimetype.startsWith('image/');
    let outputPath = path.join('uploads/novedades', file.filename);

    if (esImagen) {
      outputPath = path.join('uploads/novedades', `resized-${file.filename}`);

      try {
        await sharp(file.path)
          .resize(800)
          .toFile(outputPath);

        // Borrar archivo temporal original
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

    // Guardar en base de datos
    const archivo = await ArchivoNovedad.create({
      novedad_id: novedadId,
      nombre: file.originalname,
      ruta: outputPath,
      tipo: file.mimetype
    });

    res.status(201).json({ archivo });
  } catch (error) {
    console.error('Error al subir el archivo:', error);
    res.status(500).json({ error: 'Error al subir el archivo.' });
  }
};

exports.borrarArchivo = async (req, res) => {
  try {
    const archivoId = req.params.archivoId;
    const archivo = await ArchivoNovedad.findByPk(archivoId);

    if (!archivo) {
      return res.status(404).json({ error: 'Archivo no encontrado.' });
    }

    // Borrar archivo físico
    if (fs.existsSync(archivo.ruta)) {
      fs.unlinkSync(archivo.ruta);
    }

    // Borrar de la base de datos
    await archivo.destroy();

    res.json({ mensaje: 'Archivo borrado correctamente.' });
  } catch (error) {
    console.error('Error al borrar el archivo:', error);
    res.status(500).json({ error: 'Error al borrar el archivo.' });
  }
};

exports.listarArchivosPorNovedad = async (req, res) => {
  try {
    const novedadId = req.params.novedadId;
    const archivos = await ArchivoNovedad.findAll({
      where: { novedad_id: novedadId },
      order: [['fecha_subida', 'DESC']]
    });

    res.json(archivos);
  } catch (error) {
    console.error('Error al obtener los archivos:', error);
    res.status(500).json({ error: 'Error al obtener los archivos.' });
  }
};
