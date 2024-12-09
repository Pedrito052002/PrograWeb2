const express = require('express'); // Importando librerías
const http = require('http');
const cors = require('cors');
const mongoose = require('mongoose'); // Importar Mongoose para MongoDB

const userRoutes = require('./Rutas/Usuario.js');
const productoRoutes = require('./Rutas/Producto.js')
const categoryRoutes = require('./Rutas/Categoria.js')
const carritoRoutes = require('./Rutas/Carrito.js')
const compraRoutes = require('./Rutas/Compras.js');

const app = express(); // Configuraciones del servidor

// Configuración del puerto
port = 3001;

// Middlewares
app.use(express.json());
app.use(cors());

// Traer Rutas
app.use('/api', userRoutes);
app.use('/api', productoRoutes);
app.use('/api', categoryRoutes);
app.use('/api', carritoRoutes);
app.use('/api/', compraRoutes);


// Conexión a MongoDB Atlas
const MONGO_URI = 'mongodb+srv://pedrohdzaguila:p010302ha@clusterpetercinthia.8fu1d.mongodb.net/?retryWrites=true&w=majority&appName=ClusterPeterCinthia';
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Conectado a MongoDB Atlas'))
.catch(err => console.error('Error al conectar con MongoDB:', err));


app.get('*', (req, res) => {
    res.status(404).send('Esta página no existe');
  });

  app.listen(port, () => {
    console.log('Arrancando al aplicación');
  });