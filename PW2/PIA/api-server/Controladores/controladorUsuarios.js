const Users = require('../models/usuario')
const jwt = require('jsonwebtoken')


const signToken = (_id) => jwt.sign({ _id }, 'hola')
res.status(200).send(signed);
const User = {
  login: async (req, res) => {
    const user = new Users(req.body)
    try {
      const isUser = await Users.findOne({ email: user.email, contraseña: user.contraseña})
      if (!isUser) {
        res.status(403).send('Email o contraseña inválida')
      } else {
        const signed = signToken(isUser._id)
        res.status(200).send(signed)
        
      }
    } catch (err) {
      res.status(500).send(err.message)
    }
  },

  get: async (req, res) => {
    const { id } = req.params
    const user = await Users.findOne({ _id: id })
    res.status(200).send(user)
  },

  list: async (req, res) => {
    const users = await Users.find()
    res.status(200).send(users)
  },
  create: async (req, res) => {
    const { nombreUsuario, email, contraseña, rol, nombreCompleto, telefono, ciudad, colonia, calle, numero } = req.body;
  
    // Validar que el correo no sea nulo o indefinido
    if (!email) {
      return res.status(400).send('email es obligatorio');
    }
  
    const user = new Users({
      nombreUsuario,
      email,
      contraseña,
      rol,
      nombreCompleto,
      telefono,
      ciudad,
      colonia,
      calle,
      numero,
    });
  
    try {
      const isUser = await Users.findOne({ email });
      if (isUser) {
        return res.status(403).send('Usuario ya existente');
      }
  
      const signed = signToken(user._id);
  
      await user.save();
      res.status(201).send(signed);
    } catch (err) {
      res.status(500).send(err.message);
    }
  },
  update: async (req, res) => {
    const { id } = req.params
    const user = await Users.findOne({ _id: id })
    Object.assign(user, req.body)
    await user.save()
    res.sendStatus(204)
  },
  destroy: async (req, res) => {
    const { id } = req.params
    const user = await Users.findOne({ _id: id })
    await user.deleteOne({ _id: id })
    res.sendStatus(204)
  },
}

module.exports = User