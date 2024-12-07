
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styleIS from './InicioSesion.module.css';
import fotoInicio from '../Assets/FotoInicio1.png';
import { loginUsuario } from '../Services/usuariosServices'; // Importa la función de login

export default function InicioSesion() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [error, setError] = useState('');

    const manejarCambioEmail = (e) => {
        setEmail(e.target.value);
    };

    const manejarCambioContraseña = (e) => {
        setContraseña(e.target.value);
    };

    const navegarRegistro = () => {
        navigate("/Registrarte");
    };

    const manejarLogin = async () => {
        const usuario = { email, contraseña };
        try {
            const login = await loginUsuario(usuario);
            localStorage.setItem('token', login.token); // Guarda el token en localStorage (puedes usarlo para autenticar en otras páginas)
            console.log(login);
            localStorage.setItem('rol', login.rol);
            if(login.rol === "vendedor"){

                navigate("/PantallaVendedor")

            }
            if(login.rol === "cliente"){

                navigate("/Inicio"); // Redirige a la pantalla principal

            }
            
        } catch (err) {
            setError('Email o contraseña inválida');
        }
    };

    return (
        <div>
            <div className={styleIS.inicioSesionImagenes}>
                <img src={fotoInicio} alt="Imagen de inicio" />
            </div>
            <div className={styleIS.inicioSesionDatos}>
                <div>
                    <h4>Nombre de usuario/correo</h4>
                    <input
                        type="email"
                        placeholder='ejemplo@correo.com'
                        value={email}
                        onChange={manejarCambioEmail}
                    />
                </div>
                <div>
                    <h4>Contraseña</h4>
                    <input
                        type="password"
                        placeholder='**********'
                        value={contraseña}
                        onChange={manejarCambioContraseña}
                    />
                </div>
                {error && <div className={styleIS.error}>{error}</div>} {/* Mostrar error si es necesario */}
                <div>
                    <button className={styleIS.botonInicio} onClick={manejarLogin}>Iniciar Sesión</button>
                </div>
                <div className={styleIS.divInline}>
                    <h5>¿No tienes una cuenta?</h5>
                    <button className={styleIS.botonRegistrate} onClick={navegarRegistro}>Regístrate</button>
                </div>
            </div>
        </div>
    );
}