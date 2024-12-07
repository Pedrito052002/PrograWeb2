const mongoose = require('mongoose');

const categoriaSchema = new mongoose.Schema({
    nombreCategoria: { type: String, required: true },
}, {
    timestamps: true, // Agrega createdAt y updatedAt automáticamente
});

module.exports = mongoose.model('Categoria', categoriaSchema);