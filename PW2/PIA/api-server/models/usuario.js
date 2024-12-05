const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  nombreUsuario: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  contraseña: { type: String, required: true },
  rol: { type: String, enum: ['vendedor', 'cliente'], required: true },
  nombreCompleto: { type: String, required: true },
  telefono: { type: String },
  ciudad: { type: String },
  colonia: { type: String },
  calle: { type: String },
  numero: { type: String }
});

module.exports = mongoose.model('Usuario', usuarioSchema); // Cambié 'usuarioSchem' por 'usuarioSchema'