const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    fullName: { type: String, required: true },
    phone: { type: String, required: true },
    role: { type: String, required: true },
    address: {
        city: { type: String, required: true },
        colony: { type: String, required: true },
        street: { type: String, required: true },
        number: { type: String, required: true },
    },
});

module.exports = mongoose.model('Usuario', usuarioSchema);