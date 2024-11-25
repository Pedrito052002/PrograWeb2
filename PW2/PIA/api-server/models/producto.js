const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
    nombreProducto: { type: String, required: true },
    descripcion: { type: String, required: true },
    precio: { type: Number, required: true }, // Cambiado a Number
    inventario: { type: Number, required: true }, // Cambiado a Number
}, {
    timestamps: true, // Agrega createdAt y updatedAt automáticamente
});

module.exports = mongoose.model('Producto', productoSchema);