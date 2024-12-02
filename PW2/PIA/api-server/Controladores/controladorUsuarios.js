// Controladores/controladorUsuarios.js
const Usuario = require('../models/usuario');  // Asegúrate de que esta importación sea correcta

// Función para registrar un usuario
const registrarUsuario = async (req, res) => {
  try {
    const { nombreUsuario, correo, contraseña, rol, nombreCompleto, telefono, ciudad, colonia, calle, numero } = req.body;

    // Crear nuevo usuario sin cifrado de contraseña
    const nuevoUsuario = new Usuario({
      nombreUsuario,
      correo,
      contraseña,  // Aquí almacenamos la contraseña tal cual
      rol,
      nombreCompleto,
      telefono,
      ciudad,
      colonia,
      calle,
      numero
    });

    // Guardar el usuario en la base de datos
    await nuevoUsuario.save();
    res.status(201).send({ mensaje: 'Usuario registrado con éxito' });
  } catch (error) {
    res.status(500).send({ error: 'Error al registrar usuario' });
  }
};

// Función para iniciar sesión (ajústalo según tu lógica de autenticación)
const iniciarSesion = async (req, res) => {
  try {
    const { correo, contraseña } = req.body;

    // Buscar al usuario por correo (ajusta la lógica según tu necesidad)
    const usuario = await Usuario.findOne({ correo });

    if (!usuario) {
      return res.status(400).send({ error: 'Usuario no encontrado' });
    }

    if (usuario.contraseña !== contraseña) {
      return res.status(400).send({ error: 'Contraseña incorrecta' });
    }

    res.status(200).send({ mensaje: 'Inicio de sesión exitoso' });
  } catch (error) {
    res.status(500).send({ error: 'Error al iniciar sesión' });
  }
};

module.exports = {
  registrarUsuario,
  iniciarSesion
};