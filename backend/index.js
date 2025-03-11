const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./database'); // Importamos la conexión a PostgreSQL usando Sequelize
const path = require('path');
const admin = require('firebase-admin');
const fs = require('fs');
const https = require('https');
const app = express();
const Novedades = require('./models/novedades'); // Importa el modelo Novedades desde el directorio models
const Persona = require('./models/persona');
const NovedadPersona = require('./models/novedad_persona');
const NovedadPersonal = require('./models/novedad_personal');
require('./models/associations'); // Importar las relaciones

// Definir las asociaciones
module.exports = {
  Novedades,
  Persona,
  NovedadPersona,
  NovedadPersonal
};

// Sirve archivos estáticos desde el directorio uploads
app.use('/uploads', express.static('uploads'));

// Inicializa Firebase Admin con las credenciales del servicio  
const serviceAccount = require('./config/serviceAccountKey.json'); // Ajusta la ruta según corresponda
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// Middlewares
app.use(cors({  }));

app.use(bodyParser.json({ limit: '10mb' })); // Configura el límite de tamaño del cuerpo JSON
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true })); // Configura el límite para datos URL-encoded

// Cargar los módulos de direccionamiento de rutas
app.use('/api/persona', require('./routes/persona.route.js'));
app.use('/api/dependencia', require('./routes/dependencia.route.js'));
app.use('/api/unidad_regional', require('./routes/unidad_regional.route.js'));
app.use('/api/personal', require('./routes/personal.route.js'));
app.use('/api/departamento', require('./routes/departamento.route.js'));
app.use('/api/localidad', require('./routes/localidad.route.js'));
app.use('/api/cuadrante', require('./routes/cuadrante.route.js'));
app.use('/api/estado', require('./routes/estado.route.js'));
app.use('/api/novedades', require('./routes/novedades.route.js')); // Agregar esta línea
app.use('/api/novedadPersona', require('./routes/novedades_persona.route.js')); // Agregar esta línea
app.use('/api/elemento', require('./routes/elemento.route.js')); // Corregir esta línea
app.use('/api/categoria', require('./routes/categoria.route.js')); 
app.use('/api/tipohecho', require('./routes/tipohecho.route.js')); 
app.use('/api/subtipohecho', require('./routes/subtipohecho.route.js'));
app.use('/api/descripcion_hecho', require('./routes/descripcion_hecho.route.js')); 
app.use('/api/modus_operandi', require('./routes/modus_operandi.route.js'));
app.use('/api/novedadPersonal', require('./routes/novedades_personal.route.js')); // Corregir esta línea

// Endpoint para obtener usuarios
app.get('/api/users', async (req, res) => {
  try {
    const userRecords = await admin.auth().listUsers();
    res.status(200).json(userRecords.users);
  } catch (error) {
    console.error('Error obteniendo usuarios:', error);
    res.status(500).send('Error obteniendo usuarios');
  }
});

// Endpoint para eliminar un usuario
app.delete('/api/users/:uid', async (req, res) => {
  const uid = req.params.uid;
  try {
    // Primero, verifica si el usuario existe
    const userRecord = await admin.auth().getUser(uid);

    if (userRecord) {
      // Si existe, eliminamos el usuario de Firebase Authentication
      await admin.auth().deleteUser(uid);
      
      // Luego, eliminamos el documento correspondiente en Firestore
      await admin.firestore().collection('usuarios').doc(uid).delete();

      res.status(204).send(); // Respuesta sin contenido, indicando éxito
    } else {
      res.status(404).send('Usuario no encontrado');
    }
  } catch (error) {
    if (error.code === 'auth/user-not-found') {
      res.status(404).send('Usuario no encontrado');
    } else {
      console.error('Error eliminando usuario:', error);
      res.status(500).send('Error eliminando usuario');
    }
  }
});

// Sincronización con Sequelize
sequelize.sync().then(() => {
  console.log('Se ha sincronizado la base de datos con Sequelize.');
}).catch(error => {
  console.error('Error al sincronizar Sequelize:', error);
});

// Settings
app.set('port', process.env.PORT || 3000);

// HTTPS configuration (update paths)
const sslOptions = {
  key: fs.readFileSync(path.join(__dirname, 'ssl/192.168.80.31-key.pem')),  // Ruta correcta desde backend
  cert: fs.readFileSync(path.join(__dirname, 'ssl/192.168.80.31.pem'))     // Ruta correcta desde backend
};

// Starting the server with HTTPS
https.createServer(sslOptions, app).listen(app.get('port'), '0.0.0.0', () => {
  console.log(`Servidor HTTPS corriendo en https://0.0.0.0:${app.get('port')}`);
});
