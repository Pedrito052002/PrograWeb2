const express = require('express')
const router = express.Router()
const carrito= require('../Controladores/controladorCarrito')

router.get('/carrito', carrito.list)
router.get('/carrito/:id', carrito.get)
router.post('/carrito', carrito.create)
router.post('/carrito/agregar', carrito.agregarAlCarrito)
router.delete('/carrito/producto:id', carrito.destroy)

module.exports = router