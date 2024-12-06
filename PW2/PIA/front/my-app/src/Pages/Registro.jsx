import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styleR from './Registro.module.css';
import logo from '../Assets/LogoPostreria.png';
import { registrarUsuario } from '../Services/usuariosServices';

export default function Registro() {
    // Estado para el formulario
    const [formData, setFormData] = useState({
        nombreUsuario: '',
        email: '',
        contraseña: '',
        nombreCompleto: '',
        telefono: '',
        rol: '',
        ciudad: '',
        colonia: '',
        calle: '', // Cambiado de street a calle
        numero: '', // Cambiado de number a numero
    });

    // Estado para errores
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // Manejo de cambios en los inputs
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Registro del usuario
    const handleRegister = async () => {
        if (
            !formData.nombreUsuario ||
            !formData.email ||
            !formData.contraseña ||
            !formData.nombreCompleto ||
            !formData.telefono ||
            !formData.rol ||
            !formData.ciudad ||
            !formData.colonia ||
            !formData.calle ||
            !formData.numero
        ) {
            setError('Por favor, llena todos los campos obligatorios.');
            return;
        }
    
        try {
            const resultado = await registrarUsuario(formData);
            setError('');
    
            // Verificamos si la respuesta contiene un mensaje de éxito o un token JWT
            if (resultado && resultado.message) {
                alert('Registro exitoso: ' + resultado.message); 
            } else {
                // Si no hay mensaje, mostramos la respuesta completa (por ejemplo, un JWT)
                alert('Registro exitoso. Respuesta del servidor: ' + resultado);
            }
    
            if (formData.rol.toLowerCase() === 'cliente') {
                navigate('/Inicio');
            } else if (formData.rol.toLowerCase() === 'vendedor') {
                navigate('/PantallaVendedor');
            }
        } catch (error) {
            setError('Error al registrar usuario. Intenta nuevamente.');
        }
    };

    return (
        <div>
            <div className={styleR.barraRegistro}>
                <p>REGISTRO</p>
            </div>
            <div className={styleR.logo}>
                <img src={logo} alt="Logo" />
            </div>
            <div className={styleR.datosIzquierda}>
                <div>
                    <h4>Nombre de usuario</h4>
                    <input
                        name="nombreUsuario"
                        placeholder="usuarioEjemplo"
                        value={formData.nombreUsuario}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <h4>Correo</h4>
                    <input
                        name="email"
                        placeholder="ejemplo@correo.com"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <h4>Contraseña</h4>
                    <input
                        name="contraseña"
                        type="password"
                        placeholder="**********"
                        value={formData.contraseña}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <h4>Rol</h4>
                    <select
                        name="rol"
                        value={formData.rol}
                        onChange={handleInputChange}
                    >
                        <option value="">Selecciona tu rol</option>
                        <option value="cliente">Cliente</option>
                        <option value="vendedor">Vendedor</option>
                    </select>
                </div>
            </div>
            <div className={styleR.datosDerecha}>
                <div>
                    <h4>Nombre completo</h4>
                    <input
                        name="nombreCompleto"
                        placeholder="Nombre Apellidos"
                        value={formData.nombreCompleto}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <h4>Teléfono</h4>
                    <input
                        name="telefono"
                        placeholder="123-456-7890"
                        value={formData.telefono}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <h4>Ciudad</h4>
                    <input
                        name="ciudad"
                        placeholder="Ciudad"
                        value={formData.ciudad}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <h4>Colonia</h4>
                    <input
                        name="colonia"
                        placeholder="Colonia"
                        value={formData.colonia}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <h4>Calle</h4>
                    <input
                        name="calle"
                        placeholder="Calle"
                        value={formData.calle}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <h4>Número</h4>
                    <input
                        name="numero"
                        placeholder="Número"
                        value={formData.numero}
                        onChange={handleInputChange}
                    />
                </div>
                <div className={styleR.divInline}>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <button className={styleR.botonRegistrate} onClick={handleRegister}>
                        Regístrate
                    </button>
                </div>
            </div>
        </div>
    );
}