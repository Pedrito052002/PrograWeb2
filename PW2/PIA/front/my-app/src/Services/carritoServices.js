const API_URL = 'http://localhost:3001/api/carrito'; // Cambia a la URL de tu servidor

export const obtenerCarrito = async (userId) => {
    const response = await fetch(`${API_URL}/${userId}`);
    if (!response.ok) throw new Error('No se pudo obtener el carrito');
    return await response.json();
  };
  
  // Crear un carrito para un usuario
  export const crearCarrito = async (userId) => {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId, productos: [] }), // Inicia un carrito vacío
    });
    if (!response.ok) throw new Error('No se pudo crear el carrito');
    return await response.json();
  };
  
  // Agregar un producto al carrito
  export const agregarProductoAlCarrito = async (userId, productoId, cantidad) => {
    const response = await fetch(`${API_URL}/agregar`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId, productoId, cantidad }),
    });
    if (!response.ok) throw new Error('No se pudo agregar al carrito');
    return await response.json();
  };