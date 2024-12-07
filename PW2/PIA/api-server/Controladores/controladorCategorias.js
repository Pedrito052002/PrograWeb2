const Categorias = require('../models/categoria')


const Categoria = {
  

  get: async (req, res) => {
    const { id } = req.params
    const categoria = await Categorias.findOne({ _id: id })
    res.status(200).send(categoria)
  },

  list: async (req, res) => {
    const categorias = await Categorias.find()
    res.status(200).send(categorias)
  },
  create: async (req, res) => {
    try {
        const categoria = new Categorias(req.body);
        const saveProduct = await categoria.save();
        res.status(201).json(saveProduct); // Devuelve el categoria creado
    } catch (err) {
        res.status(400).json({ error: 'Error al crear el categoria', details: err.message });
    }
  },
  update: async (req, res) => {
    const { id } = req.params
    const categoria = await Categorias.findOne({ _id: id })
    Object.assign(categoria, req.body)
    await categoria.save()
    res.sendStatus(204)
  },
  destroy: async (req, res) => {
    const { id } = req.params
    const categoria = await Categorias.findOne({ _id: id })
    await categoria.deleteOne({ _id: id })
    res.sendStatus(204)
  },
}

module.exports = Categoria