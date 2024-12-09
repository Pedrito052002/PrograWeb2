const mongoose = require('mongoose');

const carritoSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
  productos: [
    {
      productoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Producto'},
      cantidad: { type: Number, default: 1 }
    }
  ]
});

const Carrito = mongoose.model('Carrito', carritoSchema);
module.exports = Carrito;