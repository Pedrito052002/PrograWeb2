
const Productos = require('../models/producto');

const Producto = {
    get: async (req, res) => {
        const { id } = req.params;
        try {
            const producto = await Productos.findOne({ _id: id }).populate('categoria', 'nombreCategoria'); // Poblamos el nombre de la categoría
            res.status(200).send(producto);
        } catch (err) {
            res.status(500).send({ error: 'Error al obtener el producto', details: err.message });
        }
    },

    list: async (req, res) => {
        try {
            const productos = await Productos.find().populate('categoria', 'nombreCategoria'); // Incluimos el nombre de la categoría
            res.status(200).send(productos);
        } catch (err) {
            res.status(500).send({ error: 'Error al obtener productos', details: err.message });
        }
    },

    create: async (req, res) => {
        try {
            const producto = new Productos(req.body);
            const saveProduct = await producto.save();
            res.status(201).json(saveProduct); // Devuelve el producto creado
        } catch (err) {
            res.status(400).json({ error: 'Error al crear el producto', details: err.message });
        }
    },

    update: async (req, res) => {
        const { id } = req.params;
        try {
            const producto = await Productos.findOne({ _id: id });
            Object.assign(producto, req.body);
            await producto.save();
            res.sendStatus(204);
        } catch (err) {
            res.status(500).json({ error: 'Error al actualizar el producto', details: err.message });
        }
    },

    destroy: async (req, res) => {
        const { id } = req.params;
        try {
            await Productos.deleteOne({ _id: id });
            res.sendStatus(204);
        } catch (err) {
            res.status(500).json({ error: 'Error al eliminar el producto', details: err.message });
        }
    },
};

module.exports = Producto;