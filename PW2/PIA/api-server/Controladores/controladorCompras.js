const Compra = require('../models/compras');
const Carrito = require('../models/carrito'); // Asegúrate de importar el modelo de Carrito correctamente

const CompraController = {
  // Realizar una compra
  realizarCompra: async (req, res) => {
    const { carritoId } = req.params;
    console.log('ID de carrito recibido:', carritoId); // Log para verificar

    try {
      // Encontrar el carrito y cargar los productos
      const carrito = await Carrito.findById(carritoId).populate('productos.productoId');
      if (!carrito) {
        console.log('Carrito no encontrado'); // Log
        return res.status(404).send('Carrito no encontrado');
      }

      // Crear una nueva compra
      const nuevaCompra = new Compra({
        userId: carrito.userId,
        productos: carrito.productos,
        total: carrito.productos.reduce(
          (sum, producto) => sum + producto.productoId.precio * producto.cantidad,
          0
        ),
        estado: 'Pendiente', // Puedes cambiar este estado según sea necesario
        fecha: new Date(),
      });

      // Guardar la compra
      await nuevaCompra.save();

      // Eliminar el carrito después de la compra
      await Carrito.findByIdAndDelete(carritoId);

      console.log('Compra realizada:', nuevaCompra); // Log
      res.status(201).send({ message: 'Compra realizada exitosamente', compra: nuevaCompra });
    } catch (error) {
      console.error('Error al realizar la compra:', error);
      res.status(500).send('Error al realizar la compra');
    }
  },

  // Obtener todas las compras de un usuario
  obtenerComprasUsuario: async (req, res) => {
    const { userId } = req.params;

    try {
      const compras = await Compra.find({ userId }).populate('productos.productoId');
      res.status(200).send(compras);
    } catch (error) {
      console.error('Error al obtener las compras del usuario:', error);
      res.status(500).send('Error al obtener las compras del usuario');
    }
  },

  // Obtener una compra específica por ID
  obtenerCompraPorId: async (req, res) => {
    const { compraId } = req.params;

    try {
      const compra = await Compra.findById(compraId).populate('productos.productoId');
      if (!compra) return res.status(404).send('Compra no encontrada');

      res.status(200).send(compra);
    } catch (error) {
      console.error('Error al obtener la compra:', error);
      res.status(500).send('Error al obtener la compra');
    }
  },
};

module.exports = CompraController;