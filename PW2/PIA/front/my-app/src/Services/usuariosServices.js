export const registrarUsuario = async (usuario) => {
    try {
        const response = await fetch('http://localhost:3001/api/user/registro', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(usuario),
        });
  
        console.log('Response status:', response.status);
  
        if (!response.ok) {
            const errorMessage = await response.text();
            throw new Error(`Error ${response.status}: ${errorMessage}`);
        }

        const textResponse = await response.text();
        console.log('Respuesta del servidor:', textResponse);

        let data;
        try {
            data = JSON.parse(textResponse);
            console.log('Usuario registrado:', data);
        } catch (e) {
            console.error('Error al convertir respuesta a JSON:', e);
            // Manejar caso en que la respuesta no sea un JSON válido (por ejemplo, JWT)
            data = textResponse; // Si no es JSON, lo dejamos como está (puede ser un token o un mensaje)
        }

        return data;
    } catch (error) {
        console.error('Error registrando usuario:', error.message || error);
        throw error; // Propaga el error hacia el componente que lo llama
    }
};

export const loginUsuario = async (usuario) => {
    try {
        const response = await fetch('http://localhost:3001/api/user/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(usuario),
        });

        console.log('Response status:', response.status);

        if (!response.ok) {
            const errorMessage = await response.text();
            throw new Error(`Error ${response.status}: ${errorMessage}`);
        }

        const token = await response.text(); // El token probablemente está en el cuerpo de la respuesta
        console.log('Token recibido:', token);

        return token; // Devolvemos el token recibido
    } catch (error) {
        console.error('Error iniciando sesión:', error.message || error);
        throw error; // Propaga el error hacia el componente que lo llama
    }
};