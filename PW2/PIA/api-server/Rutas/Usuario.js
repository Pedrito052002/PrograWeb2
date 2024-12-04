const express = require('express');
const router = express.Router();
const controladorUsuarios = require('../Controladores/controladorUsuarios');

// Ruta para registrar un usuario
router.post('/user/registro', controladorUsuarios.create);

// Ruta para iniciar sesión
router.post('/user/login', controladorUsuarios.login);

module.exports = router;