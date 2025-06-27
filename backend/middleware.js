const multer = require('multer');
const path = require('path');

// Carpeta donde se guardarán los archivos
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/personas/');
  },
  filename: function (req, file, cb) {
    // Nombre único: personaId-timestamp.ext
    const ext = path.extname(file.originalname);
    cb(null, `${req.params.id}-${Date.now()}${ext}`);  }
});

const upload = multer({ storage });

module.exports = upload;