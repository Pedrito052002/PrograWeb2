export const registrarUsuario = async (usuario) => {
  try {
      const response = await fetch('http://localhost:3001/api/user', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(usuario),
      });

      console.log('Response:', response);

      // Verifica si el servidor devuelve JSON
      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json(); // Aquí podría estar el problema
      console.log('Usuario registrado:', data);
      return data;
  } catch (error) {
      console.error('Error registrando usuario:', error);
      throw error;
  }
};