const { Sequelize } = require('sequelize');

// Crear una nueva instancia de Sequelize
const sequelize = new Sequelize('novedades', 'postgres', 'Sistemas2025', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false,  // deshabilita los logs de SQL en consola
});

// Función para ajustar la secuencia de autoincremento
async function adjustSequence() {
    try {
        await sequelize.query(`
            SELECT setval(pg_get_serial_sequence('dependencias', 'id'), COALESCE(MAX(id), 1) + 1, false) FROM dependencias;
        `);
        console.log("Secuencia de autoincremento ajustada correctamente.");
    } catch (error) {
        console.error("Error al ajustar la secuencia de autoincremento:", error);
    }
}

// Autenticar y ajustar la secuencia
sequelize.authenticate()
    .then(() => {
        console.log('Connection to PostgreSQL has been established successfully.');
        adjustSequence(); // Ajustar la secuencia después de la autenticación
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = sequelize;