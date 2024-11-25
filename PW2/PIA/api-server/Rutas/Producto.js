const express = require('express')
const router = express.Router()
const user = require('../Controladores/controladorProductos')

router.get('/producto', user.list)
router.get('/producto/id', user.get)
router.post('/producto', user.create)
router.put('/producto/id', user.update)
router.delete('/producto/id', user.destroy)

module.exports = router