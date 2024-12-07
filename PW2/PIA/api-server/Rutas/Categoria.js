const express = require('express')
const router = express.Router()
const category = require('../Controladores/controladorCategorias')

router.get('/categoria', category.list)
router.get('/categoria/:id', category.get)
router.post('/categoria', category.create)
router.put('/categoria/:id', category.update)
router.delete('/categoria/:id', category.destroy)

module.exports = router