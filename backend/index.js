const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./database'); // Importamos la conexión a PostgreSQL usando Sequelize
const path = require('path');
const app = express();
const admin = require('firebase-admin');

// Sirve archivos estáticos desde el directorio uploads
app.use('/uploads', express.static('uploads'));

// Inicializa Firebase Admin con las credenciales del servicio  
const serviceAccount = require('./config/serviceAccountKey.json'); // Ajusta la ruta según corresponda
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// Middlewares
app.use(cors({ origin: 'http://localhost:4200' })); // Asegúrate de que esta sea la URL correcta
app.use(bodyParser.json({ limit: '10mb' })); // Configura el límite de tamaño del cuerpo JSON
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true })); // Configura el límite para datos URL-encoded

// Cargar los módulos de direccionamiento de rutas
app.use('/api/persona', require('./routes/persona.route.js'));
app.use('/api/dependencia', require('./routes/dependencia.route.js'));
app.use('/api/unidad_regional', require('./routes/unidad_regional.route.js'));
app.use('/api/personal', require('./routes/personal.route.js'));
app.use('/api/departamento', require('./routes/departamento.route.js'));
app.use('/api/localidad', require('./routes/localidad.route.js'));
// app.use('/api/funcionario', require('./routes/funcionario.route.js'));
app.use('/api/vigilancia', require('./routes/vigilancia.route.js'));
app.use('/api/novedades', require('./routes/novedades.route.js')); // Agregar esta línea

// app.use('/api/turno', require('./routes/turno.route.js'));

// Sincronización de Sequelize y recreación de tablas (esto elimina los datos existentes)
 
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

// Starting the server
app.listen(app.get('port'), () => {
  console.log(`Server started on port ${app.get('port')}`);
});
