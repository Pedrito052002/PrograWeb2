const express = require('express');
const router = express.Router();
const Compras = require('../Controladores/controladorCompras');

// Ruta para realizar una compra
router.post('/:carritoId', Compras.realizarCompra);

// Ruta para obtener todas las compras de un usuario
router.get('/user/:userId', Compras.obtenerComprasUsuario);

// Ruta para obtener una compra específica por ID
router.get('/:compraId', Compras.obtenerCompraPorId);

module.exports = router;