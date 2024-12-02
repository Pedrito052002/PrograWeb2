const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  nombreUsuario: { type: String, required: true },
  correo: { type: String, required: true, unique: true },
  contraseña: { type: String, required: true },
  rol: { type: String, enum: ['vendedor', 'usuario'], required: true },
  nombreCompleto: { type: String, required: true },
  telefono: { type: String },
  ciudad: { type: String },
  colonia: { type: String },
  calle: { type: String },
  numero: { type: String }
});

module.exports = mongoose.model('Usuario', usuarioSchema);