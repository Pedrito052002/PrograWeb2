// Rutas/Usuario.js
const express = require('express');
const router = express.Router();
const controladorUsuarios = require('../Controladores/controladorUsuarios');

// Ruta para registrar un usuario
router.post('/registro', controladorUsuarios.registrarUsuario);

// Ruta para iniciar sesión
router.post('/login', controladorUsuarios.iniciarSesion);

module.exports = router;