const { Sequelize } = require('sequelize');
const sequelize = require('../database'); // Asegúrate de que la ruta sea correcta
const Elemento = require('../models/elementos');
const Categoria = require('../models/categoria');

const elementoCtrl = {};

// Obtener todos los elementos
elementoCtrl.getElementos = async (req, res) => {
    try {
        const elementos = await Elemento.findAll({
            include: [
                {
                    model: Categoria,
                    as: 'categoria',
                },
            ],
        });
        res.json(elementos);
    } catch (error) {
        res.status(400).json({
            status: '0',
            msg: 'Error al obtener elementos.',
        });
    }
};

// Obtener un elemento por ID
elementoCtrl.getElementoById = async (req, res) => {
    const { id } = req.params;

    try {
        const elemento = await Elemento.findOne({
            where: { id },
            include: [
                {
                    model: Categoria,
                    as: 'categoria',
                },
            ],
        });

        if (!elemento) {
            return res.status(404).json({
                status: '0',
                msg: 'Elemento no encontrado.',
            });
        }

        res.json(elemento);
    } catch (error) {
        res.status(400).json({
            status: '0',
            msg: 'Error al obtener el elemento.',
        });
    }
};
elementoCtrl.getCategoriaByElemento = async (req, res) => {
    const { elemento_nombre } = req.params;

    try {
        const elemento = await Elemento.findOne({
            where: { elemento_nombre },
            include: [
                {
                    model: Categoria,
                    as: 'categoria',
                },
            ],
        });

        if (!elemento) {
            return res.status(404).json({
                status: '0',
                msg: 'Elemento no encontrado.',
            });
        }

        res.json(elemento.categoria);
    } catch (error) {
        res.status(400).json({
            status: '0',
            msg: 'Error al obtener la categoría del elemento.',
        });
    }
};

// Crear un nuevo elemento
elementoCtrl.createElemento = async (req, res) => {
    const { elemento_nombre, categoria_id } = req.body;

    if (!elemento_nombre || !categoria_id) {
        return res.status(400).json({
            status: '0',
            msg: 'Los campos elemento_nombre y categoria_id son obligatorios.',
        });
    }

    try {
        const elemento = await Elemento.create({ elemento_nombre, categoria_id });
        res.json({
            status: '1',
            msg: 'Elemento guardado.',
            data: elemento,
        });
    } catch (error) {
        console.error('Error al guardar elemento:', error);
        res.status(400).json({
            status: '0',
            msg: 'Error al guardar elemento.',
        });
    }
};

// Actualizar un elemento
elementoCtrl.updateElemento = async (req, res) => {
    const { id } = req.params;
    const { elemento_nombre, categoria_id } = req.body;

    try {
        const [updated] = await Elemento.update(
            { elemento_nombre, categoria_id },
            { where: { id } }
        );

        if (updated) {
            const updatedElemento = await Elemento.findOne({ where: { id } });
            return res.status(200).json({ updatedElemento });
        }
        throw new Error('Elemento no encontrado');
    } catch (error) {
        res.status(400).json({
            status: '0',
            msg: 'Error al actualizar elemento.',
        });
    }
};

// Eliminar un elemento
elementoCtrl.deleteElemento = async (req, res) => {
    const { id } = req.params;

    try {
        const deleted = await Elemento.destroy({ where: { id } });

        if (deleted) {
            return res.status(204).send();
        }
        throw new Error('Elemento no encontrado');
    } catch (error) {
        res.status(400).json({
            status: '0',
            msg: 'Error al eliminar elemento.',
        });
    }
};
// Obtener elementos por nombre de categoría
elementoCtrl.getElementosByCategoria = async (req, res) => {
    const { categoria_nombre } = req.params;

    try {
        const categoria = await Categoria.findOne({ where: { categoria_nombre } });

        if (!categoria) {
            return res.status(404).json({
                status: '0',
                msg: 'Categoría no encontrada.',
            });
        }

        const elementos = await Elemento.findAll({
            where: { categoria_id: categoria.id },
            include: [
                {
                    model: Categoria,
                    as: 'categoria',
                },
            ],
        });

        res.json(elementos);
    } catch (error) {
        res.status(400).json({
            status: '0',
            msg: 'Error al obtener elementos por categoría.',
        });
    }
};
// Obtener categoría por ID de elemento
elementoCtrl.getCategoriaByElemento = async (req, res) => {
    let { elemento_nombre } = req.params;

    console.log("🔍 Nombre recibido en el backend:", elemento_nombre); // 👀 Agrega este log

    try {
        elemento_nombre = elemento_nombre.trim().toLowerCase();

        const elemento = await Elemento.findOne({
            where: {
                elemento_nombre: sequelize.where(
                    sequelize.fn('LOWER', sequelize.col('elemento_nombre')), 
                    elemento_nombre
                )
            },
            include: [{ model: Categoria, as: 'categoria' }],
        });

        if (!elemento) {
            console.log("⚠️ Elemento no encontrado en la base de datos.");
            return res.status(404).json({ status: '0', msg: 'Elemento no encontrado.' });
        }

        res.json(elemento.categoria);
    } catch (error) {
        console.error("❌ Error en la consulta:", error);
        res.status(400).json({ status: '0', msg: 'Error al obtener la categoría del elemento.' });
    }
};



module.exports = elementoCtrl;