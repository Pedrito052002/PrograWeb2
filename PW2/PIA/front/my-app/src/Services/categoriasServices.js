export const registrarCategoria = async (categoria) => {
    try {
        const response = await fetch('http://localhost:3001/api/categoria', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(categoria),
        });
  
        console.log('Response:', response);
  
        // Verifica si el servidor devuelve JSON
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
  
        const data = await response.json(); // Aquí podría estar el problema
        console.log('Categoria registrado:', data);
        return data;
    } catch (error) {
        console.error('Error registrando categoria:', error);
        throw error;
    }
  };