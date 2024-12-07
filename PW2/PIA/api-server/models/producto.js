const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
    nombreProducto: { type: String, required: true },
    descripcion: { type: String, required: true },
    precio: { type: Number, required: true }, // Precio como número
    inventario: { type: Number, required: true }, // Inventario como número
    categoria: { type: mongoose.Schema.Types.ObjectId, ref: 'Categoria', required: true }, // Referencia a la categoría
}, {
    timestamps: true, // Agrega createdAt y updatedAt automáticamente
});

module.exports = mongoose.model('Producto', productoSchema);