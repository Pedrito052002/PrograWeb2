// En tu archivo de servicios en el frontend
const registrarUsuario = async (datos) => {
    const respuesta = await fetch('http://localhost:3001/api/usuarios/registro', {  // Cambia el puerto a 3001
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(datos)
    });
    const data = await respuesta.json();
    console.log(data);
  };