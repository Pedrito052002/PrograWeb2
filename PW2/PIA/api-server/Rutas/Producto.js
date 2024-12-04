const express = require('express')
const router = express.Router()
const product = require('../Controladores/controladorProductos')

router.get('/producto', product.list)
router.get('/producto/:id', product.get)
router.post('/producto', product.create)
router.put('/producto/:id', product.update)
router.delete('/producto/:id', product.destroy)

module.exports = router