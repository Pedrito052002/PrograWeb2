const express = require('express');
const router = express.Router();
const user = require('../Controladores/controladorUsuarios');

router.get('/user', user.list);
router.get('/user/:id', user.get); // Cambiado :id
router.post('/user/login', user.login);
router.post('/user', user.create);
router.put('/user/:id', user.update); // Cambiado :id
router.delete('/user/:id', user.destroy); // Cambiado :id

module.exports = router