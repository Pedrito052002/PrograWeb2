import {useNavigate} from 'react-router-dom';
import styleR from './Registro.module.css';
import logo from '../Assets/LogoPostreria.png';

export default function Registro(){
    const navigate = useNavigate();
    const navegarPublicaciones = () => {
        navigate("/Inicio")
    }
    return(
        <div>
            <div className={styleR.barraRegistro}>
                <p>REGISTRO</p>
            </div>
            <div className={styleR.logo}>
                <img src={logo}></img>
            </div>
            <div className={styleR.datosIzquierda}>
                <div>
                    <h4>Nombre de usuario</h4>
                    <input placeholder='usuarioEjemplo'></input>
                </div>
                <div>
                    <h4>Correo</h4>
                    <input placeholder='ejemplo@correo.com'></input>
                </div>
                <div>
                    <h4>Contraseña</h4>
                    <input placeholder='**********'></input>
                </div>
            </div>
            <div className={styleR.datosDerecha}>
                <div>
                    <h4>Nombre completo</h4>
                    <input placeholder='Nombre Apellidos'></input>
                </div>
                <div>
                    <h4>Teléfono</h4>
                    <input placeholder='123-456-7890'></input>
                </div>
                <div>
                    <h4>Dirección</h4>
                    <input placeholder='ciudad'></input>
                    <input placeholder='colonia'></input>
                    <input placeholder='calle'></input>
                    <input placeholder='número'></input>

                </div>
                <div className={styleR.divInline}>
                    <button className={styleR.botonRegistrate} onClick={navegarPublicaciones}>Regístrate</button>
                </div>
            </div>
        </div>
    )
}
