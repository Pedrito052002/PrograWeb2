const express = require('express'); // Importando librerías
const http = require('http');
const cors = require('cors');
const mongoose = require('mongoose'); // Importar Mongoose para MongoDB

const app = express(); // Configuraciones del servidor

// Configuración del puerto
app.set('puerto', 3000);

// Middlewares
app.use(express.json());
app.use(cors());

// Conexión a MongoDB Atlas
const MONGO_URI = 'mongodb+srv://pedrohdzaguila:p010302ha@clusterpetercinthia.8fu1d.mongodb.net/?retryWrites=true&w=majority&appName=ClusterPeterCinthia';
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Conectado a MongoDB Atlas'))
.catch(err => console.error('Error al conectar con MongoDB:', err));

// Ruta inicial de prueba
app.get('/', (req, res) => {
    console.log("Revivan a Gojo"); // Log para verificar
    res.json({ 'Respuesta': 'Buenas noshes' });
});

// Inicialización del servidor HTTP
const httpServer = http.createServer(app); // Crea el servidor y espera peticiones
httpServer.listen(app.get('puerto'), "localhost", () => {
    console.log(`Server conectado en http://localhost:${app.get('puerto')}`);
});