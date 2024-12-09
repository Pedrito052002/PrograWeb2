const mongoose = require('mongoose');
const Carritos = require('../models/carrito');
const Producto = require('../models/producto'); // Asegúrate de importar el modelo de Producto

const Carrito = {

  get: async (req, res) => {
    const { id } = req.params;
    const carrito = await Carritos.findOne({ _id: id });
    res.status(200).send(carrito);
  },

  list: async (req, res) => {
    const carritos = await Carritos.find();
    res.status(200).send(carritos);
  },

  create: async (req, res) => {
    try {
      const carrito = new Carritos(req.body);
      const saveProduct = await carrito.save();
      res.status(201).json(saveProduct); // Devuelve el carrito creado
    } catch (err) {
      res.status(400).json({ error: 'Error al crear el carrito', details: err.message });
    }
  },

  update: async (req, res) => {
    const { id } = req.params;
    const carrito = await Carritos.findOne({ _id: id });
    Object.assign(carrito, req.body);
    await carrito.save();
    res.sendStatus(204);
  },

  destroy: async (req, res) => {
    const { id } = req.params;
    const carrito = await Carritos.findOne({ _id: id });
    await carrito.deleteOne({ _id: id });
    res.sendStatus(204);
  },

  agregarAlCarrito: async (req, res) => {
    const { userId, productoId, cantidad } = req.body;

    try {
      // Convertir los IDs a ObjectId con 'new'
      const userObjId = new mongoose.Types.ObjectId(userId);
      const productoObjId = new mongoose.Types.ObjectId(productoId);

      // Imprimir los valores recibidos
      //console.log('userId:', userId);
      //console.log('productoId:', productoId);
      //console.log('cantidad:', cantidad);

      // Verificar si el producto existe en la base de datos
      const producto = await Producto.findById(productoObjId);
      console.log('Producto encontrado:', producto); // Imprimir el producto encontrado

      if (!producto) {
        return res.status(404).json({ error: 'Producto no encontrado' });
      }

      // Buscar el carrito del usuario
      let carrito = await Carritos.findOne({ userId: userObjId });

      // Si no existe el carrito, crear uno nuevo
      if (!carrito) {
        carrito = new Carritos({ userId: userObjId, productos: [] });
      }

      // Verificar si el producto ya está en el carrito
      const productoExistente = carrito.productos.find(p => p.productoId && p.productoId.toString() === productoObjId.toString());

      if (productoExistente) {
        // Si el producto ya está, incrementar la cantidad
        productoExistente.cantidad += cantidad;
      } else {
        // Si el producto no está, agregarlo al carrito
        carrito.productos.push({ productoId: productoObjId, cantidad });
      }

      // Guardar el carrito actualizado
      await carrito.save();

      // Responder con el carrito actualizado
      res.status(200).json(carrito);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al agregar al carrito', details: error.message });
    }
  }
};

module.exports = Carrito;