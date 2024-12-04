export const registrarProducto = async (producto) => {
    try {
        const response = await fetch('http://localhost:3001/api/producto', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(producto),
        });
  
        console.log('Response:', response);
  
        // Verifica si el servidor devuelve JSON
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
  
        const data = await response.json(); // Aquí podría estar el problema
        console.log('Producto registrado:', data);
        return data;
    } catch (error) {
        console.error('Error registrando producto:', error);
        throw error;
    }
  };