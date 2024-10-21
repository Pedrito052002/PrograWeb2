import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom';
import style from './InicioSesion.module.css';
import fotoInicio from '../Assets/FotoInicio1.png';

export default function InicioSesion(){
    const navigate = useNavigate();
    const navegarPublicaciones = () => {
        navigate("/Inicio")
    }
    return(
        <div>
            <div className={style.inicioSesionImagenes}>
                <img src={fotoInicio}></img>
            </div>
            <div className={style.inicioSesionDatos}>
                <div>
                    <h4>Nombre de usuario/correo</h4>
                </div>
                <div>
                    <h4>Contraseña</h4>
                </div>
                <div>
                    <Button onClick={navegarPublicaciones}>Iniciar Sesión</Button>
                </div>
                <div>
                    <h5>¿No tienes una cuenta?</h5>
                    <Button onClick={navegarPublicaciones}>Regístrate</Button>
                </div>
            </div>
        </div>
    )
}
