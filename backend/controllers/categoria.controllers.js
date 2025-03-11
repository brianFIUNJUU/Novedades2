const Categoria = require('../models/categoria');

// Obtener todas las categorías
exports.getAllCategorias = async (req, res) => {
    try {
        const categorias = await Categoria.findAll();
        res.status(200).json(categorias);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las categorías', error });
    }
};

// Obtener una categoría por ID
exports.getCategoriaById = async (req, res) => {
    try {
        const categoria = await Categoria.findByPk(req.params.id);
        if (categoria) {
            res.status(200).json(categoria);
        } else {
            res.status(404).json({ message: 'Categoría no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la categoría', error });
    }
};

// Crear una nueva categoría
exports.createCategoria = async (req, res) => {
    try {
        const { categoria_nombre } = req.body;
        const nuevaCategoria = await Categoria.create({ categoria_nombre });
        res.status(201).json(nuevaCategoria);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear la categoría', error });
    }
};

// Actualizar una categoría existente
exports.updateCategoria = async (req, res) => {
    try {
        const { categoria_nombre } = req.body;
        const categoria = await Categoria.findByPk(req.params.id);
        if (categoria) {
            categoria.categoria_nombre = categoria_nombre;
            await categoria.save();
            res.status(200).json(categoria);
        } else {
            res.status(404).json({ message: 'Categoría no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar la categoría', error });
    }
};

// Eliminar una categoría
exports.deleteCategoria = async (req, res) => {
    try {
        const categoria = await Categoria.findByPk(req.params.id);
        if (categoria) {
            await categoria.destroy();
            res.status(200).json({ message: 'Categoría eliminada correctamente' });
        } else {
            res.status(404).json({ message: 'Categoría no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la categoría', error });
    }
};