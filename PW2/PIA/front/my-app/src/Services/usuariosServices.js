// src/services/usuariosService.js
export const registrarUsuario = async (usuario) => {
    try {
        const response = await fetch('http://localhost:3000/api/user', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(usuario),
        });
        const data = await response.json();
        console.log('Usuario registrado:', data);
        return data;
    } catch (error) {
        console.error('Error registrando usuario:', error);
        throw error;
    }
};