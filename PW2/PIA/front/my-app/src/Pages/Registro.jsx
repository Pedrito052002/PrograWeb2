import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styleR from './Registro.module.css';
import logo from '../Assets/LogoPostreria.png';
import { registrarUsuario } from '../Services/usuariosServices';

export default function Registro() {
    // Estado para el formulario
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        fullName: '',
        phone: '',
        role: '', // Nuevo campo para el rol
        address: {
            city: '',
            colony: '',
            street: '',
            number: '',
        },
    });

    // Estado para errores
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // Manejo de cambios en los inputs
    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name.includes('address.')) {
            const addressField = name.split('.')[1];
            setFormData((prev) => ({
                ...prev,
                address: {
                    ...prev.address,
                    [addressField]: value,
                },
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    // Registro del usuario
    const handleRegister = async () => {
        if (
            !formData.username ||
            !formData.email ||
            !formData.password ||
            !formData.fullName ||
            !formData.phone ||
            !formData.role ||
            !formData.address.city ||
            !formData.address.colony ||
            !formData.address.street ||
            !formData.address.number
        ) {
            setError('Por favor, llena todos los campos obligatorios.');
            return;
        }

        try {
            await registrarUsuario(formData); // Llama al servicio para registrar al usuario
            setError('');
            if (formData.role === 'Cliente') {
                navigate('/Inicio');
            } else if (formData.role === 'Vendedor') {
                navigate('/PantallaVendedor');
            }
        } catch (error) {
            setError('Error al registrar usuario.');
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
                        name="username"
                        placeholder="usuarioEjemplo"
                        value={formData.username}
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
                        name="password"
                        type="password"
                        placeholder="**********"
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <h4>Rol</h4>
                    <select
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                    >
                        <option value="">Selecciona tu rol</option>
                        <option value="Cliente">Cliente</option>
                        <option value="Vendedor">Vendedor</option>
                    </select>
                </div>
            </div>
            <div className={styleR.datosDerecha}>
                <div>
                    <h4>Nombre completo</h4>
                    <input
                        name="fullName"
                        placeholder="Nombre Apellidos"
                        value={formData.fullName}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <h4>Teléfono</h4>
                    <input
                        name="phone"
                        placeholder="123-456-7890"
                        value={formData.phone}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <h4>Dirección</h4>
                    <input
                        name="address.city"
                        placeholder="Ciudad"
                        value={formData.address.city}
                        onChange={handleInputChange}
                    />
                    <input
                        name="address.colony"
                        placeholder="Colonia"
                        value={formData.address.colony}
                        onChange={handleInputChange}
                    />
                    <input
                        name="address.street"
                        placeholder="Calle"
                        value={formData.address.street}
                        onChange={handleInputChange}
                    />
                    <input
                        name="address.number"
                        placeholder="Número"
                        value={formData.address.number}
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