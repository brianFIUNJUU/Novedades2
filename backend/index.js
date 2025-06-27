const express = require('express');
const cors = require('cors');
const socketIo = require('socket.io');
const bodyParser = require('body-parser');
const sequelize = require('./database'); // Importamos la conexión a PostgreSQL usando Sequelize
const path = require('path');
const admin = require('firebase-admin');
const fs = require('fs');
const uploadDir = 'uploads/personas';
if (!fs.existsSync(uploadDir)){
    fs.mkdirSync(uploadDir, { recursive: true });
}

const https = require('https');
const app = express();
const Novedades = require('./models/novedades'); // Importa el modelo Novedades desde el directorio models
const Persona = require('./models/persona');
const NovedadPersona = require('./models/novedad_persona');
const Usuario = require('./models/usuario'); // Ajusta la ruta según la ubicación de tu modelo

const NovedadPersonal = require('./models/novedad_personal');
require('./models/associations'); // Importar las relaciones

// Definir las asociaciones
module.exports = {
  Novedades,
  Persona,
  NovedadPersona,
  NovedadPersonal
};


// Inicializa Firebase Admin con las credenciales del servicio  
const serviceAccount = require('./config/serviceAccountKey.json'); // Ajusta la ruta según corresponda
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const authenticateFirebaseToken = async (req, res, next) => {
  const idToken = req.headers['authorization']?.split('Bearer ')[1];  // Extraer token del encabezado Authorization
  
  // Verificar si se recibió un token
  // console.log("Token recibido:", idToken);
  
  if (!idToken) {
    return res.status(401).send('Inicia sesion');
  }

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    req.user = decodedToken;  // Almacenar la información del usuario decodificada en la solicitud
    next();  // Continúa con la solicitud si el token es válido
  } catch (error) {
    console.error("Error al verificar el token:", error);
    return res.status(401).send('Invalid token');
  }
};


// Middlewares
app.use(cors({
  origin: "https://10.0.10.233:4200",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true, // Permite el uso de cookies o autenticación si es necesario
}));

app.use(bodyParser.json({ limit: '10mb' })); // Configura el límite de tamaño del cuerpo JSON
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true })); // Configura el límite para datos URL-encoded

// Sirve archivos estáticos desde el directorio uploads
app.use('/uploads', express.static('uploads'));

// Middleware de autenticación global (se aplica a todas las rutas después de este middleware)
app.use(authenticateFirebaseToken);
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
app.use('/api/usuarios', require('./routes/usuario.route.js'));
app.use('/api/mensaje', require('./routes/mensaje.route.js'));
app.use('/api/operativo', require('./routes/operativo_route.js'));
app.use('/api/operativo-personal', require ('./routes/operativoPersonalRoutes.js'));
app.use('/api/operativo-cuadrante', require ('./routes/operativo_cuadrante.route.js')); // Agregar esta línea para la nueva ruta
app.use('/api/archivo-persona', require('./routes/archivo_persona.route.js'));
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

        // Eliminar el usuario también de PostgreSQL
        const usuarioPostgres = await Usuario.findOne({ where: { uid } });
        if (usuarioPostgres) {
          await usuarioPostgres.destroy();
        }

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
// Endpoint para actualizar un usuario por legajo
app.put('/api/users/legajo/:legajo', async (req, res) => {
  const legajo = req.params.legajo;
  const nuevosDatos = req.body;

  try {
    // Buscar el usuario en Firestore por legajo
    const snapshot = await admin.firestore().collection('usuarios').where('legajo', '==', legajo).get();

    if (snapshot.empty) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    const usuarioDoc = snapshot.docs[0].ref;
    
    // Actualizar los datos en Firestore
    await usuarioDoc.update(nuevosDatos);

      // Actualizar en la base de datos PostgreSQL
      const usuarioPostgres = await Usuario.findOne({ where: { legajo } });
      if (usuarioPostgres) {
        // Actualizar los datos en PostgreSQL
        await usuarioPostgres.update({
          email: nuevosDatos.email,
          nombre: nuevosDatos.nombre,
          usuario: nuevosDatos.usuario,
          perfil: nuevosDatos.perfil,
          estado: nuevosDatos.estado
        });
      } else {
        return res.status(404).json({ message: 'Usuario en PostgreSQL no encontrado' });
      }
  
    // Si el usuario tiene un UID en los datos (es decir, está en Firebase Authentication)
    if (nuevosDatos.uid) {
      // Actualizar en Firebase Authentication (si es necesario)
      const { email, nombre, usuario, perfil, estado } = nuevosDatos;

      try {
        await admin.auth().updateUser(nuevosDatos.uid, {
          email: email || null, // Puedes cambiar solo el email si lo envías
          displayName: nombre || null, // Puedes cambiar el nombre si lo envías
          disabled: !estado, // Habilitar o deshabilitar el usuario
        });

        // Si hay más campos en el modelo, puedes agregar más atributos a la actualización de Firebase Authentication aquí.
      } catch (authError) {
        console.error('Error actualizando usuario en Firebase Authentication:', authError);
        return res.status(500).json({ message: 'Error al actualizar usuario en Firebase Authentication' });
      }
    }

    // Obtener los datos actualizados de Firestore
    const usuarioActualizado = (await usuarioDoc.get()).data();

    res.status(200).json(usuarioActualizado);
  } catch (error) {
    console.error('Error actualizando usuario:', error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
});
// Endpoint para obtener un usuario por legajo
app.get('/api/users/legajo/:legajo', async (req, res) => {
  const legajo = req.params.legajo;

  try {
    // Buscar el usuario en Firestore por legajo
    const snapshot = await admin.firestore().collection('usuarios').where('legajo', '==', legajo).get();

    if (snapshot.empty) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    const usuarioDoc = snapshot.docs[0];
    const usuarioFirestore = usuarioDoc.data();

    // Devolver solo los datos de Firestore
    res.status(200).json(usuarioFirestore);

  } catch (error) {
    console.error('Error obteniendo usuario:', error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
});

// Endpoint para obtener un usuario por UID
app.get('/api/users/uid/:uid', async (req, res) => {
  const uid = req.params.uid;

  try {
    // Obtener el documento de Firestore con el mismo UID
    const userDoc = await admin.firestore().collection('usuarios').doc(uid).get();

    if (!userDoc.exists) {
      return res.status(404).json({ message: 'Usuario no encontrado en Firestore' });
    }

    const usuarioFirestore = userDoc.data();
    res.status(200).json(usuarioFirestore);

  } catch (error) {
    console.error('Error obteniendo usuario por UID:', error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
});

// Agrega este endpoint en tu index.js
// Ya existe en tu index.js:
app.get('/api/users', async (req, res) => {
  try {
    const userRecords = await admin.auth().listUsers();
    const users = await Promise.all(userRecords.users.map(async (user) => {
      const userDoc = await admin.firestore().collection('usuarios').doc(user.uid).get();
      const firestoreData = userDoc.exists ? userDoc.data() : {};
      console.log('UID:', user.uid, 'Firestore:', firestoreData);
      return {
        uid: user.uid,
        email: user.email,
        legajo: user.legajo,
        displayName: user.displayName,
        phoneNumber: user.phoneNumber,
        ...firestoreData
      };
    }));

    res.status(200).json(users);
  } catch (error) {
    console.error('Error obteniendo usuarios:', error);
    res.status(500).send('Error obteniendo usuarios');
  }
});
app.get('/api/users/administradores', async (req, res) => {
  try {
    // Consulta solo los usuarios con perfil "administrador"
    const snapshot = await admin.firestore().collection('usuarios')
      .where('perfil', '==', 'administrador')
      .get();

    const administradores = [];
    snapshot.forEach(doc => {
      administradores.push({ uid: doc.id, ...doc.data() });
    });

    res.status(200).json(administradores);
  } catch (error) {
    console.error('Error obteniendo administradores:', error);
    res.status(500).json({ message: 'Error al obtener administradores' });
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
  key: fs.readFileSync(path.join(__dirname, 'ssl/10.0.10.233-key.pem')),
  cert: fs.readFileSync(path.join(__dirname, 'ssl/10.0.10.233.pem'))
};

// Crear el servidor HTTPS y asociarlo a Socket.IO
const server = https.createServer(sslOptions, app);
const io = socketIo(server, {
  cors: {
  methods: ["GET", "POST", "PUT", "DELETE"],
  origin: "https://10.0.10.233:4200", // URL del frontend  cambiar la ip luego de todo 
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
    credentials: true, // Permite autenticación si usas cookies o tokens
  },
  transports: ["websocket"], // Solo permitir WebSocket
});



// Configurar los eventos de Socket.IO para el servicio de mensajes
const { configurarSocket } = require('./controllers/mensaje.controllers');
configurarSocket(io);  // Configura los eventos de socket en el servidor

// Starting the server with HTTPS 
// https.createServer(sslOptions, app).listen(app.get('port'), '0.0.0.0', () => {
//   console.log(`Servidor HTTPS corriendo en https://0.0.0.0:${app.get('port')}`);
// });
// quizas podriamos crear  un certificado que pueda ser utilizado en cualquier ip se puede

// Iniciar el servidor con HTTPS y Socket.IO
server.listen(app.get('port'), '0.0.0.0', () => {
console.log(`🚀 Servidor HTTPS con Socket.IO corriendo en https://10.0.10.233:${app.get('port')}`);
});
