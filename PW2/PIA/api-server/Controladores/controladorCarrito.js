const mongoose = require('mongoose');
const Carritos = require('../models/carrito'); // Asegúrate de usar el modelo correcto
const Producto = require('../models/producto'); // Asegúrate de importar el modelo de Producto

const Carrito = {

  get: async (req, res) => {
    const { id } = req.params;
    const carrito = await Carritos.findOne({ _id: id });
    res.status(200).send(carrito);
  },

  // Corregido getByUserId
  getByUserId: async (req, res) => {
    try {
      const userId = req.params.userId;
      // Buscar el carrito por userId y hacer populate de los productos
      const carrito = await Carritos.findOne({ userId }).populate('productos.productoId'); // Populate productos.productoId
      if (!carrito) {
        return res.status(404).json({ message: 'Carrito no encontrado para este usuario' });
      }
      res.json(carrito);
    } catch (err) {
      res.status(500).json({ message: 'Error al obtener el carrito', error: err.message });
    }
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
    const { id } = req.params; // ID del carrito
    const { productoId, cantidad } = req.body; // ID del producto y la cantidad a actualizar
    console.log(req.params)
    console.log(req.body)
    try {
      // Buscar el carrito por su ID
      const carrito = await Carritos.findOne({ _id: id });
      console.log(carrito)
      
      if (!carrito) {
        return res.status(404).json({ message: 'Carrito no encontrado' });
      }
  
      // Buscar el producto dentro del carrito
      const productoExistente = carrito.productos.find(p => p.productoId.toString() === productoId);
  
      if (!productoExistente) {
        return res.status(404).json({ message: 'Producto no encontrado en el carrito' });
      }
  
      // Actualizar la cantidad del producto
      productoExistente.cantidad = cantidad; // Aumentamos o disminuimos la cantidad
  
      // Asegurarnos de que la cantidad no sea menor que 1
      if (productoExistente.cantidad < 1) {
        return res.status(400).json({ message: 'La cantidad no puede ser menor a 1' });
      }
  
      // Guardar el carrito con la actualización
      await carrito.save();
  
      res.status(200).json({ message: 'Carrito actualizado', carrito });
    } catch (err) {
      console.error('Error al actualizar el carrito:', err);
      res.status(500).json({ message: 'Error al actualizar el carrito', error: err.message });
    }
  },

  destroy: async (req, res) => {
    const { id } = req.params;
    const carrito = await Carritos.findOne({ _id: id });
    await carrito.deleteOne({ _id: id });
    res.sendStatus(204);
  },

  agregarAlCarrito: async (req, res) => {
    const { userId, productoId, cantidad } = req.body;

    // Validación de los IDs de usuario y producto
    if (!mongoose.Types.ObjectId.isValid(userId) || !mongoose.Types.ObjectId.isValid(productoId)) {
        return res.status(400).json({ error: 'ID de usuario o producto inválido' });
    }

    try {
        const userObjId = new mongoose.Types.ObjectId(userId);
        const productoObjId = new mongoose.Types.ObjectId(productoId);

        const producto = await Producto.findById(productoObjId);

        if (!producto) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }

        let carrito = await Carritos.findOne({ userId: userObjId });

        if (!carrito) {
            carrito = new Carritos({ userId: userObjId, productos: [] });
        }

        const productoExistente = carrito.productos.find(p => p.productoId && p.productoId.toString() === productoObjId.toString());

        if (productoExistente) {
            productoExistente.cantidad += cantidad || 1;
        } else {
            carrito.productos.push({ productoId: productoObjId, cantidad: cantidad || 1 });
        }

        await carrito.save();
        res.status(200).json({ message: 'Producto agregado al carrito', carrito });

    } catch (error) {
        // Imprimir el error completo en la consola para mayor visibilidad
        console.error('Error al agregar al carrito:', error);

        // Responder con detalles del error
        res.status(500).json({ error: 'Error al agregar al carrito', details: error.message || error });
    }
  },

  eliminarProducto: async (req, res) => {
    const { id, productoId } = req.params;

    // Validación de IDs
    if (!mongoose.Types.ObjectId.isValid(id) || !mongoose.Types.ObjectId.isValid(productoId)) {
      return res.status(400).json({ error: 'ID de carrito o producto inválido' });
    }

    try {
      const carrito = await Carritos.findById(id);

      if (!carrito) {
        return res.status(404).json({ error: 'Carrito no encontrado' });
      }

      // Filtrar los productos para eliminar el producto con el productoId especificado
      const productosActualizados = carrito.productos.filter(
        (producto) => producto.productoId.toString() !== productoId
      );

      // Si no se encuentra el producto, devolver un error
      if (productosActualizados.length === carrito.productos.length) {
        return res.status(404).json({ error: 'Producto no encontrado en el carrito' });
      }

      // Actualizar el carrito con los productos restantes
      carrito.productos = productosActualizados;
      await carrito.save();

      res.status(200).json({ message: 'Producto eliminado del carrito', carrito });
    } catch (error) {
      console.error('Error al eliminar el producto del carrito:', error);
      res.status(500).json({ error: 'Error al eliminar el producto del carrito', details: error.message });
    }
  },

};

module.exports = Carrito;