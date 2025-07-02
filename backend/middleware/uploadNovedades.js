const multer = require('multer');
const path = require('path');

// Almacén personalizado para novedades
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/novedades/');
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, `${req.params.id}-${Date.now()}${ext}`);
  }
});

const uploadNovedades = multer({ storage });

module.exports = uploadNovedades;
