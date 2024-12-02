// index.js
const express = require('express'); // Importando librerías
const cors = require('cors');
const mongoose = require('mongoose'); // Importar Mongoose para MongoDB
const userRoutes = require('./Rutas/Usuario');  // Importa las rutas correctamente

const app = express(); // Configuraciones del servidor

// Configuración del puerto
const port = 3001;  // Declara la variable 'port'

// Middlewares
app.use(express.json());
app.use(cors());

// Traer Rutas
app.use('/api', userRoutes);  // Aquí está correctamente usando las rutas

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
    console.log('Arrancando la aplicación');
});