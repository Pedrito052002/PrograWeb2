const express = require('express') //importando librerias
const http = require('http')
const cors = require('cors')
 
const app = express(); //tiene todas las configuraciones del servidor
 
app.set('puerto' , 3000)
app.use(express.json())
 
app.get('/', (req, res)=>{
    console.log("Revivan a Gojo")
    res.json({'Respuesta ' : ' Buenas noshes '})
})
 
 
 
const httpServer = http.createServer(app)  //crea servidor y espera la peticion
httpServer.listen(app.get('puerto'), "localhost", () => {
    console.log("Server conectado")
})