import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom';
import styleIS from './InicioSesion.module.css';
import fotoInicio from '../Assets/FotoInicio1.png';

export default function InicioSesion(){
    const navigate = useNavigate();
    const navegarPublicaciones = () => {
        navigate("/Inicio")
    }
    return(
        <div>
            <div className={styleIS.inicioSesionImagenes}>
                <img src={fotoInicio}></img>
            </div>
            <div className={styleIS.inicioSesionDatos}>
                <div>
                    <h4>Nombre de usuario/correo</h4>
                    <input></input>
                </div>
                <div>
                    <h4>Contraseña</h4>
                    <input></input>
                </div>
                <div>
                    <button className={styleIS.botonInicio} onClick={navegarPublicaciones}>Iniciar Sesión</button>
                </div>
                <div className={styleIS.divInline}>
                    <h5>¿No tienes una cuenta?</h5>
                    <button className={styleIS.botonRegistrate} onClick={navegarPublicaciones}>Regístrate</button>
                </div>
            </div>
        </div>
    )
}
