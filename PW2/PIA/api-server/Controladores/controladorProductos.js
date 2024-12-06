const Productos = require('../models/producto')


const Producto = {
  

  get: async (req, res) => {
    const { id } = req.params
    const producto = await Productos.findOne({ _id: id })
    res.status(200).send(producto)
  },

  list: async (req, res) => {
    const productos = await Productos.find()
    res.status(200).send(productos)
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
    const { id } = req.params
    const producto = await Productos.findOne({ _id: id })
    Object.assign(producto, req.body)
    await producto.save()
    res.sendStatus(204)
  },
  destroy: async (req, res) => {
    const { id } = req.params
    const producto = await Productos.findOne({ _id: id })
    await producto.deleteOne({ _id: id })
    res.sendStatus(204)
  },
}

module.exports = Producto