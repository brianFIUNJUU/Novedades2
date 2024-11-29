// // este es mi archivo database
// const mongoose = require('mongoose');
// // const URI = 'mongodb://localhost:27017/ministeriodb';
// const URI = 'mongodb://127.0.0.1:27017/ministeriodb';
// mongoose.connect(URI)
// .then(db=>console.log('DB is connected'))
// .catch(err=>console.error(err))
// module.exports = mongoose;
const { Sequelize } = require('sequelize');

// Crear una nueva instancia de Sequelize
const sequelize = new Sequelize('ministeriodb', 'postgres', '12345', {//esto fue modificado por mi, la contraseña es nueva ya que la instale de nuevo 
    host: 'localhost',
    dialect: 'postgres',
    logging: false,  // deshabilita los logs de SQL en consola
});

// el error al Conectar a la base de datos sera porque la base de datos esta desinstialada o algo asi 
sequelize.authenticate()
    .then(() => {
        console.log('Connection to PostgreSQL has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = sequelize;
