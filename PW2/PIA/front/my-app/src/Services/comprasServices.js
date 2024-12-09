const API_URL = 'http://localhost:3001/api/compra'; // Cambia <puerto> por el puerto de tu backend

// Realizar una compra
export const realizarCompra = async (carritoId) => {
  try {
    const response = await fetch(`${API_URL}/${carritoId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Error al realizar la compra');
    }

    return await response.json();
  } catch (error) {
    console.error('Error al realizar la compra:', error.message);
    throw error;
  }
};

// Obtener compras por usuario
export const obtenerComprasPorUsuario = async (userId) => {
  try {
    const response = await fetch(`${API_URL}/usuario/${userId}`);

    if (!response.ok) {
      throw new Error('Error al obtener las compras del usuario');
    }

    return await response.json();
  } catch (error) {
    console.error('Error al obtener las compras del usuario:', error.message);
    throw error;
  }
};

// Obtener detalles de una compra
export const obtenerCompraPorId = async (compraId) => {
  try {
    const response = await fetch(`${API_URL}/${compraId}`);

    if (!response.ok) {
      throw new Error('Error al obtener los detalles de la compra');
    }

    return await response.json();
  } catch (error) {
    console.error('Error al obtener los detalles de la compra:', error.message);
    throw error;
  }
};